(function(window, $, undefined) {

	$(function() {
		// 导航栏
		fnInitHeaderNav();
		// 城市切换
		fnInitCitySwitch();
		// 购物篮
		fnInitBasket();
	});

	function fnInitBasket() {

		var $oBasket = $('#layoutHeader').find('.basket'),
			$oView = $oBasket.find('.view'),
			$oArrow = $oBasket.find('.arrow'),
			$oContent = $oBasket.find('.content'),
			isExpand = false;

		$oView.on('click', function() {
			if(!isExpand) {
				$oArrow.addClass('active');
				$oContent.slideDown();
			} else {
				$oArrow.removeClass('active');
				$oContent.slideUp();
			}
			isExpand = !isExpand;
		});

		// 绑定购物车数据
		fnBindBasket();
	}

	function fnBindBasket() {
		var $oBasketList = $('#layoutHeader').find('.basket-list');
		var _data = {
			list: [{
				link: '/detail.html',
				thumbUrl: '/assets/imgs/list/cake_thumb_01.jpg',
				name: '百变魔方',
				price: 198,
				pound: 1.5,
				num: 1
			}, {
				link: '/detail.html',
				thumbUrl: '/assets/imgs/list/cake_thumb_01.jpg',
				name: '百变魔方',
				price: 198,
				pound: 1.5,
				num: 1
			}, {
				link: '/detail.html',
				thumbUrl: '/assets/imgs/list/cake_thumb_01.jpg',
				name: '百变魔方',
				price: 198,
				pound: 1.5,
				num: 1
			}, {
				link: '/detail.html',
				thumbUrl: '/assets/imgs/list/cake_thumb_01.jpg',
				name: '百变魔方',
				price: 198,
				pound: 1.5,
				num: 1
			}]
		};
		var _html = template('tplBasketList', _data);
		$oBasketList.html(_html);
	}

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
			iLeft = 0;

		$oActive = $oNav.find('.active');
		$oIndicator.css({
			left: $oActive.position().left + 'px'
		});

		$oNav.on('mouseover click', 'a', function() {
			iLeft = $(this).position().left;
			tl.clear();
			tl.to($oIndicator, 0.3, {
				left: iLeft + 'px',
				ease: Back.easeOut
			});
		}).on('mouseleave', 'a', function() {
            iLeft = $oActive.position().left;
			tl.clear();
			tl.to($oIndicator, 0.3, {
				left: iLeft + 'px',
				ease: Back.easeOut
			}, 0.15);
		}).on('click', 'a', function() {
			$oActive = $(this);
			$(this).addClass('active').siblings('a').removeClass('active');
		});
	}

})(window, jQuery);