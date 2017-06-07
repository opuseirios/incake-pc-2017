(function(window, $, undefined) {

	$(function() {

		// 初始化列表
		fnInitList();

		// 初始化下拉框
		$('.select2').select2();

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
					hName: '上海印克电子商务股份有限公司',
					hCode: '1234567890'
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
					hName: '杭州阿里巴巴股份有限公司',
					hCode: '1234567890'
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
					hName: '上海印克电子商务股份有限公司',
					hCode: '1234567890'
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
			$oListWrap = $oInvoiceWrap.find('.list-wrap'),
			$oBtnAdd = $oInvoiceWrap.find('.btn-add'),
			$oNumber = $oInvoiceWrap.find('.number'),
			$aInvoiceItem = $oInvoiceWrap.find('.invoice-item'),
			$aBtnUpdate = $aInvoiceItem.find('.btn-update'),
			$aBtnDelete = $aInvoiceItem.find('.btn-delete');
			$oMask = $('#mask'),
			$oMaskTitle = $oMask.find('.popup-title').find('span'),
			$oBtnClose = $oMask.find('.btn-close'),
			$oCompanyName = $oMask.find('.company-name'),
			$oCompanyCode = $oMask.find('.company-code'),
			$oBtnCancel = $oMask.find('#btn-cancel');

		// 新增发票
		$oBtnAdd.on('click', function(){
			// 格式化弹窗内容
			fnClearInvoice();
			$oMaskTitle.html('添加发票信息');
			$oCompanyName.hide();
			$oCompanyCode.hide();
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
					$oListWrap.hide();
				}
			});
		});

		// 修改发票信息
		$aBtnUpdate.on('click', function(){
			var $item = $(this).closest('.invoice-item'),
				type = $item.find('.hType').text(),
				content = $item.find('.i-content').text(),
				$select2Type = $('#invoice_type').select2(),
				$select2Content = $('#invoice_content').select2();

			$oMaskTitle.html('修改发票信息');

			$select2Type.val(type).trigger('change');
			$select2Content.val(content).trigger('change');

			if(type=='个人'){
				$oCompanyName.hide();
				$oCompanyCode.hide();
			}else{
				var name = $item.find('.hName').text();
				var code = $item.find('.hCode').text();
				$('.invoice-name').val(name);
				$('.invoice-code').val(code);
				$oCompanyName.show();
				$oCompanyCode.show();
			}
			$oMask.fadeIn();
		});

		// 取消操作
		$oBtnCancel.on('click', function(){
			$oMask.fadeOut();
		});

		// 切换发票抬头
		$('#invoice_type').on('select2:select', function(e) {
			if(e.params.data.text == '公司') {
				$oCompanyName.css('display', 'block');
				$oCompanyCode.css('display', 'block');
			} else {
				$oCompanyName.css('display', 'none');
				$oCompanyCode.css('display', 'none');
			}
		});
	}

	// 格式化弹窗内容
	function fnClearInvoice(){
		var $oMask = $('#mask'),
			$select2Type = $('#invoice_type').select2(),
			$select2Content = $('#invoice_content').select2();

		$select2Type.val('个人').trigger('change');
		$select2Content.val('蛋糕').trigger('change');
		$oMask.find('.invoice-name').val('');
		$oMask.find('.invoice-code').val('');
	}

})(window, jQuery);
