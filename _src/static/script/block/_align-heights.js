function alignHeights(elem) {
	let maxHeight = 0;
	$(elem).each(function(){
		var thisH = $(this).height();
		if (thisH > maxHeight) { maxHeight = thisH; }
	});

	$(elem).height(maxHeight);
}

alignHeights('.cert-exam__card');

$(window).resize(function() {
	alignHeights('.cert-exam__card');	
})