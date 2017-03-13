(function(window, $, undefined) {
	var doc = window.document;
	$(doc).on('ready', function() {

		// 绑定蛋糕列表数据
		fnBindCakeList();

		// 加载更多数据
		var throttle = _.throttle(updateCakeList, 200);
		$(window).on('scroll', throttle);
	});

	var isLoading = false; // 避免多次加载
	var beforeScrollTop = document.documentElement.scrollTop || document.body.scrollTop, // 滚动前scrollTop值
		afterScrollTop = 0;	// 滚动后scrollTop值
	function updateCakeList() {

		afterScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var delta = afterScrollTop - beforeScrollTop;
		beforeScrollTop = afterScrollTop;
		if(delta === 0 || delta < 0) { // 页面未滑动或者上滑
			return false;
		}

		var viewHeight = $(window).height(),
			$oMorecake = $('#listPage').find('.morecake'),
			iTop = $oMorecake.offset().top,
			scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

		var $oLoading = $oMorecake.find('.loading');
		var disT = iTop - viewHeight;

		if(disT < scrollTop) {
			if(!isLoading) {
				// 加载数据
				$.ajax({
					url: 'assets/data/morecake.json', // 加载更多api
					type: 'get',
					data: {},
					dataType: 'json',
					beforeSend: function() {
						isLoading = true;
						$oLoading.show();
					},
					success: function(response) {
						if(response.list.length > 0) {
							// 绑定dom
							fnBindMoreList(response);
						}						
						isLoading = false;
						$oLoading.hide();
					}
				});
			}
		}		
	}

	function fnBindCakeList() {
		var $oCakeList = $('#cakeList');
		var _data = {
			diy: [{
				img: 'assets/imgs/list/cake_diy.jpg',
				url: 'diy.html'
			}],
			list: [{
				link: 'detail.html',
				imgUrl: 'assets/imgs/list/cake_01.jpg',
				favor: false,
				desc: '纯芝士与醇香奶油的梦幻组合',
				name: {
					cn: '小鸡派对',
					en: 'Chick Party'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'detail.html',
				imgUrl: 'assets/imgs/list/cake_02.jpg',
				favor: true,
				desc: '纯芝士与醇香奶油的梦幻组合',
				name: {
					cn: '百变魔方',
					en: 'Rubik Cube'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'detail.html',
				imgUrl: 'assets/imgs/list/cake_03.jpg',
				favor: false,
				desc: '纯芝士与醇香奶油的梦幻组合',
				name: {
					cn: '小鸡派对',
					en: 'Chick Party'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'detail.html',
				imgUrl: 'assets/imgs/list/cake_04.jpg',
				favor: false,
				desc: '纯芝士与醇香奶油的梦幻组合',
				name: {
					cn: '百变魔方',
					en: 'Rubik Cube'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'detail.html',
				imgUrl: 'assets/imgs/list/cake_01.jpg',
				favor: false,
				desc: '纯芝士与醇香奶油的梦幻组合',
				name: {
					cn: '小鸡派对',
					en: 'Chick Party'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'detail.html',
				imgUrl: 'assets/imgs/list/cake_02.jpg',
				favor: false,
				desc: '纯芝士与醇香奶油的梦幻组合',
				name: {
					cn: '百变魔方',
					en: 'Rubik Cube'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'detail.html',
				imgUrl: 'assets/imgs/list/cake_03.jpg',
				favor: false,
				desc: '纯芝士与醇香奶油的梦幻组合',
				name: {
					cn: '小鸡派对',
					en: 'Chick Party'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'detail.html',
				imgUrl: 'assets/imgs/list/cake_04.jpg',
				favor: false,
				desc: '纯芝士与醇香奶油的梦幻组合',
				name: {
					cn: '百变魔方',
					en: 'Rubik Cube'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'detail.html',
				imgUrl: 'assets/imgs/list/cake_01.jpg',
				favor: false,
				desc: '纯芝士与醇香奶油的梦幻组合',
				name: {
					cn: '小鸡派对',
					en: 'Chick Party'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'detail.html',
				imgUrl: 'assets/imgs/list/cake_02.jpg',
				favor: false,
				desc: '纯芝士与醇香奶油的梦幻组合',
				name: {
					cn: '百变魔方',
					en: 'Rubik Cube'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'detail.html',
				imgUrl: 'assets/imgs/list/cake_03.jpg',
				favor: false,
				desc: '纯芝士与醇香奶油的梦幻组合',
				name: {
					cn: '小鸡派对',
					en: 'Chick Party'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'detail.html',
				imgUrl: 'assets/imgs/list/cake_04.jpg',
				favor: false,
				desc: '纯芝士与醇香奶油的梦幻组合',
				name: {
					cn: '百变魔方',
					en: 'Rubik Cube'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'detail.html',
				imgUrl: 'assets/imgs/list/cake_03.jpg',
				favor: false,
				desc: '纯芝士与醇香奶油的梦幻组合',
				name: {
					cn: '小鸡派对',
					en: 'Chick Party'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'detail.html',
				imgUrl: 'assets/imgs/list/cake_04.jpg',
				favor: false,
				desc: '纯芝士与醇香奶油的梦幻组合',
				name: {
					cn: '百变魔方',
					en: 'Rubik Cube'
				},
				price: 198,
				pound: 1.5
			}]
		};
		var _html = template('tplCakeList', _data);
		$oCakeList.html(_html);
	}

	function fnBindMoreList(_data) {
		var $oCakeList = $('#cakeList');
		var _html = template('tplMoreList', _data);
		$oCakeList.append(_html);
	}

})(window, jQuery);