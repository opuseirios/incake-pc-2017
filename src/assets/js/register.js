(function(window, $, undefined) {
	
	$(function() {
		
		// 获取验证码
		fnRegCode();
		
		// 注册验证
		fnRegRegister();
		
	});
	
	function fnRegCode(){
		var $oRegisterPage	= $("#registerPage"),
			$oBtnReg = $oRegisterPage.find(".btn-reg"),
			$oRegisterMode = $oRegisterPage.find(".register-mode"),
			$oUphone = $oRegisterMode.find(".uPhone"),
			$oUreg = $oRegisterMode.find(".uReg"),
			$aRegTip = $oRegisterMode.find(".reg-tip"),
			count = 0,
			_interval = '',
			time = 58;
		
		$oBtnReg.on("click", function(){
			if($oUphone.val() == ""){
				$aRegTip.show().text("请输入手机号码！");
				$oUphone.focus();
			}else if(!($oUphone.val().match(/^1[34578]\d{9}$/))){
				$aRegTip.show().text("手机号码格式不正确，请重新输入！");
				$oUphone.focus();
			}else{
				$aRegTip.hide().text("");
				$oUreg.focus();
				// 验证重复获取验证码
		    	if(count == 0){
		    		count = 1;
					$oBtnReg.addClass('active').text('59" 后重新发送');
			    	_interval = setInterval(function(){
			    		$oBtnReg.text(time-- +'" 后重新发送');
			    		if(time==-1){
			    			count = 0;
			    			clearInterval(_interval);
			    			time = 58;
			    			$oBtnReg.removeClass("active").text('获取验证码');
			    		}
			    	},1000);
				}	
			}
			
	    });
	}
	
	function fnRegRegister(){
		var $oRegisterPage	= $("#registerPage"),
			$aBtnRegister = $oRegisterPage.find(".btn-register");
			
		$aBtnRegister.on("click", function(){
			
			var $oParent = $(this).closest("ul"),
				$oUphone = $oParent.find(".uPhone"),
				$oUReg = $oParent.find(".uReg"),
				$oUpwd = $oParent.find(".uPwd"),
				$oUpwdAgain = $oParent.find(".uPwd-again"),
				$aRegTip = $oParent.find(".reg-tip");
			
				// 非空验证
				if($oUphone.val() == ""){
					$aRegTip.show().text("请输入手机号码！");
					$oUphone.focus();
				}else{
					// 此处进行手机号码验证
					var regPhone = $oUphone.val().match(/^1[34578]\d{9}$/),
						regCode = true;// 此处添加验证码验证（待完善）
						
					if(!regPhone){
						$aRegTip.show().text("手机号码格式不正确，请重新输入！");
						$oUphone.focus();
					}else if($oUReg.val() == ""){
						$aRegTip.show().text("请输入验证码！");
						$oUReg.focus();
					}else if(!regCode){
						$aRegTip.show().text("验证码有误，请重新输入！");
						$oUReg.focus();
					}else if($oUpwd.val() == ""){
						$aRegTip.show().text("请输入设置密码！");
						$oUpwd.focus();
					}else if($oUpwdAgain.val() == ""){
						$aRegTip.show().text("请确认输入设置密码！");
						$oUpwdAgain.focus();
					}else if($oUpwd.val() != $oUpwdAgain.val()){
						$aRegTip.show().text("您输入的密码不一致，请重新输入！");
						$oUpwd.val("");
						$oUpwdAgain.val("");
						$oUpwd.focus();
					}else{
						$aRegTip.hide().text("");
						// 执行页面跳转（待完善）
						
					}
				}
			
	    });
	}


})(window, jQuery);