'use strict';

svg4everybody();

// polifill
objectFitImages();

// ///////////////////////////////////// style
$('button	').on('click', function() {
	$(this).blur();
});

$('select').on('change', function (){
	let color = $(this).find('option').css('color');
	$(this).css('color', color);
});

$('.all-vendors__letter').prev(".all-vendors__wrap-link").css({"margin-bottom": "23px"});

// block
@@include('block/_hamburger.js')
@@include('block/_mobile-sub-nav.js')
@@include('block/_header-search.js')
@@include('block/_tab.js')
@@include('block/_slider.js')
@@include('block/_modal.js')
@@include('block/_show-password.js')
@@include('block/_scroll-top.js')
@@include('block/_stick-footer.js')
