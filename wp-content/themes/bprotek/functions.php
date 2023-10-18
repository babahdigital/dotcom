<?php

/**
 * Theme functions file
 */

/**
 * Enqueue parent theme styles first
 * Replaces previous method using @import
 * <http://codex.wordpress.org/Child_Themes>
 */

/** 
 * Script Utama
 */
include_once WP_CONTENT_DIR . '/themes/bprotek/inc/setup.php';
if (!current_user_can('administrator')) {
    include_once WP_CONTENT_DIR . '/themes/bprotek/inc/minify.php';
}

//Litespeed API
add_filter('litespeed_crawler_disable_blocklist', '__return_true');
add_filter("litespeed_media_ignore_remote_missing_sizes", "__return_true");

//Bawaan Themes
add_action('wp_enqueue_scripts', 'jevelin_child_enqueue', 99);
function jevelin_child_enqueue()
{
    wp_enqueue_style('jevelin-child-style', get_stylesheet_directory_uri() . '/style.css');
    wp_enqueue_script('jevelin-child-scripts', get_stylesheet_directory_uri() . '/js/scripts.js');
}

/**
 * Mulai Untuk Babah Digital
 */

//Script Halaman Selain Kontak
if (!is_page('kontak', 'loker')) {
    add_filter('wpcf7_load_js', '__return_false');
    add_filter('wpcf7_load_css', '__return_false');
    add_filter('wpcf7cf_load_js', '__return_false');
    add_filter('wpcf7cf_load_css', '__return_false');
}
add_filter('wpcf7_validate_configuration', '__return_false');

function megamenu_dequeue_google_fonts()
{
    wp_dequeue_style('megamenu-google-fonts');
}
add_action('wp_print_styles', 'megamenu_dequeue_google_fonts', 100);
