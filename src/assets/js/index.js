(function(window, $, undefined) {
	var doc = window.document;
	$(doc).on('ready', function() {
		fnInitMainSlider();
	});

	function fnInitMainSlider() {
		var swiper = new Swiper('#mainSlider .swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        loop: true,
	        autoplay: 5000,
	        autoplayDisableOnInteraction: false,
	        speed: 1000
	    });
	}
})(window, jQuery);