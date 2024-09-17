<?php
defined( 'ABSPATH' ) || exit;

/**
 * Plugin installation and activation for WordPress themes
 */
if ( ! class_exists( 'Edumall_Register_Plugins' ) ) {
	class Edumall_Register_Plugins {

		protected static $instance = null;

		public static function instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		function initialize() {
			add_filter( 'insight_core_tgm_plugins', array( $this, 'register_required_plugins' ) );
		}

		public function register_required_plugins( $plugins ) {
			/*
			 * Array of plugin arrays. Required keys are name and slug.
			 * If the source is NOT from the .org repo, then source is also required.
			 */
			$new_plugins = array(
				array(
					'name'     => esc_html__( 'Insight Core', 'edumall' ),
					'slug'     => 'insight-core',
					'source'   => 'https://www.dropbox.com/scl/fi/u6dujwpy2eudi38tbircs/insight-core-2.6.6.zip?rlkey=h79eo9bjn27tfj0c18wvhr6ky&dl=1',
					'version'  => '2.6.6',
					'required' => true,
				),
				array(
					'name'     => esc_html__( 'Edumall Addons', 'edumall' ),
					'slug'     => 'edumall-addons',
					'source'   => 'https://www.dropbox.com/s/7vqi0rifunqo7cj/edumall-addons-1.2.0.zip?dl=1',
					'version'  => '1.2.0',
					'required' => true,
				),
				array(
					'name'     => esc_html__( 'Elementor', 'edumall' ),
					'slug'     => 'elementor',
					'required' => true,
				),
				array(
					'name'        => 'ThemeMove Addons For Elementor',
					'description' => 'Additional functions for Elementor',
					'slug'        => 'tm-addons-for-elementor',
					'logo'        => 'insight',
					'source'      => 'https://www.dropbox.com/scl/fi/sljs4b1itrspuqe6romfx/tm-addons-for-elementor-1.3.2.zip?rlkey=75n9q9pvpv952d5b2dz5ibhue&dl=1',
					'version'     => '1.3.2',
				),
				array(
					'name'    => esc_html__( 'Revolution Slider', 'edumall' ),
					'slug'    => 'revslider',
					'source'  => 'https://www.dropbox.com/scl/fi/lz7cx897upiqupa7mhcu5/revslider-6.6.20.zip?rlkey=n9r1ect3oomio05gi722j01cm&dl=1',
					'version' => '6.6.20',
				),
				array(
					'name' => esc_html__( 'WP Events Manager', 'edumall' ),
					'slug' => 'wp-events-manager',
				),
				array(
					'name' => esc_html__( 'Video Conferencing with Zoom', 'edumall' ),
					'slug' => 'video-conferencing-with-zoom-api',
				),
				array(
					'name' => esc_html__( 'BuddyPress', 'edumall' ),
					'slug' => 'buddypress',
				),
				array(
					'name' => esc_html__( 'MediaPress', 'edumall' ),
					'slug' => 'mediapress',
				),
				array(
					'name' => esc_html__( 'WordPress Social Login', 'edumall' ),
					'slug' => 'miniorange-login-openid',
				),
				array(
					'name' => esc_html__( 'Contact Form 7', 'edumall' ),
					'slug' => 'contact-form-7',
				),
				array(
					'name' => esc_html__( 'MailChimp for WordPress', 'edumall' ),
					'slug' => 'mailchimp-for-wp',
				),
				array(
					'name' => esc_html__( 'WooCommerce', 'edumall' ),
					'slug' => 'woocommerce',
				),
				array(
					'name' => esc_html__( 'WPC Smart Compare for WooCommerce', 'edumall' ),
					'slug' => 'woo-smart-compare',
				),
				array(
					'name' => esc_html__( 'WPC Smart Wishlist for WooCommerce', 'edumall' ),
					'slug' => 'woo-smart-wishlist',
				),
				array(
					'name'    => esc_html__( 'Insight Swatches', 'edumall' ),
					'slug'    => 'insight-swatches',
					'source'  => 'https://www.dropbox.com/scl/fi/j2po0jzzlb8zs4b5t7zu4/insight-swatches-1.7.0.zip?rlkey=1st3r1s1w3w43fbyrek90df75&dl=1',
					'version' => '1.7.0',
				),
				array(
					'name' => esc_html__( 'WP-PostViews', 'edumall' ),
					'slug' => 'wp-postviews',
				),
				array(
					'name'    => esc_html__( 'Tutor LMS Pro', 'edumall' ),
					'slug'    => 'tutor-pro',
					'source'  => 'https://www.dropbox.com/scl/fi/6sd03knux5tg0l0n34kj8/tutor-pro-2.6.0.zip?rlkey=8vazv14hcb94tgmoohrxztfw6&dl=1',
					'version' => '2.6.0',
				),
				/**
				 * Tutor LMS has set up page after plugin activated.
				 * This made TGA stop activating other plugins after it.
				 * Move it to last activate plugin will resolve this problem.
				 */
				array(
					'name' => esc_html__( 'Tutor LMS', 'edumall' ),
					'slug' => 'tutor',
				),
				array(
					'name'    => esc_html__( 'Tutor LMS Certificate Builder', 'edumall' ),
					'slug'    => 'tutor-lms-certificate-builder',
					'source'  => 'https://www.dropbox.com/scl/fi/h6bkan0xh4z5db0l7of1k/tutor-lms-certificate-builder-1.0.5.zip?rlkey=96n6ilwvobldcmk3fpsna5yaq&dl=1',
					'version' => '1.0.5',
				),
			);

			$plugins = array_merge( $plugins, $new_plugins );

			return $plugins;
		}
	}

	Edumall_Register_Plugins::instance()->initialize();
}
