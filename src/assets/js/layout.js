(function(window, $, undefined) {

	// document ready events
	$(function() {

		// 瑞雪系统安装代码
		(function(j){var h=j.sdkUrl,a=j.name,d=this,g=d.document,f=null,e=null;d.RXSTREAM201607=a;d[a]=d[a]||function(i){return function(){(d[a]._rx=d[a]._rx||[]).push([i,arguments])}};var b=["track","trackSignup","userIdentify"];for(var c=0;c<b.length;c++){d[a][b[c]]=d[a].call(null,b[c])}if(!d[a].lt){f=g.createElement("script"),e=g.getElementsByTagName("script")[0];f.async=true;f.src=h;e.parentNode.insertBefore(f,e);d[a].lt=1*new Date();d[a].para=j}})({sdkUrl:location.protocol+"//stream.ruixuesoft.com/sdk/rxStream.js",sendLimit:1,showLog:true,name:"rxStream",autoTrack:true,apiHost:location.protocol+"//sc.ruixuesoft.com",appId:347});

		// 导航栏
		fnInitHeaderNav();
		// 城市切换
		fnInitCitySwitch();
		// 购物篮
		fnInitBasket();
		// 登录注册
		fnInitPortal();

		// 瑞雪检测 --- 头部导航栏
		fnInitRxHeadNavigation();
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

	function fnInitRxHeadNavigation() {
		if(!rxStream) {
			return false;
		}

		var $header = $('#layoutHeader'),
			$portal = $header.find('.portal'),
			$navigation = $header.find('.nav'),
			$locator = $header.find('.locator');

		var o_username = '',
			o_mobile = '',
			b_device = 'pc';

		if($portal.find('.info').length > 0) {
			o_username = $portal.find('.info').html().trim();
			o_mobile = $portal.find('.info').html().trim();
		}

		// 头部导航栏
		$navigation.on('click', 'a', function(e) {
			var $subnav = $(this).closest('.subnav'),
				b_type = '',
				b_menu = '';

			if($subnav.length > 0) {
				b_type = $subnav.prev('a').html();
				b_menu = $(this).html();
			} else {
				b_type = $(this).html();
				b_menu = '';
			}

			// send to rxstream server
			rxStream.track('head_navigation', {
				subject: {
					o_username: o_username,
					o_mobile: o_mobile
				},
				properties: {
					b_type: b_type,
					b_menu: b_menu,
					b_device: b_device
				}
			});
		});

		// 定位城市
		$locator.on('click', 'li', function(e) {
			var b_positioncity = '';

			b_positioncity = $(this).html().trim();

			// send to rxstream server
			rxStream.track('positioncity', {
				subject: {
					o_username: o_username,
					o_mobile: o_mobile
				},
				properties: {
					b_positioncity: b_positioncity,
					b_device: b_device
				}
			});
		});
	}
})(window, jQuery);
