(function(window, $, undefined) {

	var doc = window.document;
	$(doc).on('ready', function() {
		// 导航栏
		fnInitHeaderNav();
		// 城市切换
		fnInitCitySwitch();
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

		$oActive = $oNav.find('.active');
		$oIndicator.css({
			left: $oActive.offset().left - iNavL + 'px'
		});

		$oNav.on('mouseover click', 'a', function() {
			iLeft = $(this).offset().left;
			tl.clear();
			tl.to($oIndicator, 0.3, {
				left: iLeft - iNavL + 'px',
				ease: Back.easeOut
			});
		}).on('mouseleave', 'a', function() {
			iLeft = $oActive.offset().left;
			tl.clear();
			tl.to($oIndicator, 0.3, {
				left: iLeft - iNavL + 'px',
				ease: Back.easeOut
			}, 0.15);
		}).on('click', 'a', function() {
			$oActive = $(this);
			$(this).addClass('active').siblings('a').removeClass('active');
		});
	}

})(window, jQuery);