(function (window, $, undefined) {
    $(function () {
        fnInitReset();
    });

    function fnInitReset() {
        var $oPage = $('#resetPage'),
            $oResetHeader = $oPage.find('.reset-header'),
            $oResetContainer = $oPage.find('.reset-container'),
            $oIndicator = $oResetHeader.find('.indicator'),
            $oStepList = $oResetContainer.find('.step-list'),
            $oStepVerify = $oStepList.find(".step-verify"),
            $oBtnVcode = $oStepVerify.find(".btn-vcode"),
            $oStepReset = $oStepList.find(".step-reset"),
            $oStepSuccess = $oStepList.find(".step-success"),
            $oCountdown = $oStepSuccess.find(".countdown"), 
            tl = new TimelineLite(),
			_interval = '',
            count = 0,
			time = 58;
        
        // 验证身份阶段下一步按钮点击事件
       	$oStepVerify.on('click', '.btn-next', function () {

            // TODO 处理一些验证事宜
			if(funRegMobile($oStepVerify)){
				// 执行页面跳转
				tl.clear();
		        tl.to($oIndicator, 0.5, {
		            left: '50%',
		            ease: Back.easeOut,
		            onComplete: function () {
		                tl.to($oStepList, 0.8, {
		                    left: '-1200px',
		                    ease: Back.easeOut
		                });
		            }
		        });
			}
			
        });
		
        // 重置密码阶段确认并修改按钮点击事件
        $oStepReset.on('click', '.btn-update', function () {
			
            // TODO 处理一些验证事宜
            if(funRegPwd($oStepReset)){
            	// 执行页面跳转
				tl.clear();
	            tl.to($oIndicator, 0.5, {
	                left: '100%',
	                ease: Back.easeOut,
	                onComplete: function () {
	                    tl.to($oStepList, 0.8, {
	                        left: '-2400px',
	                        ease: Back.easeOut
	                    });
	                }
	            });
	            
	            // 倒计时返回首页
	            var countdown = 10,
	            	interval = '';
	            interval = setInterval(function(){
		    		$oCountdown.text(countdown-- +"'");
		    		if(countdown==-1){
		    			clearInterval(interval);
		    			window.location.href = "../../index.html";
		    		}
		    	},1000);
	            
            }
        });
        
        // 获取验证码
        $oBtnVcode.on("click", function(){
        	var $oTxtMobile = $oStepVerify.find(".txt-mobile"),
        		$oTxtVcode = $oStepVerify.find(".txt-vcode"),
        		$aRegTip = $oStepVerify.find(".reg-tip");
			if($oTxtMobile.val() == ""){
				$aRegTip.text("请输入手机号码！");
				$oTxtMobile.focus();
			}else if(!($oTxtMobile.val().match(/^1[34578]\d{9}$/))){
				$aRegTip.text("手机号码格式不正确，请重新输入！");
				$oTxtMobile.focus();
			}else{
				$aRegTip.text("");
				$oTxtVcode.focus();
				// 验证重复获取验证码
		    	if(count == 0){
		    		count = 1;
					$oBtnVcode.addClass('active').text('59" 后重新发送');
			    	_interval = setInterval(function(){
			    		$oBtnVcode.text(time-- +'" 后重新发送');
			    		if(time==-1){
			    			count = 0;
			    			clearInterval(_interval);
			    			time = 58;
			    			$oBtnVcode.removeClass("active").text('获取验证码');
			    		}
			    	},1000);
				}	
			}
			
	    });
        
    }
    
    // 验证手机号&验证码 
    function funRegMobile(_stepVerify){
    	var $oTxtMobile = _stepVerify.find(".txt-mobile"),
            $oTxtVcode = _stepVerify.find(".txt-vcode"),
            $oBtnVcode = _stepVerify.find(".btn-vcode"),
            $aRegTip = _stepVerify.find(".reg-tip");
            
        if($oTxtMobile.val() == ""){
			$aRegTip.text("请输入手机号码！");
			$oTxtMobile.focus();
			return false;
		}else{
			var regMobile = $oTxtMobile.val().match(/^1[34578]\d{9}$/),
				regCode = true;// 此处添加验证码验证（待完善）
				
			if(!regMobile){
				$aRegTip.text("手机号码格式不正确，请重新输入！");
				$oTxtMobile.focus();
				return false;
			}else if($oTxtVcode.val() == ""){
				$aRegTip.text("请输入验证码！");
				$oTxtVcode.focus();
				return false;
			}else if(!regCode){
				$aRegTip.text("验证码有误，请重新输入！");
				$oTxtVcode.focus();
				return false;
			}else{
				$aRegTip.text("");
				return true;
			}
		}
    }
    
    // 验证修改密码
    function funRegPwd(_stepReset){
    	var $oTxtPwd = _stepReset.find(".txt-pwd"),
            $oTxtRepwd = _stepReset.find(".txt-repwd"),
            $aRegTip = _stepReset.find(".reg-tip");
            
        if($oTxtPwd.val() == ""){
			$aRegTip.text("请输入新密码！");
			$oTxtPwd.focus();
			return false;
		}else if($oTxtRepwd.val() == ""){
			$aRegTip.text("请再次输入新密码！");
			$oTxtRepwd.focus();
			return false;
		}else if($oTxtPwd.val() != $oTxtRepwd.val()){
			$aRegTip.text("两次密码输入不一致，请重新输入！");
			$oTxtPwd.val("");
			$oTxtRepwd.val("");
			$oTxtPwd.focus();
			return false;
		}else{
			$aRegTip.text("");
			return true;
		}
    }
    
})(window, jQuery);