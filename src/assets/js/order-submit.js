(function(window, document, $, undefined) {

    $(function() {
    	
        // init order list
        fnBindOrderList();
        
        // func of init global operate
        fnInitGlobalOperate();
        
    });

    // func of init global operate
    function fnInitGlobalOperate(){
    	
    	// init global select
		$('.select2').select2();
    	
    	// maxlength setting about remark
    	$('.txt-remarks').maxlength({
    		max: 100,
    		feedbackText: '还可输入{r}字'
    	});
    }
    
    // func of init order list
    function fnBindOrderList() {
        var $page = $('#settlementPage'),
            $orderContainer = $page.find('.settlement-container');


    }


})(window, document, jQuery);
