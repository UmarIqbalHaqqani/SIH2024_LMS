<?php
/**
 * E-mail template for admin when a new instructor signup request is received.
 *
 * @package TutorPro
 * @subpackage Templates\Email
 *
 * @since 2.0.0
 */

?>
<!DOCTYPE html>
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
	<?php require TUTOR_EMAIL()->path . 'views/email_styles.php'; ?>
</head>

<body>
	<div class="tutor-email-body">
		<div class="tutor-email-wrapper" style="background-color: #fff;">
			<?php require TUTOR_PRO()->path . 'templates/email/email_header.php'; ?>
			<div class="tutor-email-content">
				<?php require TUTOR_PRO()->path . 'templates/email/email_heading_content.php'; ?>

				<table class="tutor-email-datatable">
					<tr>
						<td class="label"><?php esc_html_e( 'Instructor Name:', 'tutor-pro' ); ?></td>
						<td><strong>{instructor_name}</strong></td>
					</tr>
					<tr>
						<td class="label"><?php esc_html_e( 'Email Address:', 'tutor-pro' ); ?></td>
						<td><strong>{instructor_email}</strong></td>
					</tr>
				</table>

				<div class="tutor-email-buttons">
					<a href="{review_url}" data-source="email-btn-url" class="tutor-email-button"><?php esc_html_e( 'Review New Instructor Request', 'tutor-pro' ); ?></a>
				</div>
			</div>
			<?php require TUTOR_PRO()->path . 'templates/email/email_footer.php'; ?>
		</div>
	</div>
</body>
</html>
