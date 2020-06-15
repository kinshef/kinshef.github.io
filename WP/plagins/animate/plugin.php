<?php
/**
 * Plugin Name: animate-3.7.0
 * Version: 1.0.0
 * Description: Import animate style
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


function animate_styles_enqueue() {
  wp_enqueue_style('animate-3.7.0','https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css', array(), '3.7.0');
}
add_action( 'init', 'animate_styles_enqueue');
