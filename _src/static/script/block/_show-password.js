$('[data-btn="show-password"]').on('click', function() {
	if($(this).prev().attr("type") === 'password') {
		$(this).prev().attr({"type": "text"});
		$(this).addClass('_active');
	} else {
		$(this).prev().attr({"type": "password"});
		$(this).removeClass('_active');		
	}
})