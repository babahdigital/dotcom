<?php

//require get_template_directory() . '/inc/animasi-depan.php';
//include_once ( get_template_directory_uri() . '/inc/bersih.php' );
include_once WP_CONTENT_DIR . '/themes/bprotek/inc/bersih.php';
//require get_template_directory() . '/inc/icon.php';
//require get_template_directory() . '/inc/cookies.php';
//require get_template_directory() . '/inc/widget.php';
//require get_template_directory() . '/inc/blog-config.php';
//require get_template_directory() . '/inc/gambar.php';
//require get_template_directory() . '/inc/kontak.php';


/**
 * Clean up output of stylesheet <link> tags
 */
function clean_style_tag($input)
{
    preg_match_all("!<link rel='stylesheet'\s?(id='[^']+')?\s+href='(.*)' type='text/css' media='(.*)' />!", $input, $matches);
    if (empty($matches[2])) {
        return $input;
    }
    // Only display media if it is meaningful
    $media = $matches[3][0] !== '' && $matches[3][0] !== 'all' ? ' media="' . $matches[3][0] . '"' : '';

    return '<link rel="stylesheet" href="' . $matches[2][0] . '"' . $media . '>' . "\n";
}

/**
 * Clean up output of <script> tags
 */
function clean_script_tag($input)
{
    $input = str_replace("type='text/javascript' ", '', $input);

    return str_replace("'", '"', $input);
}

//
add_action('wp_loaded', 'prefix_output_buffer_start');
function prefix_output_buffer_start()
{
    ob_start("prefix_output_callback");
}

function prefix_output_callback($buffer)
{
    return preg_replace("%[ ]type=[\'\"]text\/(javascript|css)[\'\"]%", '', $buffer);
}

add_filter('script_loader_tag', 'add_attribs_to_scripts', 10, 3);
function add_attribs_to_scripts($tag, $handle, $src)
{

    // The handles of the enqueued scripts we want to defer
    $async_scripts = array(
        'jquery-migrate',
    );

    if (in_array($handle, $async_scripts)) {
        return '<script src="' . $src . '" async="async" type="text/javascript"></script>' . "\n\r";
    }

    return $tag;
}

// remove wp version number from scripts and styles
function remove_css_js_version($src)
{
    if (strpos($src, '?ver='))
        $src = remove_query_arg('ver', $src);
    return $src;
}
add_filter('style_loader_src', 'remove_css_js_version', 9999);
add_filter('script_loader_src', 'remove_css_js_version', 9999);


// Remove ID Attribute CSS Dan JS
add_filter('style_loader_tag', function ($tag, $handle) {
    return str_replace(" id='$handle-css'", '', $tag);
}, 10, 2);

add_filter('script_loader_tag', function ($tag, $handle) {
    return str_replace(" id='$handle-js'", '', $tag);
}, 11, 3);
