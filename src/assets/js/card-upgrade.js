(function(window, $, undefined) {
	
	$(function() {
		
		fnInit();
		
	});
	
	function fnInit() {
		var $upgradePage = $("#upgradePage"),
			$pageCont = $upgradePage.find('.page-container')
			$txtId = $pageCont.find('.txt-id'),
			$txtPwd = $pageCont.find('.txt-pwd'),
			$tips = $pageCont.find('.tips'),
			$btnUpgrade = $pageCont.find('.btn-upgrate'),
			$btnPayment = $pageCont.find('.btn-payment'),
			$mask = $upgradePage.find('#mask'),
			$upgradeSuccess = $mask.find('.upgrade-success'),
			$upgradeFail = $mask.find('.upgrade-fail'),
			$btnSure = $mask.find('.btn-sure');
			
		$btnUpgrade.on("click", function(){
			$(this).toggleClass('active');
		});
		
		$btnPayment.on("click", function(){
			var _regId = false,
				_regPwd = false,
				_state = false;
			
			if( $txtId.val() == '' ){
				$tips.text('蛋糕卡ID不能为空！');
				$txtId.focus();
			} else if( $txtPwd.val() == '' ){
				$tips.text('蛋糕卡密码不能为空！');
				$txtPwd.focus();
			} else if(_regId) {
				if(_regPwd) {
					$tips.text('');
					if(_state) {
						$mask.fadeIn(200, function(){
							$upgradeSuccess.fadeIn();
			    		});
					}else {
						$mask.fadeIn(200, function(){
							$upgradeFail.fadeIn();
			    		});
					}
				} else {
					$tips.text('蛋糕卡密码输入错误，请重新输入！');
				}
			} else {
				$tips.text('蛋糕卡id输入错误，请重新输入！');
			}
			
		});
		
		$btnSure.on("click", function(){
			$upgradeFail.fadeOut();
			$mask.fadeOut();
		});
	}
	
})(window, jQuery);