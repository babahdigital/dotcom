<?php

/**
 * Disable the emoji's
 */
function disable_emojis()
{
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
    add_filter('tiny_mce_plugins', 'disable_emojis_tinymce');
    add_filter('wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2);
}
add_action('init', 'disable_emojis');

/**
 * Filter function used to remove the tinymce emoji plugin.
 * 
 * @param array $plugins 
 * @return array Difference betwen the two arrays
 */
function disable_emojis_tinymce($plugins)
{
    if (is_array($plugins)) {
        return array_diff($plugins, array('wpemoji'));
    } else {
        return array();
    }
}

/**
 * Remove emoji CDN hostname from DNS prefetching hints.
 *
 * @param array $urls URLs to print for resource hints.
 * @param string $relation_type The relation type the URLs are printed for.
 * @return array Difference betwen the two arrays.
 */
function disable_emojis_remove_dns_prefetch($urls, $relation_type)
{
    if ('dns-prefetch' == $relation_type) {
        /** This filter is documented in wp-includes/formatting.php */
        $emoji_svg_url = apply_filters('emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/');

        $urls = array_diff($urls, array($emoji_svg_url));
    }

    return $urls;
}

/**
 * Remove wp-block-library-css
 */

add_action('wp_print_styles', 'wps_deregister_styles', 100);
function wps_deregister_styles()
{
    if (!is_admin()) {
        wp_dequeue_style('wp-block-library');
        wp_deregister_style('wp-block-library');
    }
}

// Disable use XML-RPC
add_filter('xmlrpc_enabled', '__return_false');

function removeHeadLinks()
{
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    remove_action('wp_head', 'rest_output_link_wp_head', 10);
    remove_action('wp_head', 'wp_oembed_add_discovery_links', 10);
    remove_action('template_redirect', 'rest_output_link_header', 11, 0);
    remove_action('wp_head', 'feed_links', 2);
    remove_action('wp_head', 'feed_links_extra', 3);
}
add_action('init', 'removeHeadLinks');

// Remove Global Styles and SVG Filters from WP 5.9.1 - 2022-02-27
function remove_global_styles_and_svg_filters()
{
    remove_action('wp_enqueue_scripts', 'wp_enqueue_global_styles');
    remove_action('wp_body_open', 'wp_global_styles_render_svg_filters');
}
add_action('init', 'remove_global_styles_and_svg_filters');

// classic-theme-styles
add_action('wp_enqueue_scripts', 'mywptheme_child_deregister_styles', 20);
function mywptheme_child_deregister_styles()
{
    wp_dequeue_style('classic-theme-styles');
}

//Remove All Meta Generators
ini_set('output_buffering', 'on'); // turns on output_buffering
function remove_meta_generators($html)
{
    $pattern = '/<meta name(.*)=(.*)"generator"(.*)>/i';
    $html = preg_replace($pattern, '', $html);
    return $html;
}
function clean_meta_generators($html)
{
    ob_start('remove_meta_generators');
}
add_action('get_header', 'clean_meta_generators', 100);
add_action('wp_footer', function () {
    ob_end_flush();
}, 100);


// Remove comment-reply.min.js from footer
function crunchify_clean_header_hook()
{
    wp_deregister_script('comment-reply');
}
add_action('init', 'crunchify_clean_header_hook');

function remove_lost_your_password($text)
{
    return str_replace(array('Lost your password?', 'Lost your password'), '', trim($text, '?'));
}
add_filter('gettext', 'remove_lost_your_password');

//Halaman Login
function disable_reset_lost_password()
{
    return false;
}
add_filter('allow_password_reset', 'disable_reset_lost_password');
add_filter('login_display_language_dropdown', '__return_false');

add_action('login_head', 'hide_login_nav');
function hide_login_nav()
{ ?>
    <style>
        #nav,
        #backtoblog,
        .login h1,
        .login form .forgetmenot,
        .login .success,
        .login #login_error,
        .login .message {
            display: none;
        }

        .login form {
            margin-top: 30% !important;
        }

        .wp-core-ui .button-group.button-large .button,
        .wp-core-ui .button.button-large {
            width: 100%;
            min-height: 45px !important;
        }
    </style>
<?php }

/** Remove Dashicons from Admin Bar for non logged in users **/
add_action('wp_print_styles', 'jltwp_adminify_remove_dashicons', 100);

/** Remove Dashicons from Admin Bar for non logged in users **/
function jltwp_adminify_remove_dashicons()
{
    if (!is_admin_bar_showing() && !is_customize_preview()) {
        wp_dequeue_style('dashicons');
        wp_deregister_style('dashicons');
    }
}
