'use strict';

svg4everybody();

// ///////////////////////////////////// polifill inicialize
objectFitImages();

// ///////////////////////////////////// plagin icialize
const lazyLoadInstance = new LazyLoad({
	elements_selector: ".lazy"
});

// ///////////////////////////////////// block
@@include('block/_hamburger.js')
@@include('block/_mobile-sub-nav.js')
@@include('block/_header-search.js')
@@include('block/_tab.js')
@@include('block/_slider.js')
@@include('block/_modal.js')
@@include('block/_show-password.js')
@@include('block/_scroll-top.js')
@@include('block/_copy-discount.js')


// ///////////////////////////////////// ather
// remove focus from all button
// $('button	').on('click', function() {
// 	$(this).blur();
// });

// change option color
$('.form-control._placeholder').on('change', function (){
	let color = $(this).find('option').css('color');
	$(this).css('color', color);
});

// add margin bottom all-vendors__wrap-link
$('.all-vendors__letter').prev(".all-vendors__wrap-link").css({"margin-bottom": "40px"});

// modal accordion
$('.mod-need-help__list').on('click', '.mod-need-help__btn', function() {
	$(this).next().slideToggle();
});


// ///////////////////////////////////////////////////// stick footer
(function () {
	let isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	let stickFooter = function () {
		let FOOTER = document.querySelector('footer');
		let MAIN = document.querySelector('main');
		let BODY = document.querySelector('body');
		let footerHeight = FOOTER.offsetHeight;
		BODY.style.position = 'relative';
		MAIN.style.marginBottom = footerHeight + 'px';
		FOOTER.style.position = 'absolute';
		FOOTER.style.bottom = '0';
		FOOTER.style.left = '0';
		FOOTER.style.width = '100%';
	};

	if (isIE11) {
		stickFooter();
		window.addEventListener('resize', stickFooter);
	};
})();
