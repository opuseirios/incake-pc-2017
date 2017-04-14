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
		fnEditCommemorate();
		
	}

	// 绑定发票列表数据
	function fnBindList() {
		var $oComWrap = $('.commemorate-wrap'),
			$oNumber = $oComWrap.find('.number'),
			$oListWrap = $oComWrap.find('.list-wrap'),
			$oCommemorateList = $oComWrap.find('.commemorate-list');
		var _data = {
			list: [{
				iName: '12月22日爸爸妈妈第十个结婚纪念日啦',
				date: '12月22日'
			}, {
				iName: '12月22日爸爸妈妈第十个结婚纪念日啦',
				date: '12月22日'
			}, {
				iName: '12月22日爸爸妈妈第十个结婚纪念日啦',
				date: '12月22日'
			}, {
				iName: '12月22日爸爸妈妈第十个结婚纪念日啦',
				date: '12月22日'
			}, {
				iName: '12月22日爸爸妈妈第十个结婚纪念日啦',
				date: '12月22日'
			}, {
				iName: '12月22日爸爸妈妈第十个结婚纪念日啦',
				date: '12月22日'
			}]
		};
		
		if(_data.list.length > 0) {
			$oNumber.text(_data.list.length);
			var _html = template('tplCommemorateList', _data);
			$oCommemorateList.html(_html);
			$oListWrap.show();
		}else {
			$oNumber.text(0);
			$oListWrap.hide();
		}
		
	}
	
	// 添加&修改发票信息
	function fnEditCommemorate(){
		var $oComWrap = $('.commemorate-wrap'),
			$oListWrap = $oComWrap.find('.list-wrap'),
			$oBtnAdd = $oComWrap.find('.btn-add'),
			$oNumber = $oComWrap.find('.number'),
			$aComItem = $oComWrap.find('.commemorate-item'),
			$aBtnUpdate = $aComItem.find('.btn-update'),
			$aBtnDelete = $aComItem.find('.btn-delete');
			$oMask = $('#mask'),
			$oBtnClose = $oMask.find('.btn-close'),
			$oBtnCancel = $oMask.find('#btn-cancel');
		
		// 新增发票
		$oBtnAdd.on('click', function(){
			// 格式化弹窗内容
			fnClearCommemorate();
			$oMask.fadeIn();
		});
		
		// 关闭弹窗
		$oBtnClose.on('click', function(){
			$oMask.fadeOut();
		});
		
		// 删除发票信息
		$aBtnDelete.on('click', function(){
			$(this).closest('.commemorate-item').slideUp(function(){
				$(this).closest('.commemorate-item').remove();
				$oNumber.text($oNumber.text()-1);
				if($('.commemorate-item').length==0){
					$oListWrap.hide();
				}
			});
			
		});
		
		// 修改发票信息
		$aBtnUpdate.on('click', function(){
			var $oIname = $(this).closest('.commemorate-item').find('.i-name').text(),
				$oIdate = $(this).closest('.commemorate-item').find('.i-date').text(),
				month = $oIdate.substring(0,2),
				day = $oIdate.substring(3,5);
			
			// 格式化弹窗内容
			fnClearCommemorate();
			
			$('.commemorate-month').val(''+month);
			$('.commemorate-day').val(''+day);
			$('.commemorate-name').val($oIname);
			
			$oMask.fadeIn();
			
		});
		
		// 取消操作
		$oBtnCancel.on('click', function(){
			$oMask.fadeOut();
		});
		
	}
	
	// 格式化弹窗内容
	function fnClearCommemorate(){
		var $oMask = $('#mask');
		
		$oMask.find('.commemorate-month').val('01');
		$oMask.find('.commemorate-day').val('01');
		$oMask.find('.commemorate-date').val('');
	}
	
})(window, jQuery);