(function(window, document, $, undefined) {

	$(function() {
		// init page switch
		fnInitSwitchPage();
	});

	function fnInitSwitchPage() {
		var $page = $('#scenterPage'),
			$navigator = $page.find('.section-navigator'),
			$container = $page.find('.section-container'),
			$wrap = $container.find('.container-wrapper'),
			tl = new TimelineLite(),
			iSecH = 870;

		// switch page
		$navigator.on('click', 'span', function(e) {
			var idx = $(this).index();

			$(this)
				.siblings('span')
				.removeClass('active')
				.animate({
					width: 80 + 'px'
				})
				.end()
				.addClass('active')
				.animate({
					width: 110 + 'px'
				});

			tl.clear();
			tl.to($wrap, 0.8, {
				top: - (idx * iSecH) + 'px'
			});
		});
	}

})(window, document, jQuery);