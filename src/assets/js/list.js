(function(window, $, undefined) {
	var doc = window.document;
	$(doc).on('ready', function() {
		// 绑定蛋糕列表数据
		fnBindCakeList();
	});

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

})(window, jQuery);