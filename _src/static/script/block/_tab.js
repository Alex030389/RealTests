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
		tabContens.eq($(this).data('tab-btn')).fadeIn();
	})
}

$('[data-agitation-btn]').on('click', function() {
	let num = $(this).data('agitation-btn');
	if(num === 1) {
		$('[data-tab-btn="1"]')[0].click();
	} else if (num === 2) {
		$('[data-tab-btn="2"]')[0].click();
	}
})