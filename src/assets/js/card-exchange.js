(function(window, $, undefined) {
	
	$(function() {
		
		fnInit();
		
	});
	
	function fnInit() {
		var $exchangePage = $("#exchangePage"),
			$pageCont = $exchangePage.find('.page-container')
			$txtNumber = $pageCont.find('.txt-number'),
			$txtPwd = $pageCont.find('.txt-pwd'),
			$tips = $pageCont.find('.tips'),
			$btnCancel = $pageCont.find('.btn-cancel'),
			$btnSure = $pageCont.find('.btn-sure');
			
		$btnSure.on("click", function(){
			var _regNumber = true,
				_regPwd = true,
				_Overdue = false;
			
			if( $txtNumber.val() == '' ){
				$tips.text('卡券编号不能为空！');
				$txtNumber.focus();
			} else if( $txtPwd.val() == '' ){
				$tips.text('卡券密码不能为空！');
				$txtPwd.focus();
			} else if(!_regNumber) {
				$tips.text('卡券编号有误，请重新输入！');
				$txtNumber.focus();
			} else if(!_regPwd) {
				$tips.text('卡券密码有误，请重新输入！');
				$txtPwd.focus();
			} else if(!_Overdue) {
				$tips.text('您的卡券已过期，请拨打客服电话400-921-5757咨询！');
			} else {
				$tips.text('');
			}
			
		});
		
	}
	
})(window, jQuery);