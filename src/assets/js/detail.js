(function(window, document, $, undefined) {

	$(function() {
		fnInitPreview();
	});

	function fnInitPreview() {
		$('.jqzoom').jqzoom({
            zoomWidth: 540,
            zoomHeight: 540,
            zoomType: 'reverse',
            lens: true,
            preloadImages: true,
            alwaysOn: false,
            title: false,
            showEffect: 'fadein',
            hideEffect: 'fadeout'
        });
	}

})(window, document, jQuery);