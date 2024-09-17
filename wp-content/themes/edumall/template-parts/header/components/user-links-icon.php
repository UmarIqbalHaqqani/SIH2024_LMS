<?php
/**
 * User links box on header
 *
 * @package Edumall
 * @since   1.3.1
 * @version 2.4.0
 */

defined( 'ABSPATH' ) || exit;
?>

<div class="header-user-links-icon">
	<div class="user-links">
		<?php
		if ( ! is_user_logged_in() ) {
			?>
			<a class="header-login-link open-popup-login hint--bounce hint--bottom open-modal-login"
			   href="javascript:void(0);"
			   aria-label="<?php esc_attr_e( 'Log In', 'edumall' ); ?>">
				<div class="user-icon">
					<span class="fa-light fa-user"></span>
				</div>
			</a>
			<?php
		} else {
			$profile_url = apply_filters( 'edumall_user_profile_url', '' );
			?>
			<a class="hint--bounce hint--bottom open-modal-login header-profile-link"
			   aria-label="<?php esc_attr_e( 'My Account', 'edumall' ); ?>"
			   href="<?php echo esc_url( $profile_url ); ?>">
				<div class="user-icon">
					<span class="fa-light fa-user"></span>
				</div>
			</a>
		<?php } ?>
	</div>
</div>
