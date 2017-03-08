(function(window, $, undefined) {
	var doc = window.document;
	$(doc).on('ready', function() {
		// 轮播图
		fnInitMainSlider();
	});

	function fnInitMainSlider() {
		var $oLayoutContainer = $('#layoutContainer'),
			$oMainSlider = $oLayoutContainer.find('.main-slider'),
			$oMainSwiper = $oMainSlider.find('.swiper-container'),
			_swiper = null,
			count = $oMainSlider.find('.swiper-slide').length;

		if(count > 1) {
			_swiper = $oMainSwiper.swiper({
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        loop: true,
		        autoplay: 5000,
		        autoplayDisableOnInteraction: false,
		        speed: 1000
		    });

		    // slide prev
		    $oMainSlider.on('click', '.prev-slide', function(e) {
		    	e.preventDefault();
		    	_swiper.swipePrev();
		    });

		    // slide next
		    $oMainSlider.on('click', '.next-slide', function(e) {
		    	e.preventDefault();
		    	_swiper.swipeNext();
		    });	

		    $oMainSlider.hover(function() {
		    	_swiper.stopAutoplay();
		    }, function() {
		    	_swiper.startAutoplay();
		    });
		} else {
			_swiper = $oMainSwiper.swiper({
				autoplay: false
			});
			$oMainSlider.find('.prev-slide').hide();
			$oMainSlider.find('.next-slide').hide();
		}
	}
})(window, jQuery);