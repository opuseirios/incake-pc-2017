(function(window, document, $, undefined){
	
	$(function(){
		
		async.waterfall([
             function(next) {
            	 fnInitCakeList();
            	 next(null);
             },
             function(next) {
                 fnInitCandleList();
                 next(null);
             }
        ], function(err, result){
			fnInitGlobalOperate();
		});
		
	});
	
	// init cake list data
	function fnInitCakeList() {
		var $page = $('#exchangePage'),
	    	$listCont = $page.find('.cakes-list');
	    
		var _data = {
				
	        list: [{
	             imgSrc: 'assets/imgs/card-exchange/cake_img_01.jpg',
	             nameC: '小鸡派对',
	             nameE: 'Chick party',
	             price: '¥198',
	             spec: '1磅'
	        }, {
	        	imgSrc: 'assets/imgs/card-exchange/cake_img_02.jpg',
	             nameC: '小鸡派对',
	             nameE: 'Chick party',
	             price: '¥198',
	             spec: '1.5磅'
	        }, {
	        	imgSrc: 'assets/imgs/card-exchange/cake_img_03.jpg',
	             nameC: '小鸡派对',
	             nameE: 'Chick party',
	             price: '¥198',
	             spec: '2磅'
	        }, {
	        	imgSrc: 'assets/imgs/card-exchange/cake_img_04.jpg',
	             nameC: '小鸡派对',
	             nameE: 'Chick party',
	             price: '¥198',
	             spec: '1.5磅'
	        }, {
	        	imgSrc: 'assets/imgs/card-exchange/cake_img_05.jpg',
	             nameC: '小鸡派对',
	             nameE: 'Chick party',
	             price: '¥198',
	             spec: '1.5磅'
	        }, {
	        	imgSrc: 'assets/imgs/card-exchange/cake_img_06.jpg',
	             nameC: '小鸡派对',
	             nameE: 'Chick party',
	             price: '¥198',
	             spec: '1.5磅'
	        }, {
	        	imgSrc: 'assets/imgs/card-exchange/cake_img_02.jpg',
	             nameC: '小鸡派对',
	             nameE: 'Chick party',
	             price: '¥198',
	             spec: '5磅'
	        }, {
	        	imgSrc: 'assets/imgs/card-exchange/cake_img_03.jpg',
	             nameC: '小鸡派对',
	             nameE: 'Chick party',
	             price: '¥198',
	             spec: '2磅'
	        }, {
	        	imgSrc: 'assets/imgs/card-exchange/cake_img_04.jpg',
	             nameC: '小鸡派对',
	             nameE: 'Chick party',
	             price: '¥198',
	             spec: '1磅'
	        }, {
	        	imgSrc: 'assets/imgs/card-exchange/cake_img_05.jpg',
	             nameC: '小鸡派对',
	             nameE: 'Chick party',
	             price: '¥198',
	             spec: '1.5磅'
	        }, {
	        	imgSrc: 'assets/imgs/card-exchange/cake_img_06.jpg',
	             nameC: '小鸡派对',
	             nameE: 'Chick party',
	             price: '¥198',
	             spec: '1.5磅'
	        }, {
	        	imgSrc: 'assets/imgs/card-exchange/cake_img_01.jpg',
	             nameC: '小鸡派对',
	             nameE: 'Chick party',
	             price: '¥198',
	             spec: '1.5磅'
	        }, {
	        	imgSrc: 'assets/imgs/card-exchange/cake_img_02.jpg',
	             nameC: '小鸡派对',
	             nameE: 'Chick party',
	             price: '¥198',
	             spec: '2磅'
	        }]
	    };
	
	    var _html = template('tplCakeList', _data);
	    $listCont.prepend(_html);
	}
	
	// init candle list data
	function fnInitCandleList() {
		var $page = $('#exchangePage'),
        	$popupCandle = $page.find('.popup-candle'),
        	$listCont = $popupCandle.find('.popup-content');
		
	    var _data = {
	        list: [{
	             imgSrc: 'assets/imgs/card-exchange/icon_candle_1.png'
	        }, {
	        	 imgSrc: 'assets/imgs/card-exchange/icon_candle_2.png'
	        }, {
	        	 imgSrc: 'assets/imgs/card-exchange/icon_candle_3.png'
	        }, {
	        	 imgSrc: 'assets/imgs/card-exchange/icon_candle_4.png'
	        }, {
	        	 imgSrc: 'assets/imgs/card-exchange/icon_candle_5.png'
	        }, {
	        	 imgSrc: 'assets/imgs/card-exchange/icon_candle_6.png'
	        }, {
	        	 imgSrc: 'assets/imgs/card-exchange/icon_candle_7.png'
	        }, {
	        	 imgSrc: 'assets/imgs/card-exchange/icon_candle_8.png'
	        }, {
	        	 imgSrc: 'assets/imgs/card-exchange/icon_candle_9.png'
	        }, {
	        	 imgSrc: 'assets/imgs/card-exchange/icon_candle_0.png'
	        }]
	    };
	
	    var _html = template('tplCandleList', _data);
	    $listCont.prepend(_html);
	}
	
	// func of init global operate
	function fnInitGlobalOperate(){
		var $page = $('#exchangePage'),
			$content = $page.find('.content'),
			$btnPage = $content.find('.btn-page'),
			$btnBefore = $content.find('.btn-before'),
			$btnAfter = $content.find('.btn-after'),
			$cakeWrap = $content.find('.cakes-wrap'),
			$cakeList = $cakeWrap.find('.cakes-list'),
			$li = $cakeList.find('li'),
			$item = $li.find('.item'),
			$btnBuy = $item.find('.btn-buy'),
			$partWrap = $content.find('.parts-wrap'),
			$partList = $partWrap.find('.parts-list'),
			$btnPlate = $partList.find('.btn-plate'),
			$btnCandle = $partList.find('.btn-candle'),
			$mask =  $('#mask-list'),
			$popups = $mask.find('.popups'),
			$popPlate = $mask.find('.popup-plate'),
			$popCandle = $mask.find('.popup-candle'),
			$btnCancel = $mask.find('.btn-cancel'),
			$btnConfirm = $mask.find('.btn-confirm');
		
		// set button of page status
		if ($li.length <= 3) {
			$cakeList.css('width','900px');
			$btnPage.hide();
		} else {
			$cakeList.css('width',$li.length*305+'px');
			$btnAfter.addClass('active');
		}
		
		// button of buy operate
		$btnBuy.on('click', function(){
			var isActive = $(this).hasClass('active');
			
			if(!isActive) {
				$(this).addClass('active').text('放弃购买');
				$(this).closest('.item').addClass('active');
			} else {
				$(this).removeClass('active').text('立即购买');
				$(this).closest('.item').removeClass('active');
			}
			
		});
		
		// button of before operate
		$btnBefore.on('click', function(){
			var isActive = $(this).hasClass('active'),
				_width =  parseInt($cakeList.css('width')),
				_left = $('.cakes-list').css('left'),
				_left = parseInt(_left)+915;
			
			if(isActive) {
				$cakeList.animate({ left: _left+'px'}, 500);
				$btnAfter.addClass('active');
				if(_left==0) {
					$(this).removeClass('active');
				}
			}
			
		});
		
		// button of after operate
		$btnAfter.on('click', function(){
			var isActive = $(this).hasClass('active'),
				_width =  parseInt($cakeList.css('width')),
				_left = $('.cakes-list').css('left'),
				_left = parseInt(_left)-915;
			
			if(isActive) {
				$cakeList.animate({ left: _left+'px'}, 500);
				$btnBefore.addClass('active');
				if(_width+_left<900) {
					$(this).removeClass('active');
				}
			}
			
		});
		
		// button of plate operate
		$btnPlate.on('click', function(){
			$mask.fadeIn(200, function(){
    			$popPlate.fadeIn();
    		});
		});
		
		// button of candle operate
		$btnCandle.on('click', function(){
			$mask.fadeIn(200, function(){
    			$popCandle.fadeIn();
    		});
		});
		
		// button of minus operate 
		$popups.on('click', '.btns' ,function(){
			var isActive = $(this).hasClass('active'),
				isMinus = $(this).hasClass('btn-minus'),
				number = $(this).siblings('.number').val();
			
			if(isActive) {
				if(isMinus) {
					number--;
					if(number <= 0) {
						$(this).removeClass('active');
						number = 0;
					}
				} else {
					number++;
					$(this).siblings('.btn-minus').addClass('active');
				}
				$(this).siblings('.number').val(number);
			}
			
		});
		
		// button of cancel operate
    	$btnCancel.on('click', function(){
    		$(this).closest('.popups').fadeOut();
    		$mask.fadeOut();
    	});
    	
	}
	
	
})(window, document, jQuery);