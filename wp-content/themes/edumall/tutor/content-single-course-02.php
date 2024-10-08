<?php
/**
 * Template for displaying single course
 *
 * @package         Edumall/TutorLMS/Templates
 * @theme-since     1.0.0
 * @theme-version   2.9.3
 */

defined( 'ABSPATH' ) || exit;

global $edumall_course;

$is_administrator      = current_user_can( 'administrator' );
$is_instructor         = tutor_utils()->is_instructor_of_this_course();
$course_content_access = (bool) get_tutor_option( 'course_content_access_for_ia' );
?>

<div class="page-content">

	<?php do_action( 'tutor_course/single/before/wrap' ); ?>

	<div <?php tutor_post_class(); ?>>
		<div class="tutor-full-width-course-top tutor-course-top-info">
			<div class="container">
				<div class="row row-xs-center">
					<div class="col-md-5">
						<div class="tutor-single-course-thumbnail">
							<?php
							if ( $edumall_course->has_video() ) {
								tutor_course_video();
							} else {
								Edumall_Image::the_post_thumbnail( [ 'size' => '470x300' ] );
							}
							?>
						</div>
					</div>
					<div class="col-md-7 col-md-first">
						<?php tutor_course_lead_info(); ?>
						<div class="tutor-lead-info-btn-group">
							<?php do_action( 'tutor_course/single/actions_btn_group/before' ); ?>

							<?php if ( $edumall_course->is_enrolled() ) : ?>
								<?php tutor_load_template( 'single.course.custom.enrolled-action-buttons' ); ?>
							<?php elseif ( $course_content_access && ( $is_administrator || $is_instructor ) ) : ?>
								<?php tutor_load_template( 'single.course.custom.continue-lesson-button' ); ?>

								<?php tutor_load_template( 'custom.wishlist-button-02' ); ?>
							<?php else: ?>
								<?php Edumall_Tutor::instance()->single_course_add_to_cart(); ?>

								<?php tutor_load_template( 'custom.wishlist-button-02' ); ?>
							<?php endif; ?>

							<?php do_action( 'tutor_course/single/actions_btn_group/after' ); ?>
						</div>
					</div>
				</div>
			</div>
		</div>

		<?php tutor_load_template( 'single.course.custom.tabs-nav-01' ); ?>

		<div class="tutor-full-width-course-body">
			<div class="container">
				<div class="row tm-sticky-parent">
					<div class="col-lg-8 col-course-content">
						<div class="tutor-single-course-main-content tm-sticky-column">

							<?php do_action( 'tutor_course/single/before/inner-wrap' ); ?>

							<div id="tutor-course-tab-overview"
							     class="active single-course-tab single-course-tab-overview">
								<?php if ( $edumall_course->is_enrolled() ) : ?>
									<?php tutor_course_completing_progress_bar(); ?>
								<?php endif; ?>

								<?php Edumall_Tutor::instance()->course_prerequisites(); ?>
								<?php tutor_course_content(); ?>
								<?php tutor_course_benefits_html(); ?>
								<?php tutor_course_requirements_html(); ?>
								<?php tutor_course_target_audience_html(); ?>
							</div>

							<div id="tutor-course-tab-curriculum"
							     class="single-course-tab single-course-tab-curriculum">
								<?php tutor_course_topics(); ?>
							</div>

							<?php if ( $edumall_course->is_viewable() ) : ?>
								<div id="tutor-course-tab-resources"
								     class="single-course-tab single-course-tab-resources">
									<?php Edumall_Tutor::instance()->single_course_attachment_html(); ?>
								</div>

								<div id="tutor-course-tab-question-and-answer"
								     class="single-course-tab single-course-tab-question-and-answer">
									<?php tutor_course_question_and_answer(); ?>
								</div>
							<?php endif; ?>

							<div id="tutor-course-tab-instructors"
							     class="single-course-tab single-course-tab-instructors">
								<?php tutor_course_instructors_html(); ?>
							</div>

							<?php if ( $edumall_course->is_viewable() ) : ?>
								<div id="tutor-course-tab-announcements"
								     class="single-course-tab single-course-tab-announcements">
									<?php tutor_course_announcements(); ?>
								</div>
							<?php endif; ?>

							<?php if ( $edumall_course->is_viewable() && $edumall_course->has_classroom_stream() ) : ?>
								<div id="tutor-course-tab-google-classroom-stream"
								     class="single-course-tab single-course-tab-google-classroom-stream">
									<?php do_action( 'tutor_course/single/enrolled/google-classroom-stream', get_the_ID() ); ?>
								</div>
							<?php endif; ?>

							<?php if ( $edumall_course->is_enrolled() ) : ?>
								<?php if ( class_exists( '\TUTOR_GB\GradeBook' ) ) { ?>
									<div id="tutor-course-tab-gradebook"
									     class="single-course-tab single-course-tab-gradebook">
										<?php Edumall_Tutor::instance()->get_grade_book_template(); ?>
									</div>
								<?php } ?>
							<?php endif; ?>

							<div id="tutor-course-tab-reviews" class="single-course-tab single-course-tab-reviews">
								<?php tutor_course_target_reviews_html(); ?>
							</div>

							<?php do_action( 'tutor_course/single/after/inner-wrap' ); ?>

						</div>
					</div>
					<div class="col-lg-4 col-course-sidebar">
						<div class="tutor-single-course-sidebar tm-sticky-column">

							<?php do_action( 'tutor_course/single/before/sidebar' ); ?>

							<?php tutor_load_template( 'single.course.course-entry-box' ); ?>

							<?php do_action( 'tutor_course/single/after/sidebar' ); ?>

							<?php Edumall_Sidebar::instance()->generated_sidebar( 'course_single_sidebar' ); ?>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<?php do_action( 'tutor_course/single/after/wrap' ); ?>

</div>
