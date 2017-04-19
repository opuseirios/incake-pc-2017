(function(window, document, $, undefined) {

	$(function() {
		fnInitPreview();
	});

	// 初始化图片预览功能
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

		var $thumblist = $('#thumblist'),
			$thumbli = $thumblist.children('li'),
			$thumbs = $thumblist.closest('.thumbs'),
			$btnPrev = $thumbs.find('.btn-prev'),
			$btnNext = $thumbs.find('.btn-next');

		// init thumblist width
		(function() {
	        var totalW = 0;
	        $thumblist.find('li').each(function(idx, ele) {
	        	totalW += $(ele).width() + parseInt($(ele).css('margin-right'), 10);
	        });
	        $thumblist.width(totalW);
        })();

        // init thumbs
        (function() {
        	var listLen = $thumbli.length,
        		currIndex = 0;
        	$btnPrev.addClass('disabled');
    		if(listLen <= 4) {
    			$btnNext.addClass('disabled');
    		} else if(listLen > 4) {
    			currIndex = 3;
    		}

    		var liW = 110,
    			liM = 10,
    			tl = new TimelineLite(),
    			totalW = listLen * liW + (listLen - 1) * liM,
    			iLeft = 0;

    		// handler for next thumb
    		$btnNext.on('click', function(e) {
    			if($(this).hasClass('disabled')) {
    				return false;
    			}
    			$btnPrev.removeClass('disabled');
    			currIndex ++;
    			if(currIndex == listLen - 1) { // last item
    				$(this).addClass('disabled');
    			}	
    			iLeft += liW + liM;
    			tl.clear();
				tl.to($thumblist, 0.5, {
					x: -iLeft + 'px'
				});
    		});

    		// handler for prev thumb
    		$btnPrev.on('click', function(e) {
    			if($(this).hasClass('disabled')) {
    				return false;
    			}
    			$btnNext.removeClass('disabled');
    			currIndex --;
    			if(currIndex == 3) { // last item
    				$(this).addClass('disabled');
    			}
    			iLeft -= liW + liM;	
    			tl.clear();
				tl.to($thumblist, 0.5, {
					x: -iLeft + 'px'
				});
    		});

        })();
	}

})(window, document, jQuery);