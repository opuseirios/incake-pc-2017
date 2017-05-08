(function(window, $, undefined) {

	$(function() {
		// 导航栏
		fnInitHeaderNav();
		// 城市切换
		fnInitCitySwitch();
		// 购物篮
		fnInitBasket();
		// 登录注册
		fnInitPortal();
	});

	function fnInitPortal() {
		var $header = $('#layoutHeader'),
			$portal = $header.find('.portal');

		$portal.on('click', '.info', function(e) {
			if(!$(this).hasClass('active')) {
				$(this)
					.addClass('active')
					.next('.plist')
					.slideDown();
			} else {
				$(this)
					.removeClass('active')
					.next('.plist')
					.slideUp();
			}
		});
	}

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
		var $header = $('#layoutHeader'),
			$nav = $header.find('.nav');

		$nav.find('.sub').hover(function(e) {
			$(this)
				.find('.subnav')
				.fadeIn();
		}, function(e) {
			$(this)
				.find('.subnav')
				.stop()
				.fadeOut();
		});
	}

})(window, jQuery);