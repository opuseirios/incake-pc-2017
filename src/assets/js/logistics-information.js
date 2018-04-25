;(function ($,window,document) {
    $(function () {
        initLog();
    })
    /*初始化物流信息*/
    var _list = [
        {
            msg:'【已签收，签收人是王】',
            time:'12:42:51',
            date:'2018-04-20'
        },
        {
            msg:'【上海市】闸北派件员：王良冲A 13661811758正在为您派件',
        },
        {
            msg:'到上海市【闸北】',
            time:'18:55:18',
            date:'2018-04-20'
        },
        {
            msg:'【上海转运中心】，正发往【闸北】',
            time:'12:42:51',
            date:'2018-04-20'
        },
        {
            msg:'到【上海转运中心】',
            time:'12:42:51',
            date:'2018-04-20'
        }
        ,{
            msg:'广州市【广州转运中心】，正发往【上海转运中心】',
            time:'12:42:51',
            date:'2018-04-19'
        }
        ,{
            msg:'到广州市【广州转运中心】',
            time:'12:42:51',
            date:'2018-04-19'
        }
        ,{
            msg:'【广州新花山站】揽收成功',
            time:'12:42:51',
            date:'2018-04-18'
        }
        ,{
            msg:'卖家发货',
            time:'12:42:51',
            date:'2018-04-18'
        }
    ];
    if(_list.length){
        _list = _list.reverse();
    }else {
        _list = [];
    }
    function initLog() {
        var _data = {
            /*将物流信息从上到下排列*/
            list:_list,
            status:'已收货',
            company:'顺丰',
            bill:'12323123123'
        }
        var html = template('tplLogistics',_data);
        $('#logistics').append(html);
    }

})(jQuery,window,document);