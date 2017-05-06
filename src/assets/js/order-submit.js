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
            },
            function(next) {
                fnInitMoreInfo();
                next(null);
            }
        ], function(err, result) {
            fnInitGlobalOperate();
            fnCommodityInfo();
            fnAddressInfo();
            fnPaymentMethod();
            fnCouponInfo();
            fnMoreInfo();
            fnRemarksInfo();
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
    	
    	// maxlength setting about message
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
    
    // init moreInfo data
    function fnInitMoreInfo() {
        var $page = $('#settlementPage'),
        	$moreInfo = $page.find('.moreInfo'),
            $listContainer = $moreInfo.find('.moreInfo-container');

        var _data = {
    		list: [{
    			isDefault: 'true',
                iType: '普通发票',
    			iName: '上海印克电子商务股份有限公司',
                iContent: '蛋糕'
               
            }, {
            	isDefault: 'false',
                iType: '普通发票',
    			iName: '上海印克电子商务股份有限公司福州分公司',
                iContent: '食品'
            }, {
            	isDefault: 'false',
                iType: '普通发票',
    			iName: '上海印克电子商务股份有限公司厦门分公司',
                iContent: '蛋糕'
            }, {
            	isDefault: 'false',
                iType: '普通发票',
    			iName: '上海印克电子商务股份有限公司青岛分公司',
                iContent: '食品'
            }]
        };

        var _html = template('tplMoreInfoList', _data);
        $listContainer.prepend(_html);

        // init address operate
        //fnInitMoreInfoContOperate();
    }
    
    // func of init moreInfo-container operate
    function fnInitMoreInfoContOperate(){
    	var $page = $('#settlementPage'),
    		$moreInfo = $page.find('.moreInfo'),
    		$listContainer = $moreInfo.find('.moreInfo-container');
    	
    }
    

    // func of init global operate
    function fnInitGlobalOperate() {
    	
    	// init select
		$('.select2').select2();
		
		// init datePicker
		fnInitDatePicker();
		
    }
    
	 // init datePicker
    function fnInitDatePicker() {
        var picker = new Pikaday({
            i18n: {
                previousMonth: '上一月',
                nextMonth: '下一月',
                months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                weekdaysShort: ['日', '一', '二', '三', '四', '五', '六']
            },
            field: document.getElementById('datepicker'),
            firstDay: 1,
            minDate: new Date(1900, 0, 1),
            maxDate: new Date(2020, 12, 31),
            yearRange: [1900, 2020],
            onSelect: function() {
            	var today = new Date(),
            		_today = today.getTime(),
            		date = new Date(this),
            		_date = date.getTime(),
            		trueDate = '';
        		
            	if(_today - _date >= 0) {
            		trueDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate()+1);
            	} else {
            		trueDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            	}
            	$('#datepicker').val(trueDate);
            }
        });
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
	        $btnFold = $btns.find('.btn-fold'),
	        $deliveryTime = $addrInfo.find('.delivery-time'),
	        $btnDate = $deliveryTime.find('.btn-date'),
	        $btnTime = $deliveryTime.find('.btn-time'),
	        $popupTime = $deliveryTime.find('.popup-time'),
	        $popupItem = $popupTime.find('li'),
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
    	
    	// button of date operate
    	$btnDate.on('click', function(){
    		$deliveryTime.removeClass('b-time');
    		$popupTime.slideUp();
    	});
    	
    	// button of time operate
    	$btnTime.on('click', function(){
    		var isActive = $deliveryTime.hasClass('b-time');
	    	if(!isActive){
	    		$deliveryTime.addClass('b-time');
	    		$popupTime.slideDown();
	    	}else{
	    		$deliveryTime.removeClass('b-time');
	    		$popupTime.slideUp();
	    	}
    	});
    	
    	// popup-time item operate
    	$popupItem.on('click', function(){
    		$popupItem.removeClass('active');
    		$(this).addClass('active');
    		$btnTime.val($(this).html());
    		$deliveryTime.removeClass('b-time');
    		$popupTime.slideUp();
    	});	
    	
    }
    
    // func of paymentMethod operate
    function fnPaymentMethod(){
    	var $page = $('#settlementPage'),
	        $paymentMethod = $page.find('.paymentMethod'),
	        $paymentList = $paymentMethod.find('.payment-list'),
	        $listItem = $paymentList.find('a'),
	        $btnOnline = $paymentList.find('.btn-online'),
	        $btnCOD = $paymentList.find('.btn-COD'),
	        $btnCard = $paymentList.find('.btn-card'); 
	        $listCont = $paymentMethod.find('.payment-content'),
	        $onLineType = $listCont.find('.online-type'),
	        $onLineItem = $onLineType.find('a'),
	        $cardType = $listCont.find('.card-type'),
	        $cardNumber = $cardType.find('.card-number'),
	        $cardPwd = $cardType.find('.card-pwd'),
	        $btnExchange = $cardType.find('.btn-exchange');
	        
	    // button of online operate
        $btnOnline.on('click', function(){
	    	var isActive = $(this).hasClass('active');
	    	if(!isActive){
	    		$listItem.removeClass('active');
	    		$(this).addClass('active');
	    		$cardType.slideUp();
	    		$onLineItem.removeClass('active').eq(0).addClass('active');
	    		$onLineType.slideDown();
	    	}
	    });
        
        // button of COD operate
        $btnCOD.on('click', function(){
	    	var isActive = $(this).hasClass('active');
	    	if(!isActive){
	    		$listItem.removeClass('active');
	    		$(this).addClass('active');
	    		$onLineType.slideUp();
	    		$cardType.slideUp();
	    	}
	    });
        
        // button of card operate
        $btnCard.on('click', function(){
	    	var isActive = $(this).hasClass('active');
	    	if(!isActive){
	    		$listItem.removeClass('active');
	    		$(this).addClass('active');
	    		$onLineType.slideUp();
				$cardType.slideDown();
				$cardNumber.val('');
				$cardPwd.val('');
				$cardNumber.focus();
	    	}
	    });
        
        // online-type item operate
        $onLineItem.on('click', function(){
        	$onLineItem.removeClass('active');
    		$(this).addClass('active');
	    });
        
    }
    
    // func of couponInfo operate
    function fnCouponInfo(){
    	var $page = $('#settlementPage'),
	        $couponInfo = $page.find('.couponInfo'),
	        $couponTitle = $couponInfo.find('.coupon-title'),
	        $titleItem = $couponTitle.find('a'),
	        $btnCoupon = $couponTitle.find('.btn-coupon'),
	        $btnCode = $couponTitle.find('.btn-code'),
	        $btnCash = $couponTitle.find('.btn-cash'); 
	        $listCont = $couponInfo.find('.coupon-content'),
	        $couponList = $listCont.find('.coupon-list'),
	        $couponItem = $couponList.find('li'),
	        $codeInfo = $listCont.find('.code-info'),
	        $codeNumber = $codeInfo.find('.code-number'),
	        $btnReg = $codeInfo.find('.btn-reg'),
	        $cashInfo = $listCont.find('.cash-info'),
	        $cashlist = $cashInfo.find('.cash-list'),
	        $cashItem = $cashlist.find('li');
	        
	    // button of online operate
	    $titleItem.on('click', function(){
	    	var isActive = $(this).hasClass('active')
	    		index = $(this).index();
	    	if(!isActive){
	    		$titleItem.removeClass('active');
	    		$couponTitle.find('i').animate({ left: index*200+'px'}, 500);
	    		$(this).addClass('active');
	    		$listCont.find('div.active').slideUp().removeClass('active');
	    		$listCont.find('div').eq(index).slideDown().addClass('active');
	    		if(index == 0 || index == 2 ) {
	    			$listCont.find('div').eq(index).find('li').removeClass('active').eq(0).addClass('active');
	    		} else {
	    			$codeNumber.val('');
	    			$codeNumber.focus();
	    		}
	    	}
	    });
        
	    // coupon-list item operate
	    $couponItem.on('click', function(){
	    	$couponItem.removeClass('active');
    		$(this).addClass('active');
	    });
        
	    // cash-list item operate
	    $cashItem.on('click', function(){
    		$(this).addClass('active');
	    });
    }
    
    // func of MoreInfo operate
    function fnMoreInfo(){
    	var $page = $('#settlementPage'),
	    	$moreInfo = $page.find('.moreInfo'),
	        $listCont = $moreInfo.find('.moreInfo-container'),
	        $invoiceLock = $listCont.find('.invoice-lock'),
	        $invoiceList = $listCont.find('.invoice-list'),
	        $invoiceListItem = $invoiceList.find('li'),
	        $itemInfo = $invoiceListItem.find('.item-info'),
	        $btnLock = $listCont.find('.btn-lock'),
	        $btnEdit = $listCont.find('.btn-edit'),
	        $btnAdd = $invoiceLock.find('.btn-add'),
	        $btns = $moreInfo.find('.btns'),
	        $btnFold = $btns.find('.btn-fold'),
	        $infoOther = $moreInfo.find('.info-other'),
	        $iLabel = $infoOther.find('.i-label'),
	        $btnBirth = $infoOther.find('.btn-birth'),
	        $btnCard = $infoOther.find('.btn-card'),
	        $popupBirth = $infoOther.find('.popup-birth'),
	        $popupBirthItem = $popupBirth.find('li'),
	        $popupCard = $infoOther.find('.popup-card'),
	        $popupCardItem = $popupCard.find('li'),
	        $mask =  $('#mask-list'),
			$popInvoice = $mask.find('.popup-invoice'),
			$btnCancel = $popInvoice.find('.btn-cancel'),
			$btnConfirm = $popInvoice.find('.btn-confirm'),
			$option = $popInvoice.find('.option');
	    
	    // set button of fold status
    	if($invoiceList.length > 0){
    		$invoiceLock.addClass('line-none');
    		$btns.show();
    	}
    	
	    // button of fold operate
    	$btnFold.on('click', function(){
	    	var isActive = $(this).hasClass('active');
	    	if(!isActive){
	    		$invoiceList.slideUp(function(){
	    			$invoiceLock.addClass('line-none');
	    		});
	        	$(this).addClass('active').text('更多');
	    	}else{
	    		$invoiceLock.removeClass('line-none');
	    		$invoiceList.slideDown();
	    		$(this).removeClass('active').text('收起');
	    	}
	    	
	    });
	
    	// button of add operate
    	$btnAdd.on('click', function(){
    		$mask.fadeIn(200, function(){
    			$popInvoice.fadeIn();
    			$option.val('add');
    		});
    	});
	    
    	// button of edit operate
    	$btnEdit.on('click', function(){
    		$mask.fadeIn(200, function(){
    			$popInvoice.fadeIn();
    			$option.val('edit');
    		});
    	});
    	
    	// button of Lock operate
    	$btnLock.on('click', function(){
    		
    	});
    	
    	// button of cancel operate
    	$btnCancel.on('click', function(){
    		$popInvoice.fadeOut();
    		$mask.fadeOut();
    	});
    	
    	// button of confirm operate
    	$btnConfirm.on('click', function(){
    		$popInvoice.fadeOut();
    		$mask.fadeOut();
    		alert('perform action：'+$option.val());
    	});
    	
    	// button of birth operate
    	$btnBirth.on('click', function(){
    		if($iLabel.eq(1).hasClass('active')){
    			$iLabel.eq(1).removeClass('active');
        		$popupCard.slideUp();
    		}
    		
    		var isActive = $iLabel.eq(0).hasClass('active');
    		if(!isActive){
	    		$iLabel.eq(0).addClass('active');
	    		$popupBirth.slideDown();
	    	}else{
	    		$iLabel.eq(0).removeClass('active');
	    		$popupBirth.slideUp();
	    	}
    	});
    	
    	// button of card operate
    	$btnCard.on('click', function(){
    		if($iLabel.eq(0).hasClass('active')){
    			$iLabel.eq(0).removeClass('active');
        		$popupBirth.slideUp();
    		}
    		
    		var isActive = $iLabel.eq(1).hasClass('active');
    		if(!isActive){
	    		$iLabel.eq(1).addClass('active');
	    		$popupCard.slideDown();
	    	}else{
	    		$iLabel.eq(1).removeClass('active');
	    		$popupCard.slideUp();
	    	}
    	});
    	
    	// popup-card item operate
    	$popupCardItem.on('click', function(){
    		$popupCardItem.removeClass('active');
    		$(this).addClass('active');
    		$btnCard.val($(this).html());
    		$iLabel.eq(1).removeClass('active');
    		$popupCard.slideUp();
    	});	
    	
    	// popup-birth item operate
    	$popupBirthItem.on('click', function(){
    		$popupBirthItem.removeClass('active');
    		$(this).addClass('active');
    		$btnBirth.val($(this).html());
    		$iLabel.eq(0).removeClass('active');
    		$popupBirth.slideUp();
    	});	
    	
    }
    
    // func of remarksInfo operate
    function fnRemarksInfo(){
    	var $page = $('#settlementPage'),
	        $remarksInfo = $page.find('.remarksInfo'),
	        $remarksCont = $remarksInfo.find('.remarks-content');
	        
	    // maxlength setting about remarks
    	$remarksCont.find('.txt-remarks').maxlength({
            max: 100,
            feedbackText: '还可输入{r}字'
        });
    }

})(window, document, jQuery);