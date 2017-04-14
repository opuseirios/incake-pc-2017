(function(window, $, undefined) {

	$(function() {
		
		// 初始化列表
		fnInitList();
		
	});
	
	// 初始化列表
	function fnInitList(){
		
		// 绑定纪念日列表数据
		fnBindList();
		
		// 修改&删除发票信息
		fnEditAddress();
		
	}

	// 绑定发票列表数据
	function fnBindList() {
		var $oComWrap = $('.address-wrap'),
			$oNumber = $oComWrap.find('.number'),
			$oListWrap = $oComWrap.find('.list-wrap'),
			$oAddressList = $oComWrap.find('.address-list');
		var _data = {
			list: [{
				iName: '张三',
				addr: '上海市新静安区广中西路777弄99号江裕大厦506室',
				mobile: '13615211254'
			}, {
				iName: '张三',
				addr: '上海市新静安区广中西路777弄99号江裕大厦506室',
				mobile: '13615211254'
			}, {
				iName: '张三',
				addr: '上海市新静安区广中西路777弄99号江裕大厦506室',
				mobile: '13615211254'
			}, {
				iName: '张三',
				addr: '上海市新静安区广中西路777弄99号江裕大厦506室',
				mobile: '13615211254'
			}, {
				iName: '张三',
				addr: '上海市新静安区广中西路777弄99号江裕大厦506室',
				mobile: '13615211254'
			}, {
				iName: '张三',
				addr: '上海市新静安区广中西路777弄99号江裕大厦506室',
				mobile: '13615211254'
			}]
		};
		
		if(_data.list.length > 0) {
			$oNumber.text(_data.list.length);
			var _html = template('tplAddressList', _data);
			$oAddressList.html(_html);
			$oListWrap.show();
		}else {
			$oNumber.text(0);
			$oListWrap.hide();
		}
		
	}
	
	// 添加&修改发票信息
	function fnEditAddress(){
		var $oComWrap = $('.address-wrap'),
			$oListWrap = $oComWrap.find('.list-wrap'),
			$oBtnAdd = $oComWrap.find('.btn-add'),
			$oNumber = $oComWrap.find('.number'),
			$aComItem = $oComWrap.find('.address-item'),
			$aBtnUpdate = $aComItem.find('.btn-update'),
			$aBtnDelete = $aComItem.find('.btn-delete');
			$oMask = $('#mask'),
			$oBtnClose = $oMask.find('.btn-close'),
			$oBtnCancel = $oMask.find('#btn-cancel');
		
		// 新增发票
		$oBtnAdd.on('click', function(){
			// 格式化弹窗内容
			fnClearAddress();
			$oMask.fadeIn();
		});
		
		// 关闭弹窗
		$oBtnClose.on('click', function(){
			$oMask.fadeOut();
		});
		
		// 删除发票信息
		$aBtnDelete.on('click', function(){
			$(this).closest('.address-item').slideUp(function(){
				$(this).closest('.address-item').remove();
				$oNumber.text($oNumber.text()-1);
				if($('.address-item').length==0){
					$oListWrap.hide();
				}
			});
			
		});
		
		// 修改发票信息
		$aBtnUpdate.on('click', function(){
			var $oIname = $(this).closest('.address-item').find('.i-name').text(),
				$oIdate = $(this).closest('.address-item').find('.i-date').text(),
				month = $oIdate.substring(0,2),
				day = $oIdate.substring(3,5);
			
			// 格式化弹窗内容
			fnClearAddress();
			
			$('.address-month').val(''+month);
			$('.address-day').val(''+day);
			$('.address-name').val($oIname);
			
			$oMask.fadeIn();
			
		});
		
		// 取消操作
		$oBtnCancel.on('click', function(){
			$oMask.fadeOut();
		});
		
	}
	
	// 格式化弹窗内容
	function fnClearAddress(){
		var $oMask = $('#mask');
		
		$oMask.find('.address-month').val('01');
		$oMask.find('.address-day').val('01');
		$oMask.find('.address-date').val('');
	}
	
})(window, jQuery);