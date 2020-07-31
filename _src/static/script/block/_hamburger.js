$('[data-m-btn="open"]').on('click', function() {
	openMobMenu();
});

$('[data-m-btn="close"]').on('click', function() {
	closeMobMenu();	
});

$('[data-nav="main-m-nav"]').on('click', function() {
	closeMobMenu();
});

$('[data-nav="m-nav-inner"]').click(function(event) {
	event.stopPropagation();
})

$(window).resize(function() {
	if($('.header__box-m-btn').is(':hidden')) {
			closeMobMenu()
		}
});

function openMobMenu() {
	$('[data-nav="main-m-nav"]').addClass('_open');
	$('body').css({"overflow-y": "hidden"});
}

function closeMobMenu() {
	$('[data-nav="main-m-nav"]').removeClass('_open');
	$('body').css({"overflow-y": "auto"});
	$('[data-nav="sub-m-nav"]').slideUp();
	$('[data-btn="open-m-sub-nav"]').removeClass('_active');
}