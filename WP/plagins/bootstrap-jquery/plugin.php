<?php
/**
 * Plugin Name: bootstrap-4.4.1 and jquery-3.4.1
 * Version: 1.0.0
 * Description: Import bootstrap and jquery
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


function bootstrap_styles_and_scripts_enqueue() {
  wp_enqueue_style('bootstrap-4.4.1-css','https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css', array(), '4.4.1');
  wp_enqueue_script('bootstrap-4.4.1-js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js', array(), '4.4.1', true);
}
// add_action( 'wp_enqueue_scripts', 'bootstrap_styles_and_scripts_enqueue',80 );
add_action( 'init', 'bootstrap_styles_and_scripts_enqueue');




function my_custom_scripts() {
    if( !is_admin() ) {
        wp_deregister_script('jquery');
        wp_register_script('jquery', ("https://code.jquery.com/jquery-3.4.1.min.js"), false, '');
        wp_enqueue_script('jquery');
    }
}
add_action( 'wp_enqueue_scripts', 'my_custom_scripts' );