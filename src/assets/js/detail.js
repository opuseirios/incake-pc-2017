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

		var $thumblist = $('#thumblist');

		// resize thumblist width
		(function() {
	        var totalW = 0;
	        $thumblist.find('li').each(function(idx, ele) {
	        	totalW += $(ele).width() + parseInt($(ele).css('margin-right'), 10);
	        });
	        $thumblist.width(totalW);
        })();
	}

})(window, document, jQuery);