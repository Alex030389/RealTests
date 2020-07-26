'use strict';

svg4everybody();

$(window).resize(function() {
	if($('.header__box-m-btn').is(':hidden')) {
		// _hamburger.js
		closeMobMenu()		
	}
});

$('button	').on('click', function() {
	$(this).blur();
});

@@include('block/_hamburger.js')
@@include('block/_tab.js')
@@include('block/_slider.js')
@@include('block/_scroll-top.js')
@@include('block/_stick-footer.js')