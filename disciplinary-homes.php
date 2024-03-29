<?php
/**
 * Plugin Name:       Disciplinary Homes
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.2
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            MESH Research
 * License:           MIT
 * Text Domain:       disciplinary-homes
 *
 * @package           DisciplinaryHomes
 */

namespace DisciplinaryHomes;

use DisciplinaryHomes\Rest\DisciplinaryHomesController;

/**
 * Composer autoloader.
 *
 * @see https://getcomposer.org/doc/01-basic-usage.md#autoloading
 * @see https://anchor.host/composer-autoloading-within-wordpress-plugin/
 */
require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function block_init() {
	register_block_type( __DIR__ . '/build/activity-feed' );
	register_block_type( __DIR__ . '/build/deposit-list' );
	register_block_type( __DIR__ . '/build/metrics-row' );
	register_block_type( __DIR__ . '/build/discipline-actions' );
	register_block_type( __DIR__ . '/build/discipline-header' );
	register_block_type( __DIR__ . '/build/grant-footer' );
}
add_action( 'init', __NAMESPACE__ . '\block_init' );

/**
 * Enqueues block frontend assets.
 */
function frontend_enqueue() {
	// Load styles from WordPress components.
	wp_enqueue_style(
		'wordpress-components-styles',
		includes_url( '/css/dist/components/style.min.css' )
	);
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\frontend_enqueue' );

/**
 * Register REST routes.
 */
function register_rest_routes() {
	$controller = new DisciplinaryHomesController();
	$controller->register_routes();
}
add_action( 'rest_api_init', __NAMESPACE__ . '\register_rest_routes' );
