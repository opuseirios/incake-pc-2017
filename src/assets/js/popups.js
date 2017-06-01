(function(window, document, $, undefined) {

    $(function() {

       fnInitBtnOperate();

    });


    // func of init btn operate
    function fnInitBtnOperate() {
    	var $popupsPage = $('#popupsPage'),
			$popupsContainer = $popupsPage.find('.popups-container'),
			$btns = $popupsContainer.find('.btns'),
			$btnClick = $btns.find('.btn-click'),
			$btnClick2 = $btns.find('.btn-click2'),
			
			$maskList = $popupsPage.find('#mask-list'),
			$popups =  $maskList.find('.popups'),
			
			$popResult = $maskList.find('.popup-result'),
			$btnCancel = $popResult.find('.btn-cancel'),
			
			$popResult2 = $maskList.find('.popup-result2'),
			$btnClose = $popResult2.find('.btn-close');
    	
    	$btnClick.on('click', function(){
    		$maskList.fadeIn(200, function(){
    			$popResult.fadeIn();
    		});
    	});
		
    	$btnCancel.on('click', function(){
    		$popResult.fadeOut();
    		$maskList.fadeOut();
	    });
    	
    	$btnClick2.on('click', function(){
    		$maskList.fadeIn(200, function(){
    			$popResult2.fadeIn();
    		});
    	});
    	
    	$btnClose.on('click', function(){
    		$popResult2.fadeOut();
    		$maskList.fadeOut();
	    });
    	
    }

})(window, document, jQuery);