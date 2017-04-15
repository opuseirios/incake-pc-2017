(function(window, $, undefined) {

	$(function() {
		
		// 初始化列表
		fnInitList();
		
		// 初始化下拉框
		$('.select2').select2();
	});
	
	// 初始化列表
	function fnInitList(){
		
		// 绑定纪念日列表数据
		fnBindList();
		
		// 修改&删除纪念日信息
		fnEditCommemorate();
		
	}

	// 绑定纪念日列表数据
	function fnBindList() {
		var $oComWrap = $('.commemorate-wrap'),
			$oNumber = $oComWrap.find('.number'),
			$oListWrap = $oComWrap.find('.list-wrap'),
			$oCommemorateList = $oComWrap.find('.commemorate-list');
		var _data = {
			list: [{
				iName: '结婚纪念日',
				date: {
					month: '02',
					day: '13'
				}
			}, {
				iName: '结婚三周年',
				date: {
					month: '01',
					day: '29'
				}
			}, {
				iName: '公司上市',
				date: {
					month: '12',
					day: '13'
				}
			}, {
				iName: '12月22日爸爸妈妈第十个结婚纪念日啦',
				date: {
					month: '02',
					day: '13'
				}
			}, {
				iName: '外公生日',
				date: {
					month: '06',
					day: '29'
				}
			}, {
				iName: '爸爸出国',
				date: {
					month: '02',
					day: '19'
				}
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
	
	// 添加&修改纪念日信息
	function fnEditCommemorate(){
		var $oComWrap = $('.commemorate-wrap'),
			$oListWrap = $oComWrap.find('.list-wrap'),
			$oBtnAdd = $oComWrap.find('.btn-add'),
			$oNumber = $oComWrap.find('.number'),
			$aComItem = $oComWrap.find('.commemorate-item'),
			$aBtnUpdate = $aComItem.find('.btn-update'),
			$aBtnDelete = $aComItem.find('.btn-delete');
			$oMask = $('#mask'),
			$oMaskTitle = $oMask.find('.popup-title').find('span'),
			$oBtnClose = $oMask.find('.btn-close'),
			$oBtnCancel = $oMask.find('#btn-cancel');
		
		// 新增纪念日
		$oBtnAdd.on('click', function(){
			// 格式化弹窗内容
			fnClearCommemorate();
			$oMaskTitle.html('添加纪念日');
			$oMask.fadeIn();
		});
		
		// 关闭弹窗
		$oBtnClose.on('click', function(){
			$oMask.fadeOut();
		});
		
		// 删除纪念日信息
		$aBtnDelete.on('click', function(){
			$(this).closest('.commemorate-item').slideUp(function(){
				$(this).closest('.commemorate-item').remove();
				$oNumber.text($oNumber.text()-1);
				if($('.commemorate-item').length==0){
					$oListWrap.hide();
				}
			});
			
		});
		
		// 修改纪念日信息
		$aBtnUpdate.on('click', function(){
			var $item = $(this).closest('.commemorate-item'),
				name = $item.find('.i-name').text(),
				month = $item.attr('data-month'),
				day = $item.attr('data-day'),
				$select2Month = $('#select_month').select2(),
				$select2Day = $('#select_day').select2();

			$oMaskTitle.html('修改纪念日');

			$select2Month.val(month).trigger('change');
			$select2Day.val(day).trigger('change');
			$oMask.find('.commemorate-name').val(name);
			
			$oMask.fadeIn();
			
		});
		
		// 取消操作
		$oBtnCancel.on('click', function(){
			$oMask.fadeOut();
		});
		
	}
	
	// 格式化弹窗内容
	function fnClearCommemorate(){
		var $oMask = $('#mask'),
			$select2Month = $('#select_month').select2(),
			$select2Day = $('#select_day').select2();

		$select2Month.val('01').trigger('change');
		$select2Day.val('01').trigger('change');
		$oMask.find('.commemorate-name').val('');
	}
	
})(window, jQuery);