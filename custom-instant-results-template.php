<?php
/**
 * Plugin Name: Custom Instant Results Template
 * Description: A fast and flexible search and query engine for WordPress.
 * Version: 0.1.0
 * Author: 10up
 * Author URI: https://10up.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: custom-instant-results-template
 */

add_action(
	'wp_enqueue_scripts',
	function() {
		wp_enqueue_script(
			'custom-instant-results-template',
			plugin_dir_url( __FILE__ ) . 'build/script.js',
			[ 'wp-element', 'wp-hooks' ]
		);
	},
	9
);
