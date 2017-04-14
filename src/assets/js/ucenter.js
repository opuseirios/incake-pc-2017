(function(window, $, undefined) {

	$(function() {
		
		// 绑定发票列表数据
		fnBindList();
	});

	// 绑定发票列表数据
	function fnBindList() {
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

})(window, jQuery);