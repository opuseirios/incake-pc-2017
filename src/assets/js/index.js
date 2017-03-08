(function(window, $, undefined) {
	var doc = window.document;
	$(doc).on('ready', function() {
		// 轮播图
		fnInitMainSlider();

		// 绑定当季热卖数据
		fnBindBestChoice();
	});

	function fnBindBestChoice() {
		var $oBestChoice = $('#bestChoice');
		var _data = {
			list: [{
				link: 'javascript:;',
				imgUrl: 'assets/imgs/list/cake_01.jpg',
				favor: false,
				name: {
					cn: '小鸡派对',
					en: 'Chick Party'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'javascript:;',
				imgUrl: 'assets/imgs/list/cake_02.jpg',
				favor: true,
				name: {
					cn: '百变魔方',
					en: 'Rubik Cube'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'javascript:;',
				imgUrl: 'assets/imgs/list/cake_03.jpg',
				favor: false,
				name: {
					cn: '小鸡派对',
					en: 'Chick Party'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'javascript:;',
				imgUrl: 'assets/imgs/list/cake_04.jpg',
				favor: false,
				name: {
					cn: '百变魔方',
					en: 'Rubik Cube'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'javascript:;',
				imgUrl: 'assets/imgs/list/cake_01.jpg',
				favor: false,
				name: {
					cn: '小鸡派对',
					en: 'Chick Party'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'javascript:;',
				imgUrl: 'assets/imgs/list/cake_02.jpg',
				favor: false,
				name: {
					cn: '百变魔方',
					en: 'Rubik Cube'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'javascript:;',
				imgUrl: 'assets/imgs/list/cake_03.jpg',
				favor: false,
				name: {
					cn: '小鸡派对',
					en: 'Chick Party'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'javascript:;',
				imgUrl: 'assets/imgs/list/cake_04.jpg',
				favor: false,
				name: {
					cn: '百变魔方',
					en: 'Rubik Cube'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'javascript:;',
				imgUrl: 'assets/imgs/list/cake_01.jpg',
				favor: false,
				name: {
					cn: '小鸡派对',
					en: 'Chick Party'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'javascript:;',
				imgUrl: 'assets/imgs/list/cake_02.jpg',
				favor: false,
				name: {
					cn: '百变魔方',
					en: 'Rubik Cube'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'javascript:;',
				imgUrl: 'assets/imgs/list/cake_03.jpg',
				favor: false,
				name: {
					cn: '小鸡派对',
					en: 'Chick Party'
				},
				price: 198,
				pound: 1.5
			}, {
				link: 'javascript:;',
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
		var _html = template('tplBestChoice', _data);
		$oBestChoice.html(_html);
	}

	function fnInitMainSlider() {
		var $oHomePage = $('#homePage'),
			$oMainSlider = $oHomePage.find('.main-slider'),
			$oMainSwiper = $oMainSlider.find('.swiper-container'),
			_swiper = null,
			count = $oMainSlider.find('.swiper-slide').length;

		if(count > 1) {
			_swiper = $oMainSwiper.swiper({
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        loop: true,
		        autoplay: 5000,
		        autoplayDisableOnInteraction: false,
		        speed: 1000
		    });

		    // slide prev
		    $oMainSlider.on('click', '.prev-slide', function(e) {
		    	e.preventDefault();
		    	_swiper.swipePrev();
		    });

		    // slide next
		    $oMainSlider.on('click', '.next-slide', function(e) {
		    	e.preventDefault();
		    	_swiper.swipeNext();
		    });	

		    $oMainSlider.hover(function() {
		    	_swiper.stopAutoplay();
		    }, function() {
		    	_swiper.startAutoplay();
		    });
		} else {
			_swiper = $oMainSwiper.swiper({
				autoplay: false
			});
			$oMainSlider.find('.prev-slide').hide();
			$oMainSlider.find('.next-slide').hide();
		}
	}
})(window, jQuery);