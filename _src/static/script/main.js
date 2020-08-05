'use strict';

svg4everybody();

// ///////////////////////////////////// polifill
objectFitImages();

// ///////////////////////////////////// block
@@include('block/_hamburger.js')
@@include('block/_mobile-sub-nav.js')
@@include('block/_header-search.js')
@@include('block/_tab.js')
@@include('block/_slider.js')
@@include('block/_modal.js')
@@include('block/_show-password.js')
@@include('block/_scroll-top.js')
@@include('block/_stick-footer.js')

// ///////////////////////////////////// ather
// remove focus from all button
$('button	').on('click', function() {
	$(this).blur();
});

// change option color
$('select').on('change', function (){
	let color = $(this).find('option').css('color');
	$(this).css('color', color);
});

// add margin bottom all-vendors__wrap-link
$('.all-vendors__letter').prev(".all-vendors__wrap-link").css({"margin-bottom": "23px"});


$('[data-js="mod-help-title"]').on('click', function() {
		$(this).next().slideToggle(200);
});
