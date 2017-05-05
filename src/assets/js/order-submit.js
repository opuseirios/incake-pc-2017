(function(window, document, $, undefined) {

    $(function() {

        // 顺序执行异步代码
        async.waterfall([
            function(next) {
                fnInitSurprise();
                next(null);
            },
            function(next) {
                fnInitRegular();
                next(null);
            },
            function(next) {
                fnInitPart();
                next(null);
            },
            function(next) {
                fnInitAddress();
                next(null);
            }
        ], function(err, result) {
            fnInitGlobalOperate();
            fnCommodityInfo();
            fnAddressInfo();
        });

    });

    // init surprise data
    function fnInitSurprise() {
        var $page = $('#settlementPage'),
            $listContainer = $page.find('.list-container');

        var _data = {
            list: [{
                link: '/detail.html',
                thumbImg: '/assets/imgs/basket/thumb_cake.jpg',
                name: {
                    cn: '芒果拿破仑',
                    en: 'Mango Napoleon'
                },
                price: 189,
                spec: '1.5磅',
                attr: ['附送餐具5套'],
                amount: 1,
                privilege: {
                	name: '夏日甜心',
                	price: '30'
                },
                subtotal: '219',
    			discountInfo: '<a href="javascript:;" class="btn-option btn-act">母亲节活动</a>',
    			surprise: {
    				btns: '<a href="javascript:;" class="btn-option btn-surprise">惊喜</a>' ,
    				sTarget: '朋友',
    				sScene: '生日/祝寿',
    				remark: '非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容',
    				sPhoto: '/assets/imgs/basket/img_preview_thumb.jpg'
    			}
            }, {
            	link: '/detail.html',
                thumbImg: '/assets/imgs/basket/thumb_cake.jpg',
                name: {
                    cn: '芒果拿破仑',
                    en: 'Mango Napoleon'
                },
                price: 189,
                spec: '1.5磅',
                attr: ['附送餐具5套'],
                amount: 1,
                privilege: {
                	name: '夏日甜心',
                	price: '30'
                },
                subtotal: '219',
    			discountInfo: '',
    			surprise: {
    				btns: '<a href="javascript:;" class="btn-option btn-surprise">惊喜</a>' ,
    				sTarget: '朋友',
    				sScene: '生日/祝寿',
    				remark: '非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容',
    				sPhoto: '/assets/imgs/basket/img_preview_thumb.jpg'
    			}
            }]
        };

        var _html = template('tplSurpriseList', _data);
        $listContainer.prepend(_html);

        // init surprise operate
        var $surprise = $listContainer.find('.surprise-list');
        fnInitListOperate($surprise);
    }

    // init surprise data
    function fnInitRegular() {
        var $page = $('#settlementPage'),
            $listContainer = $page.find('.list-container');

        var _data = {
    		list: [{
                link: '/detail.html',
                thumbImg: '/assets/imgs/basket/thumb_cake.jpg',
                name: {
                    cn: '芒果拿破仑',
                    en: 'Mango Napoleon'
                },
                price: 189,
                spec: '1.5磅',
                attr: ['附送餐具5套'],
                amount: 1,
                privilege: {
                	name: '夏日甜心',
                	price: '30'
                },
                subtotal: '219',
    			discountInfo: '<a href="javascript:;" class="btn-option btn-act">母亲节活动</a>',
    			imgCake: ''
            }, {
            	link: '/detail.html',
                thumbImg: '/assets/imgs/basket/thumb_image_cake.jpg',
                name: {
                    cn: '画影蛋糕',
                    en: 'Image Cake'
                },
                price: 189,
                spec: '1.5磅',
                attr: ['附送餐具5套'],
                amount: 1,
                privilege: {
                	name: '夏日甜心',
                	price: '30'
                },
                subtotal: '219',
    			discountInfo: '',
    			imgCake: '<a href="javascript:;" class="btn-option btn-imgCake">画影</a>' 
            }]
        };

        var _html = template('tplRegularList', _data);
        if ($listContainer.children('.surprise-list').length > 0) {
            $(_html).insertAfter($listContainer.children('.surprise-list'));
        } else {
            $listContainer.prepend(_html);
        }

        // init regular operate
        var $regular = $page.find('.regular-list');
        fnInitListOperate($regular);
    }

    // init part data
    function fnInitPart() {
        var $page = $('#settlementPage'),
            $listContainer = $page.find('.list-container');

        var _data = {
    		list: [{
                link: '/detail.html',
                thumbImg: '/assets/imgs/basket/thumb_cake.jpg',
                name: {
                    cn: '芒果拿破仑',
                    en: 'Mango Napoleon'
                },
                price: 189,
                spec: '1.5磅',
                attr: ['附送餐具5套'],
                amount: 1,
                privilege: {
                	name: '夏日甜心',
                	price: '30'
                },
                subtotal: '219',
    			discountInfo: '',
    			surprise: ''
            }]
        };

        var _html = template('tplPartList', _data);
        if ($listContainer.children('.surprise-list').length > 0) {
        	if($listContainer.children('.regular-list').length > 0){
        		$(_html).insertAfter($listContainer.children('.regular-list'));
        	}else{
        		$(_html).insertAfter($listContainer.children('.surprise-list'));
        	}
        } else {
            $listContainer.prepend(_html);
        }
    }
    
    // func of init list-container operate
    function fnInitListOperate(_list){
    	
    	// maxlength setting about summary
    	_list.find('.txt-popups').maxlength({
            max: 50,
            feedbackText: '还可输入{r}字'
        });
    	
    	// view activity
    	_list.on('click', '.btn-act', function(e) {
            var isActive = $(this).hasClass('active');
            if (!isActive) {
            	// close other popup
            	$('.list-container').find('.btn-option').removeClass('active');
            	$('.list-container').find('.popups').slideUp();
            	// view current
                $(this).addClass('active');
                $(this).closest('.c-activity').find('.popup-act').slideDown();
            } else {
                $(this).removeClass('active');
                $(this).closest('.c-activity').find('.popup-act').slideUp();
            }
        });
        
        // view surprise
    	_list.on('click', '.btn-surprise', function(e) {
            var isActive = $(this).hasClass('active');
            if (!isActive) {
            	// close other popup
            	$('.list-container').find('.btn-option').removeClass('active');
            	$('.list-container').find('.popups').slideUp();
            	// view current
                $(this).addClass('active');
                $(this).closest('.c-operate').find('.popup-surprise').slideDown();
            } else {
                $(this).removeClass('active');
                $(this).closest('.c-operate').find('.popup-surprise').slideUp();
            }
        });
    	
    	// close popup of surprise
    	_list.on('click', '.btn-sure', function(e) {
            $(this).closest('.c-operate').find('.btn-surprise').removeClass('active');
            $(this).closest('.popup-surprise').slideUp();
        });
    	
    	// preview photo
    	_list.on('click', '.btn-preview', function(e) {
    		var $mask =  $('#mask-list'),
    			$popPreview = $mask.find('.popup-preview'),
    			$imgWrapper = $popPreview.find('.img-wrapper'),
    			$btnClose = $popPreview.find('.btn-close');
    		
    		// bind preview photo src
    		//var $photo = $popPreview.find('img');
    		//$photo.attr('src',$(this).find('img').attr('src'));
    		
    		$imgWrapper.removeClass('imgCake');
    		$mask.fadeIn(200, function(){
    			$popPreview.fadeIn();
    		});
			
			$btnClose.on('click', function(e){
				$popPreview.fadeOut(function(){
					$mask.hide();
				});
			});
        });
    	
    	//  view image cake
    	_list.on('click', '.btn-imgCake', function(e) {
    		var $mask =  $('#mask-list'),
    			$popPreview = $mask.find('.popup-preview'),
    			$imgWrapper = $popPreview.find('.img-wrapper'),
    			$btnClose = $popPreview.find('.btn-close');
    			
        	// close other popup
        	$('.list-container').find('.btn-option').removeClass('active');
        	$('.list-container').find('.popups').slideUp();
        	// view current
            $(this).addClass('active');
            // bind preview photo src
    		//var $photo = $popPreview.find('img');
    		//$photo.attr('src',$(this).find('img').attr('src'));
    		
    		$imgWrapper.addClass('imgCake');
    		$mask.fadeIn(200, function(){
    			$popPreview.fadeIn();
    		});
			
			$btnClose.on('click', function(e){
				// view current
	            $('.btn-imgCake').removeClass('active');
				$popPreview.fadeOut();
				$mask.fadeOut();
			});
        });

    }
    
    // init address data
    function fnInitAddress() {
        var $page = $('#settlementPage'),
        	$addressInfo = $page.find('.addressInfo'),
            $listContainer = $addressInfo.find('.address-container');

        var _data = {
    		list: [{
    			isDefault: 'true',
                iName: '张三',
                iProvince: '上海',
                iCity: '闸北区',
                iArea: '城区',
                iStreet: '广中西路777弄99号江裕大厦506室',
                iPhone: '13711111111',
                iTel: ''
            }, {
            	isDefault: 'false',
                iName: '李四',
                iProvince: '上海',
                iCity: '闸北区',
                iArea: '城区',
                iStreet: '广中西路777弄99号江裕大厦506室',
                iPhone: '13711111111',
                iTel: '0532-2869888'
            }, {
            	isDefault: 'false',
                iName: '李四',
                iProvince: '上海',
                iCity: '闸北区',
                iArea: '城区',
                iStreet: '广中西路777弄99号江裕大厦506室',
                iPhone: '13711111111',
                iTel: ''
            }, {
            	isDefault: 'false',
                iName: '李四',
                iProvince: '上海',
                iCity: '闸北区',
                iArea: '城区',
                iStreet: '广中西路777弄99号江裕大厦506室',
                iPhone: '13711111111',
                iTel: ''
            }]
        };

        var _html = template('tplAddressList', _data);
        $listContainer.prepend(_html);

        // init address operate
        //fnInitAddrContOperate();
    }
    
    // func of init address-container operate
    function fnInitAddrContOperate(){
    	var $page = $('#settlementPage'),
    		$addressInfo = $page.find('.addressInfo'),
    		$listContainer = $addressInfo.find('.address-container');
    	
    }
    

    // func of init global operate
    function fnInitGlobalOperate() {
    	
    	// init select
		$('.select2').select2();
    }
    
    // func of fnCommodityInfo operate
    function fnCommodityInfo(){
    	var $page = $('#settlementPage'),
	        $commodityInfo = $page.find('.commodityInfo'),
	        $listContainer = $commodityInfo.find('.list-container'),
	        $item = $listContainer.find('.item'),
	        $tips = $commodityInfo.find('.tips'),
	        $btns = $commodityInfo.find('.btns'),
	        $btnFold = $btns.find('.btn-fold'),
	        $count = $tips.find('#count');
	    
	    // bind commodity count
	    $count.text($item.length);
	    
	    // set button of fold status
	    if($item.length > 0){
	    	$tips.hide();
	    	$btns.show();
	    }
	    // button of fold operate
	    $btnFold.on('click', function(){
	    	var isActive = $(this).hasClass('active');
	    	if(!isActive){
	    		$listContainer.slideUp();
	        	$tips.addClass('line-none').show();
	        	$(this).addClass('active').text('查看全部');
	    	}else{
	    		$listContainer.slideDown();
	    		$tips.hide();
	    		$(this).removeClass('active').text('收起');
	    	}
	    	
	    });
    }
    
    // func of fnAddressInfo operate
    function fnAddressInfo(){
    	var $page = $('#settlementPage'),
	    	$addrInfo = $page.find('.addressInfo'),
	        $listCont = $addrInfo.find('.address-container'),
	        $addrLock = $listCont.find('.address-lock'),
	        $addrList = $listCont.find('.address-list'),
	        $addrListItem = $addrList.find('li'),
	        $itemInfo = $addrListItem.find('.item-info'),
	        $btnLock = $listCont.find('.btn-lock'),
	        $btnEdit = $listCont.find('.btn-edit'),
	        $btnAdd = $addrLock.find('.btn-add'),
	        $btns = $addrInfo.find('.btns'),
	        $btnFold = $btns.find('.btn-fold')
	        $mask =  $('#mask-list'),
			$popAddr = $mask.find('.popup-address'),
			$btnCancel = $popAddr.find('#btn-cancel'),
			$btnConfirm = $popAddr.find('#btn-confirm'),
			$option = $popAddr.find('#option');
	    
	    // set button of fold status
    	if($addrList.length > 0){
    		$addrLock.addClass('line-none');
    		$btns.show();
    	}
    	
	    // button of fold operate
    	$btnFold.on('click', function(){
	    	var isActive = $(this).hasClass('active');
	    	if(!isActive){
	    		$addrList.slideUp(function(){
	    			$addrLock.addClass('line-none');
	    		});
	        	$(this).addClass('active').text('更多');
	    	}else{
	    		$addrLock.removeClass('line-none');
	    		$addrList.slideDown();
	    		$(this).removeClass('active').text('收起');
	    	}
	    	
	    });
	
    	// button of add operate
    	$btnAdd.on('click', function(){
    		$mask.fadeIn(200, function(){
    			$popAddr.fadeIn();
    			$option.val('add');
    		});
    	});
	    
    	// button of edit operate
    	$btnEdit.on('click', function(){
    		$mask.fadeIn(200, function(){
    			$popAddr.fadeIn();
    			$option.val('edit');
    		});
    	});
    	
    	// button of Lock operate
    	$btnLock.on('click', function(){
    		
    	});
    	
    	// button of cancel operate
    	$btnCancel.on('click', function(){
    		$popAddr.fadeOut();
    		$mask.fadeOut();
    	});
    	
    	// button of confirm operate
    	$btnConfirm.on('click', function(){
    		$popAddr.fadeOut();
    		$mask.fadeOut();
    		alert('perform action：'+$option.val());
    	});
    	
    }

})(window, document, jQuery);