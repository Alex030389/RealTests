$('[data-btn="open-search"]').on('click', function() {
	if($('[data-js="main-search"]').is(':hidden')) {
		if($('[data-nav="main"]').is(':hidden')) {
			$('[data-js="main-search"]').show();
		} else {
			$('[data-js="main-search"]').slideDown(150);
		}
		$('[data-js="main-search-input"]').focus();
	} else {
		$('[data-js="main-search"]').slideUp(150);		
	}
})

$('[data-btn="search-close"]').on('click', function() {
	$('[data-js="main-search"]').hide();
})

$('body').mouseup(function(even) {
  if($('[data-js="main-search"]').has(even.target).length === 0) {
    $('[data-js="main-search"]').slideUp(150);
  }
});

// $(window).resize(function() {
// 	$('[data-js="main-search"]').hide();
// });