<?php
/**
 * BuddyPress - Users Friends
 *
 * @since   3.0.0
 * @version 12.0.0
 */

defined( 'ABSPATH' ) || exit;
?>
<?php if ( bp_is_my_profile() ) : ?>
	<nav class="<?php bp_nouveau_single_item_subnav_classes(); ?>" id="subnav" role="navigation"
	     aria-label="<?php esc_attr_e( 'Friends menu', 'edumall' ); ?>">
		<ul id="member-secondary-nav" class="subnav bp-priority-subnav-nav-items"><?php bp_get_template_part( 'members/single/parts/item-subnav' ); ?></ul>
		<?php bp_nouveau_member_hook( '', 'secondary_nav' ); ?>
	</nav>
<?php endif; ?>

<?php
switch ( bp_current_action() ) :

	// Home/My Friends
	case 'my-friends':
		bp_nouveau_member_hook( 'before', 'friends_content' );
		?>

		<div class="members friends" data-bp-list="members">

			<div id="bp-ajax-loader"><?php bp_nouveau_user_feedback( 'member-friends-loading' ); ?></div>

		</div><!-- .members.friends -->

		<?php
		bp_nouveau_member_hook( 'after', 'friends_content' );
		break;

	case 'requests':
		bp_get_template_part( 'members/single/friends/requests' );
		break;

	// Any other
	default:
		bp_get_template_part( 'members/single/plugins' );
		break;
endswitch;
