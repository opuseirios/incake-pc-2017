(function(window, $, undefined) {
	var doc = window.document;
	$(doc).on('ready', function() {
		// 导航栏
		fnInitHeaderNav();
		// 轮播图
		fnInitMainSlider();
	});

	function fnInitHeaderNav() {
		var $oNav = $('#menuNav'),
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

	function fnInitMainSlider() {
		var swiper = new Swiper('#mainSlider .swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        loop: true,
	        autoplay: 5000,
	        autoplayDisableOnInteraction: false,
	        speed: 1000
	    });
	}
})(window, jQuery);