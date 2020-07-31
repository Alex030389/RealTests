$('[data-btn="open-m-sub-nav"]').on('click', function() {
	$(this).toggleClass('_active');
	$('[data-nav="sub-m-nav"]').slideToggle();
})