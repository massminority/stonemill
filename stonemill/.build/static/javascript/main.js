	var $grid = $('.grid').isotope({
	  // options
		itemSelector: '.grid-item',
		layoutMode: 'masonry',
		getSortData: {
			category: '[data-category]'
		}
	});
	
	function breadFilter(filtertext){
		$('.bread-filters').slideDown(); $grid.isotope({ filter: filtertext });
		$('.family-filter').removeClass('active-filter'); 
		$(filtertext+'-header').addClass('active-filter');
	}
	
	$(document).ready(function(){
		$grid.isotope({ filter: '*' });
	});