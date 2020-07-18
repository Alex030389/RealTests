tdTabs('[data-tab-btn]', '[data-tab-content]');
function tdTabs(btn, content) {
	let tabBtns = $(btn);
	let tabContens = $(content);

	tabBtns.first().addClass('_active');
	tabContens.hide();
	tabContens.first().fadeIn();

	tabBtns.on('click', function() {
		tabBtns.removeClass('_active');
		$(this).addClass('_active');
		tabContens.hide();
		tabContens.eq($(this).attr('data-tab-btn')).fadeIn();
	})
}
