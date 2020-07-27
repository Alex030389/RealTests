'use strict';

svg4everybody();

$(window).resize(function() {
	if($('.header__box-m-btn').is(':hidden')) {
		// _hamburger.js
		closeMobMenu()		
	}
});

// ///////////////////////////////////// style
$('button	').on('click', function() {
	$(this).blur();
});


$('select').on('change', function (){
	let color = $(this).find('option').css('color');
	$(this).css('color', color);
});

$('.all-vendors__letter').prev(".all-vendors__wrap-link").css({"margin-bottom": "23px"});

@@include('block/_hamburger.js')
@@include('block/_tab.js')
@@include('block/_slider.js')
@@include('block/_show-password.js')
@@include('block/_scroll-top.js')
@@include('block/_stick-footer.js')