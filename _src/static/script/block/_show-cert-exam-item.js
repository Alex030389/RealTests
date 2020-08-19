if($('.cert-exam__item').length > 6) {
	$('[data-btn="show-exam-item"]').show();
}

$('[data-btn="show-exam-item"]').on('click', function() {
	$('.cert-exam__item').slideDown();
	$(this).hide();
})