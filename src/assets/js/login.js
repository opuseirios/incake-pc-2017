(function(window, $, undefined) {

  $(function() {

    // 切换登录模式
    fnChangeMode();

    // 获取验证码
    fnRegCode();

    // 登录验证
    fnRegLogin();

    handler4ActionValidate();
  });

  function fnChangeMode() {
    var $oLoginPage = $("#loginPage"),
      $oLoginMode = $oLoginPage.find(".login-mode"),
      $oModeNumber = $oLoginMode.find('.mode-number'),
      $oModePhone = $oLoginMode.find('.mode-phone'),
      $oUname = $oModeNumber.find(".uName"),
      $oUphone = $oModePhone.find(".uPhone"),
      $oTipPhone = $oLoginMode.find(".tip-phone"),
      $oTipNumber = $oLoginMode.find(".tip-number"),
      $oBtnPhone = $oTipPhone.find("a"),
      $oBtnNumber = $oTipNumber.find("a");

    $oBtnPhone.on("click", function() {
      $oLoginMode.find("input").val("");
      $oLoginMode.find(".reg-tip").text("");
      $oTipPhone.hide();
      $oTipNumber.show();
      $oModeNumber.hide();
      $oModePhone.show();
      $oUphone.focus();
    });

    $oBtnNumber.on("click", function() {
      $oTipNumber.hide();
      $oTipPhone.show();
      $oModeNumber.show();
      $oModePhone.hide();
      $oUname.focus();
    });
  }

  function fnRegCode() {
    var $oLoginPage = $("#loginPage"),
      $oAutoLogin = $oLoginPage.find('.automatic-logon'),
      $oBtnReg = $oLoginPage.find(".btn-reg"),
      $oModePhone = $oBtnReg.closest(".mode-phone"),
      $oUphone = $oModePhone.find(".uPhone"),
      $oUreg = $oModePhone.find(".uReg"),
      $aRegTip = $oModePhone.find(".reg-tip"),
      count = 0,
      _interval = '',
      time = 58;

    $oAutoLogin.on("click", function() {
      $(this).toggleClass('active');
    });

    $oBtnReg.on("click", function() {
      if ($oUphone.val() == "") {
        $aRegTip.text("请输入手机号码！");
        $oUphone.focus();
      } else if (!($oUphone.val().match(/^1[34578]\d{9}$/))) {
        $aRegTip.text("手机号码格式不正确，请重新输入！");
        $oUphone.focus();
      } else {
        $aRegTip.text("");
        $oUreg.focus();
        // 验证重复获取验证码
        if (count == 0) {
          count = 1;
          $oBtnReg.addClass('active').text('59" 后重新发送');
          _interval = setInterval(function() {
            $oBtnReg.text(time-- + '" 后重新发送');
            if (time == -1) {
              count = 0;
              clearInterval(_interval);
              time = 58;
              $oBtnReg.removeClass("active").text('获取验证码');
            }
          }, 1000);
        }
      }

    });
  }

  function fnRegLogin() {
    var $oLoginPage = $("#loginPage"),
      $aBtnLogin = $oLoginPage.find(".btn-login");

    $aBtnLogin.on("click", function() {

      var $oParent = $(this).closest("ul"),
        $aRegTip = $oParent.find(".reg-tip");

      if ($oParent.hasClass("mode-number")) { //账号密码登录
        var $oUname = $oParent.find(".uName"),
          $oUpwd = $oParent.find(".uPwd");

        // 非空验证
        if ($oUname.val() == "") {
          $aRegTip.text("请输入用户名或手机号码！");
          $oUname.focus();
        } else if ($oUpwd.val() == "") {
          $aRegTip.text("请输入密码！");
          $oUpwd.focus();
        } else {
          // 此处添加账号密码验证（待完善）
          var regAccount = false; //验证结果

          if (!regAccount) {
            $aRegTip.text("用户名或密码有误，请重新输入！");
          } else {
            $aRegTip.text("");
            // 执行页面跳转（待完善）

            // 瑞雪检测 --- 登录
            fnInitRxLogin($oUname.val());
          }
        }
      } else { // 手机号注册登录
        var $oUphone = $oParent.find(".uPhone"),
          $oUReg = $oParent.find(".uReg");

        // 非空验证
        if ($oUphone.val() == "") {
          $aRegTip.text("请输入手机号码！");
          $oUphone.focus();
        } else {
          // 此处进行手机号码验证
          var regPhone = $oUphone.val().match(/^1[34578]\d{9}$/),
            regCode = false; // 此处添加验证码验证（待完善）

          if (!regPhone) {
            $aRegTip.text("手机号码格式不正确，请重新输入！");
            $oUphone.focus();
          } else if ($oUReg.val() == "") {
            $aRegTip.text("请输入验证码！");
            $oUReg.focus();
          } else if (!regCode) {
            $aRegTip.text("验证码有误，请重新输入！");
            $oUReg.focus();
          } else {
            $aRegTip.text("");
            // 执行页面跳转（待完善）

            // 瑞雪检测 --- 登录
            fnInitRxLogin($oUphone.val());
          }
        }
      }
    });
  }

  /**
	 * 行为验证码处理程序
	 * @param  {Function} callback [验证成功后的回调函数]
	 * @return {[type]}            [description]
	 */
  function handler4ActionValidate(callback) {

    var $oActiveSlider = $('#activeSlider'),
      $oBtn = $oActiveSlider.find('.button'),
      $oSlider = $oActiveSlider.find('.slider'),
      $oTrack = $oActiveSlider.find('.track'),
      pageX,
      disX,
      iLeft,
			isMoving = false,
			isCompleted = false;

    $oBtn.on('mousedown.action', function(e) {
			if(isCompleted) {
				return false;
			}

			isMoving = true;

      if (e.pageX) {
        pageX = e.pageX;
      } else {
        pageX = e.clientX + document.body.scrollLeft - document.body.clientLeft;
      }

      disX = pageX - $(this).offset().left;

			console.log('pageX: ' + pageX);
			console.log('disX: ' + disX);

      $oBtn.removeClass('button-on');
      $oTrack.removeClass('track-on');
      document.addEventListener("mousemove", defaultEvent, false); //阻止页面的滑动默认事件
    });

    $(document).on("mousemove.action", function(e) {
			if(isCompleted || !isMoving) {
				return false;
			}

      if (e.pageX) {
        pageX = e.pageX;
      } else {
        pageX = e.clientX + document.body.scrollLeft - document.body.clientLeft;
      }

      iLeft = pageX - disX - $oSlider.offset().left;

			console.log('pageX: ' + pageX);
			console.log('iLeft: ' + iLeft);

      var maxW = $oSlider.width() - $oBtn.width();
			console.log('maxW: ' + maxW);

      if (iLeft < 0) {
        iLeft = 0;
      } else if (iLeft > maxW) {
        iLeft = maxW;
      }

      $oBtn.css({
        left: iLeft + 'px'
      });
      $oTrack.css({
        width: iLeft + 'px'
      });
    });

    $(document).on("mouseup.action", function(e) {
			if(isCompleted) {
				return false;
			}

			isMoving = false;

      var maxW = $oSlider.width() - $oBtn.width();
      if (iLeft >= maxW) {
        $oBtn.css({
          left: maxW + 'px'
        });
        $oTrack.width(maxW);

				isCompleted = true;
				$oTrack.find('.bg-green').html('验证码已发送，<span>89</span> 秒后重试');

				// TODO send msg
      } else {
        $oBtn.css({left: '0'});
        $oTrack.css({width: '0'});
      }
      $oBtn.addClass('button-on');
      $oTrack.addClass('track-on');
      document.removeEventListener("mousemove", defaultEvent, false); //阻止页面的滑动默认事件
    });

    function defaultEvent(e) {
      e.preventDefault();
    }
  }

  function fnInitRxLogin(id) {
    if (!rxStream) {
      return false;
    }

    var o_username = id,
      o_mobile = id,
      b_device = 'pc';

    // send to rxstream server
    rxStream.trackSignup(id, 'login', {
      subject: {
        o_username: o_username,
        o_mobile: o_mobile
      },
      properties: {
        b_device: b_device
      }
    });
  }
})(window, jQuery);
