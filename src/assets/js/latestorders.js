
/**
 * 对时间戳进行格式化
 * @param  spec    要格式化的时间戳
 * @param  format  进行格式化的规格字符串
 * @return [description]
 */
template.helper('timestampFormat', function(timestamp) {
    var time = '';
    if(!!timestamp){
    	if(typeof timestamp == 'string') {
    		timestamp = parseInt(timestamp);
    	}
        time = moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
    }
    return time;
});

;(function(window, $, undefined) {

	$(function() {
		fnInitList();
	});

	// 初始化列表数据
	function fnInitList() {
		var $oOrderList = $('#orderList');

		var _data = {
			list: [{
				orderNo: 'SHW0865760',
				pubTime: new Date().getTime().toString(),
				deliveryType: 'incake快递',
				currentState: '初始',
				detailLink: 'javascript:;',
				cakes: [{
					link: '/detail.html',
					thumbImg: '/assets/imgs/ucenter/cake_thumb.jpg',
					name: '樱桃冻芝士',
					pound: 1.5,
					price: 189,
					counts: 1,
					require: '暂无内容'
				}, {
					link: '/detail.html',
					thumbImg: '/assets/imgs/ucenter/cake_thumb.jpg',
					name: '樱桃冻芝士',
					pound: 1.5,
					price: 189,
					counts: 1,
					require: '暂无内容'
				}],
				totalMoney: 189,
				paymentType: '支付宝支付',
				orderStatus: '<a href="javascript:;" class="cancel">取消订单</a><a href="javascript:;" class="payonline">在线支付</a><p>未支付</p><a href="javascript:;" class="check-logistics">查看物流</a>',
				orderOperates: '<a href="javascript:;" class="rebuy">再购物</a>'
			}, {
				orderNo: 'SHW0865760',
				pubTime: Date.now().toString(),
				deliveryType: 'incake快递',
				currentState: '初始',
				detailLink: 'javascript:;',
				cakes: [{
					link: '/detail.html',
					thumbImg: '/assets/imgs/ucenter/cake_thumb.jpg',
					name: '樱桃冻芝士',
					pound: 1.5,
					price: 189,
					counts: 1,
					require: '暂无内容'
				}],
				totalMoney: 189,
				paymentType: '支付宝支付',
				orderStatus: '<a href="javascript:;" class="cancel">取消订单</a><a href="javascript:;" class="payonline">在线支付</a><p>未支付</p><a href="javascript:;" class="check-logistics">查看物流</a>',
				orderOperates: '<a href="javascript:;" class="rebuy">再购物</a>'
			}]
		};

		var _html = template('tplOrderList', _data);
		$oOrderList.html(_html);
	}

})(window, jQuery);