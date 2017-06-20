(function(window, $, undefined) {

	// document ready events
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
			$portal = $header.find('.portal'),
			$oLocator = $header.find('.locator'),
			$oBasket = $header.find('.basket');

		$portal.on('click', '.info', function(e) {
			if(!$(this).hasClass('active')) {
				$(this)
					.addClass('active')
					.next('.plist')
					.slideDown();

				// 查看城市定位是否展开
				if($oLocator.hasClass('active')) {
					$oLocator.find('>p').trigger('click');
				}

				// 购物篮下拉列表是否展开，如果展开进行收缩
				if($oBasket.hasClass('active')) {
					$oBasket.find('.view').trigger('click');
				}
			} else {
				$(this)
					.removeClass('active')
					.next('.plist')
					.slideUp();
			}
		});
	}

	function fnInitBasket() {

		var $oHeader = $('#layoutHeader'),
			$portal = $oHeader.find('.portal'),
			$oBasket = $oHeader.find('.basket'),
			$oLocator = $oHeader.find('.locator'),
			$oView = $oBasket.find('.view'),
			$oArrow = $oBasket.find('.arrow'),
			$oContent = $oBasket.find('.content'),
			isExpand = false;

		$oView.on('click', function() {
			if(!isExpand) {
				$oArrow.addClass('active');
				$oContent.slideDown();
				$oBasket.addClass('active');

				// 查看城市定位是否展开，如果展开进行收缩
				if($oLocator.hasClass('active')) {
					$oLocator.find('>p').trigger('click');
				}

				// 查看个人信息是否展开，如果展开进行收缩
				if($portal.find('.info').hasClass('active')) {
					$portal.find('.info').trigger('click');
				}
			} else {
				$oArrow.removeClass('active');
				$oContent.slideUp();
				$oBasket.removeClass('active');
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
		var $oHeader = $('#layoutHeader'),
			$oBasket = $oHeader.find('.basket'),
			$oLocator = $oHeader.find('.locator'),
			$oArrow = $oLocator.find('.arrow'),
			$oP = $oLocator.find('>p'),
			$oContent = $oLocator.find('.content'),
			isExpand = false;

		$oP.on('click', function() {
			if(!isExpand) {
				$oArrow.addClass('active');
				$oContent.slideDown();
				$oLocator.addClass('active');

				if($oBasket.hasClass('active')) {
					$oBasket.find('.view').trigger('click');
				}
			} else {
				$oArrow.removeClass('active');
				$oContent.slideUp();
				$oLocator.removeClass('active');
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
