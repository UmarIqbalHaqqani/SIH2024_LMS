<?php
/**
 * @package TutorLMS/Templates
 * @version 1.7.5
 */

defined( 'ABSPATH' ) || exit;
?>
	<h3><?php esc_html_e( 'Settings', 'edumall' ); ?></h3>

	<div class="tutor-dashboard-content-inner">
		<?php tutor_load_template( 'dashboard.settings.nav-bar', [ 'active_setting_nav' => 'profile' ] ); ?>
	</div>
<?php
if ( isset( $GLOBALS['tutor_setting_nav']['profile'] ) ) {
	tutor_load_template( 'dashboard.settings.profile' );
} else {
	foreach ( $GLOBALS['tutor_setting_nav'] as $page ) {
		echo '<script>window.location.replace("', $page['url'], '");</script>';
		break;
	}
}
