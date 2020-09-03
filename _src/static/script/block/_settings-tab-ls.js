$('[data-btn="save-settings"]').on('click', function() {
	localStorage.setItem('settingsTab', 1);	
});

if(localStorage.getItem('settingsTab') == '1') {
	$('[data-tab-btn="1"]').click();
}

$('[data-tab-btn="0"]').on('click', function() {
	localStorage.removeItem('settingsTab');
})

if(!($('#user-settings-tab').length > 0)) {
	localStorage.removeItem('settingsTab');
}