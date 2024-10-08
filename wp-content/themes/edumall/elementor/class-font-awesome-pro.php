<?php

namespace Edumall_Elementor;

defined( 'ABSPATH' ) || exit;

class Font_Awesome_Pro {

	private static $_instance = null;

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	public function initialize() {
		add_action( 'elementor/frontend/after_register_styles', function() {
			foreach ( [ 'solid', 'regular', 'brands' ] as $style ) {
				wp_deregister_style( 'elementor-icons-fa-' . $style );
			}
		}, 20 );

		add_filter( 'elementor/icons_manager/native', [ $this, 'replace_font_awesome_pro' ], 10 );

		add_action( 'elementor/editor/after_enqueue_scripts', [ $this, 'admin_enqueue_scripts' ], 11 );
		add_action( 'elementor/frontend/after_enqueue_scripts', [ $this, 'admin_enqueue_scripts' ], 11 );
	}

	public function replace_font_awesome_pro( $settings ) {
		$json_url = EDUMALL_ELEMENTOR_ASSETS . '/libs/font-awesome-pro/%s.js';
		$version  = '6.4.2-pro';

		$icons['fa-regular'] = [
			'name'          => 'fa-regular',
			'label'         => esc_html__( 'Font Awesome - Regular Pro', 'edumall' ),
			'url'           => false,
			'enqueue'       => false,
			'prefix'        => 'fa-',
			'displayPrefix' => 'fa-regular',
			'labelIcon'     => 'fa-regular fa-flag',
			'ver'           => $version,
			'fetchJson'     => sprintf( $json_url, 'regular' ),
			'native'        => true,
		];

		$icons['fa-solid'] = [
			'name'          => 'fa-solid',
			'label'         => esc_html__( 'Font Awesome - Solid Pro', 'edumall' ),
			'url'           => false,
			'enqueue'       => false,
			'prefix'        => 'fa-',
			'displayPrefix' => 'fa-solid',
			'labelIcon'     => 'fa-solid fa-flag',
			'ver'           => $version,
			'fetchJson'     => sprintf( $json_url, 'solid' ),
			'native'        => true,
		];

		$icons['fa-brands'] = [
			'name'          => 'fa-brands',
			'label'         => esc_html__( 'Font Awesome - Brands Pro', 'edumall' ),
			'url'           => false,
			'enqueue'       => false,
			'prefix'        => 'fa-',
			'displayPrefix' => 'fa-brands',
			'labelIcon'     => 'fa-brands fa-font-awesome-flag',
			'ver'           => $version,
			'fetchJson'     => sprintf( $json_url, 'brands' ),
			'native'        => true,
		];

		$icons['fa-light'] = [
			'name'          => 'fa-light',
			'label'         => esc_html__( 'Font Awesome - Light Pro', 'edumall' ),
			'url'           => false,
			'enqueue'       => false,
			'prefix'        => 'fa-',
			'displayPrefix' => 'fa-light',
			'labelIcon'     => 'fa-light fa-flag',
			'ver'           => $version,
			'fetchJson'     => sprintf( $json_url, 'light' ),
			'native'        => true,
		];

		$icons['fa-duotone'] = [
			'name'          => 'fa-duotone',
			'label'         => esc_html__( 'Font Awesome - Duotone Pro', 'edumall' ),
			'url'           => false,
			'enqueue'       => false,
			'prefix'        => 'fa-',
			'displayPrefix' => 'fa-duotone',
			'labelIcon'     => 'fa-duotone fa-flag',
			'ver'           => $version,
			'fetchJson'     => sprintf( $json_url, 'duotone' ),
			'native'        => true,
		];

		// Remove old from plugin.
		unset(
			$settings['fa-solid'],
			$settings['fa-regular'],
			$settings['fa-brands'],
			$settings['fa-light'],
			$settings['fa-duotone']
		);

		return array_merge( $icons, $settings );
	}

	function admin_enqueue_scripts() {
		wp_enqueue_style( 'font-awesome-pro', EDUMALL_THEME_URI . '/assets/fonts/awesome/css/fontawesome-all.min.css', null, '6.4.2' );
	}
}

Font_Awesome_Pro::instance()->initialize();
