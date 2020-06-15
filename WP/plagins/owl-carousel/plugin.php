<?php
/**
 * Plugin Name: owlCarouse2-2.2.1
 * Version: 1.0.0
 * Description: Import Owl Carousel 2.2.1
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


function owlCarouse2_styles_and_scripts_enqueue() {
  wp_enqueue_style('owl-carousel2-2.2.1-css','https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.min.css', array(), '2.2.1');
  
  wp_enqueue_script('owl-carousel2-2.2.1-js', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min.js', array(), '2.2.1', true);
}
add_action( 'init', 'owlCarouse2_styles_and_scripts_enqueue');
