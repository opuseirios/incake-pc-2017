(function(window, $, undefined) {

	$(function() {
		
		// 初始化列表
		fnInitList();
		
	});
	
	// 初始化列表
	function fnInitList(){
		
		// 绑定发票列表数据
		fnBindList();
		
		// 修改&删除发票信息
		fnEditInvoice();
		
	}

	// 绑定发票列表数据
	function fnBindList() {
		var $oInvoiceWrap = $('.invoice-wrap'),
			$oNumber = $oInvoiceWrap.find('.number'),
			$oListWrap = $oInvoiceWrap.find('.list-wrap'),
			$oInvoiceList = $oInvoiceWrap.find('.invoice-list');
		var _data = {
			list: [{
				header: {
					hType: '公司',
					hName: '上海印克电子商务股份有限公司'
				},
				content: '蛋糕'
			}, {
				header: {
					hType: '个人',
					hName: ''
				},
				content: '食品'
			}, {
				header: {
					hType: '公司',
					hName: '上海印克电子商务股份有限公司'
				},
				content: '蛋糕'
			}, {
				header: {
					hType: '个人',
					hName: ''
				},
				content: '食品'
			}, {
				header: {
					hType: '公司',
					hName: '上海印克电子商务股份有限公司'
				},
				content: '蛋糕'
			}, {
				header: {
					hType: '个人',
					hName: ''
				},
				content: '食品'
			}]
		};
		
		if(_data.list.length > 0) {
			$oNumber.text(_data.list.length);
			var _html = template('tplInvoiceList', _data);
			$oInvoiceList.html(_html);
			$oListWrap.show();
		}else {
			$oNumber.text(0);
			$oListWrap.hide();
		}
		
	}
	
	// 添加&修改发票信息
	function fnEditInvoice(){
		var $oInvoiceWrap = $('.invoice-wrap'),
			$oBtnAdd = $oInvoiceWrap.find('.btn-add'),
			$oNumber = $oInvoiceWrap.find('.number'),
			$aInvoiceItem = $oInvoiceWrap.find('.invoice-item'),
			$aBtnUpdate = $aInvoiceItem.find('.btn-update'),
			$aBtnDelete = $aInvoiceItem.find('.btn-delete');
			$oMask = $('#mask'),
			$oBtnClose = $oMask.find('.btn-close'),
			$oCompanyName = $oMask.find('.company-name'),
			$aPselect = $oMask.find('.p-select'),
			$aSelect = $oMask.find('.select'),
			$aSelectItem = $aSelect.find('p'),
			$oBtnCancel = $oMask.find('#btn-cancel');
		
		// 新增发票
		$oBtnAdd.on('click', function(){
			// 格式化弹窗内容
			fnClearInvoice();
			$oCompanyName.hide();
			$oMask.fadeIn();
		});
		
		// 关闭弹窗
		$oBtnClose.on('click', function(){
			$oMask.fadeOut();
		});
		
		// 删除发票信息
		$aBtnDelete.on('click', function(){
			$(this).closest('.invoice-item').slideUp(function(){
				$(this).closest('.invoice-item').remove();
				$oNumber.text($oNumber.text()-1);
				if($('.invoice-item').length==0){
					$oListWarp.hide();
				}
			});
			
		});
		
		// 修改发票信息
		$aBtnUpdate.on('click', function(){
			var $oHtype = $(this).closest('.invoice-item').find('.hType').text(),
				$oHContent = $(this).closest('.invoice-item').find('.i-content').text();
			
			// 格式化弹窗内容
			fnClearInvoice();
			
			$('.invoice-type').val($oHtype);
			$('.invoice-info').val($oHContent);
			
			if($oHtype=='个人'){
				//$('.invoice-name').val('');
				$oCompanyName.hide();
			}else{
				var $oHname = $(this).closest('.invoice-item').find('.hName').text();
				$('.invoice-name').val($oHname);
				$oCompanyName.show();
			}
			//alert($oHtype+'---'+$oHContent+'---'+$oHname);
			$oMask.fadeIn();
			
		});
		
		// 取消操作
		$oBtnCancel.on('click', function(){
			$oMask.fadeOut();
		});
		
		// 选择框
		$aPselect.on('click', function(){
			if(!$(this).hasClass('item-open')){
				$aPselect.removeClass('item-open');
				$aSelect.slideUp();
				$(this).addClass('item-open');
				$(this).siblings('.select').slideDown();
			}else{
				$(this).removeClass('item-open');
				$(this).siblings('.select').slideUp();
			}
			
		});
		
		// 关闭选择框
		$aSelectItem.on('click', function(){
			if($(this).text() == '个人'){
				$oCompanyName.slideUp();
			}else if($(this).text() == '公司'){
				$oCompanyName.slideDown();
			}
			$(this).closest('.select').siblings('input').removeClass('item-open');
			$(this).closest('.select').siblings('input').val($(this).text());
			$(this).closest('.select').slideUp();
		});
		
		$aSelect.mouseleave(function(){
			$(this).siblings('input').removeClass('item-open');
			$(this).slideUp();
		});
		
	}
	
	// 格式化弹窗内容
	function fnClearInvoice(){
		var $oMask = $('#mask');
		
		$oMask.find('.invoice-type').val('个人');
		$oMask.find('.invoice-name').val('');
		$oMask.find('.invoice-info').val('蛋糕');
	}
	
})(window, jQuery);