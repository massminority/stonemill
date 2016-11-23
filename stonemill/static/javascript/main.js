	var $grid = $('.grid').isotope({
	  // options
		itemSelector: '.grid-item',
		layoutMode: 'masonry',
		getSortData: {
			category: '[data-category]'
		}
	});
	$grid.isotope({ filter: '*' });
	
	function breadFilter(filtertext){
		$('.bread-filters').slideDown();
		$grid.isotope({ filter: filtertext });
	}