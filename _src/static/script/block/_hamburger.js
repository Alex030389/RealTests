$('[data-m-btn="open"]').on('click', function() {
	openMobMenu();
	console.log('open')
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

function openMobMenu() {
	$('[data-nav="main-m-nav"]').addClass('_open');
	$('body').css({"overflow-y": "hidden"});
}

function closeMobMenu() {
	$('[data-nav="main-m-nav"]').removeClass('_open');
	$('body').css({"overflow-y": "auto"});
}