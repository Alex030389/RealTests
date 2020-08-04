// /////////////////////////////////////////////// data-slider="0"
$(window).resize(function() {
	startSlider0();
})

startSlider0();

function startSlider0() {
	if($('.agitation__slider.d-none').is(':hidden')) {
		$('[data-slide="0"]').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000,
			swipe: false,
			infinite: true,
			accessibility: false,
			fade: true
		});

		$('[data-slide="0"]').on('lazyLoaded', function(event, slick, currentSlide, nextSlide){
			objectFitImages();
		});
	}
}





//////////////////////////////////////////// data-slider="1"
$('[data-slider="1"]').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	infinite: true,
	accessibility: false,
	touchThreshold: 10,
	swipeToSlide: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				variableWidth: true
			}
		},
		{
			breakpoint: 576,
			settings: {
				variableWidth: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
			},
		}
	]
});

$('[data-slider="1"] button').text('');

//////////////////////////////////////////// data-slider="1"
$('[data-slider="2"]').slick({
	slidesToShow: 6,
	// slidesToScroll: 1,
	arrows: false,
	// infinite: false,
	dots: true,
	accessibility: false,
	touchThreshold: 20,
	swipeToSlide: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				variableWidth: true
			}
		},
		{
			breakpoint: 576,
			settings: {
				variableWidth: false,
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: false,
				swipeToSlide: false,
			},
		}
	]
});

// $('[data-slider="1"] button').text('');
