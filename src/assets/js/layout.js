(function(window, $, undefined) {

	var doc = window.document;
	$(doc).on('ready', function() {
		// 导航栏
		fnInitHeaderNav();
		// 城市切换
		fnInitCitySwitch();

		$(window).on('resize', function() {
			fnInitHeaderNav();
		});
	});

	function fnInitCitySwitch() {
		var $oLocator = $('#layoutHeader').find('.locator'),
			$oArrow = $oLocator.find('.arrow'),
			$oP = $oLocator.find('>p'),
			$oContent = $oLocator.find('.content'),
			isExpand = false;

		$oP.on('click', function() {
			if(!isExpand) {
				$oArrow.addClass('active');
				$oContent.slideDown();
			} else {
				$oArrow.removeClass('active');
				$oContent.slideUp();
			}
			isExpand = !isExpand;
		});

		$oContent.on('click', 'li', function() {
			$(this).addClass('active').siblings('li').removeClass('active');
			$oP.html($(this).html());
			$oArrow.removeClass('active');
			$oContent.slideUp();
			isExpand = !isExpand;
		});
	}

	function fnInitHeaderNav() {
		var $oNav = $('#layoutHeader').find('.nav'),
			$oIndicator = $oNav.find('.indicator'),
			$oActive = null,
			tl = new TimelineMax(),
			iNavL = $oNav.offset().left,
			iLeft = 0;

		// 绑定之前先解绑事件，解决改变窗口尺寸时导致的导航栏动画不流畅问题
		$oNav.off('.nav');

		$oActive = $oNav.find('.active');
		$oIndicator.css({
			left: $oActive.offset().left - iNavL + 'px'
		});

		$oNav.on('mouseover.nav click.nav', 'a', function() {
			iLeft = $(this).offset().left;
			tl.clear();
			tl.to($oIndicator, 0.3, {
				left: iLeft - iNavL + 'px',
				ease: Back.easeOut
			});
		}).on('mouseleave.nav', 'a', function() {
			iLeft = $oActive.offset().left;
			tl.clear();
			tl.to($oIndicator, 0.3, {
				left: iLeft - iNavL + 'px',
				ease: Back.easeOut
			}, 0.15);
		}).on('click.nav', 'a', function() {
			$oActive = $(this);
			$(this).addClass('active').siblings('a').removeClass('active');
		});
	}

})(window, jQuery);