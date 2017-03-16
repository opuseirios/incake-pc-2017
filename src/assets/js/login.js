(function(window, $, undefined) {
	
	$(function() {
		
		// 切换登录模式
		fnChangeMode();
		
		// 获取验证码
		fnRegCode();
		
		// 登录验证
		fnRegLogin();
		
	});
	
	var $oLoginPage	= $("#loginPage"),
		count = 0,
		_interval = '',
		time = 58;
	
	function fnChangeMode() {
		var $oLoginMode = $oLoginPage.find(".login-mode"),
			$oModeNumber = $oLoginMode.find('.mode-number'),
			$oModePhone = $oLoginMode.find('.mode-phone'),
			$oUname = $oModeNumber.find(".uName"),
			$oUphone = $oModePhone.find(".uPhone"),
			$oTipPhone = $oLoginMode.find(".tip-phone"),
			$oTipNumber = $oLoginMode.find(".tip-number"),
			$oBtnPhone = $oTipPhone.find("a"),
			$oBtnNumber = $oTipNumber.find("a");
			
		$oBtnPhone.on("click", function(){
			$oLoginMode.find("input").val("");
			$oLoginMode.find(".reg-tip").text("");
			$oTipPhone.hide();
			$oTipNumber.show();
			$oModeNumber.hide();
			$oModePhone.show();
			$oUphone.focus();
		});
		
		$oBtnNumber.on("click", function(){
			$oTipNumber.hide();
			$oTipPhone.show();
			$oModeNumber.show();
			$oModePhone.hide();
			$oUname.focus();
		});
	}
	
	function fnRegCode(){
		var $oBtnReg = $oLoginPage.find(".btn-reg"),
			$oModePhone = $oBtnReg.closest(".mode-phone"),
			$oUphone = $oModePhone.find(".uPhone"),
			$oUreg = $oModePhone.find(".uReg"),
			$aRegTip = $oModePhone.find(".reg-tip");
			
		$oBtnReg.on("click", function(){
			if($oUphone.val() == ""){
				$aRegTip.text("请输入手机号码！");
				$oUphone.focus();
			}else if(!($oUphone.val().match(/^1[34578]\d{9}$/))){
				$aRegTip.text("手机号码格式不正确，请重新输入！");
				$oUphone.focus();
			}else{
				$aRegTip.text("");
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
	
	function fnRegLogin(){
		var $aBtnLogin = $oLoginPage.find(".btn-login");
			
		$aBtnLogin.on("click", function(){
			
			var $oParent = $(this).closest("ul"),
				$aRegTip = $oParent.find(".reg-tip");
			
			if($oParent.hasClass("mode-number")){ //账号密码登录
				var $oUname = $oParent.find(".uName"),
					$oUpwd = $oParent.find(".uPwd"); 
				
				// 非空验证
				if($oUname.val() == ""){
					$aRegTip.text("请输入用户名或手机号码！");
					$oUname.focus();
				}else if($oUpwd.val() == ""){
					$aRegTip.text("请输入密码！");
					$oUpwd.focus();
				}else{
					// 此处添加账号密码验证（待完善）
					var regAccount = false; //验证结果
					
					if(!regAccount){
						$aRegTip.text("用户名或密码有误，请重新输入！");
					}else{
						$aRegTip.text("");
						// 执行页面跳转（待完善）
						
					}
				}
			}else{	// 手机号注册登录
				var $oUphone = $oParent.find(".uPhone"),
					$oUReg = $oParent.find(".uReg"); 
				
				// 非空验证
				if($oUphone.val() == ""){
					$aRegTip.text("请输入手机号码！");
					$oUphone.focus();
				}else{
					// 此处进行手机号码验证
					var regPhone = $oUphone.val().match(/^1[34578]\d{9}$/),
						regCode = false;// 此处添加验证码验证（待完善）
						
					if(!regPhone){
						$aRegTip.text("手机号码格式不正确，请重新输入！");
						$oUphone.focus();
					}else if($oUReg.val() == ""){
						$aRegTip.text("请输入验证码！");
						$oUReg.focus();
					}else if(!regCode){
						$aRegTip.text("验证码有误，请重新输入！");
						$oUReg.focus();
					}else{
						$aRegTip.text("");
						// 执行页面跳转（待完善）
						
					}
				}
			}
	    });
	}


})(window, jQuery);