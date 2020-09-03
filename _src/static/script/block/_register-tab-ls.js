$('[data-reg="sign-up"]').on('click', function() {
	localStorage.setItem('test', 1);	
});

if(localStorage.getItem('test') == '1') {
	$('[data-tab-btn="1"]').click();
}

$('[data-tab-btn="0"]').on('click', function() {
	localStorage.removeItem('test');
})

$('[data-reg="sign-in"]').on('click', function() {
	localStorage.removeItem('test');	
})

if(!($('#register').length > 0)) {
	localStorage.removeItem('test');
}