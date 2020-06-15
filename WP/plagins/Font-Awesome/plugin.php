<?php
/**
 * Plugin Name: FontAwesome
 * Version: 1.0.0
 * Description: Import font-awesome
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


function font_awesome_enqueue() {
	wp_enqueue_script('fa5', 'https://use.fontawesome.com/releases/v5.13.0/js/all.js', [], '5.13.0', true);
  // wp_enqueue_style('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', array(), '4.7.0');
}
add_action( 'init', 'font_awesome_enqueue');

