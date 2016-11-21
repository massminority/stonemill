	var $grid = $('.grid').isotope({
	  // options
		itemSelector: '.grid-item',
		layoutMode: 'fitRows',
		getSortData: {
			category: '[data-category]'
		}
	});