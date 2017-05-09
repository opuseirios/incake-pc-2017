(function(window, document, $, undefined) {

	$(function() {
		// 初始化scenter
		fnInitScenter();
	});

	function fnInitScenter() {
		var $header = $('.layout-header'),
			$footer = $('.layout-footer'),
			$scenter = $('#scenterPage');

		// init fullpage
		$scenter.fullpage({
			anchors: ['intro', 'sugar', 'scene'],
			navigation: true,
			navigationTooltips: ['惊喜蛋糕', '翻糖定制', '场景定制'],
			showActiveTooltip: true,
			css3: true,
			fixedElements: '.layout-header',
			verticalCentered: true,
			onLeave: function(index, nextIndex, direction){
				if(index == 1) {
					$header
						.fadeOut()
						.removeClass('fixed-header');
				}
			},
			afterLoad: function(anchorLink, index) {
				if(anchorLink == 'intro' && index == 1) {
					$header
						.addClass('fixed-header')
						.fadeIn();
				}
			}
		});
	}

})(window, document, jQuery);