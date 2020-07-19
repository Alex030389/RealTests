// /////////////////////////////////////////////// data-slider="0"
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

//////////////////////////////////////////// data-slider="1"
$('[data-slider="1"]').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	infinite: true,
	accessibility: false,
	touchThreshold: 10,
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
