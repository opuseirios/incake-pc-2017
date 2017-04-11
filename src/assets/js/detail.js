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
        $thumblist.on('click', 'li', function() {

        	$(this).siblings().find('a').removeClass('zoomThumbActive');
        	$(this).find('a').addClass('zoomThumbActive');
			
        	/*$(this)
        		.find('a').addClass('zoomThumbActive')
        		.end()
        		.siblings('li')
        		.find('a').removeClass('zoomThumbActive');
        	var relJson = $(this).find('a').first().attr('rel');
        	console.log(relJson);*/
        });
	}

})(window, document, jQuery);