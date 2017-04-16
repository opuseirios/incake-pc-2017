(function(window, $, undefined) {

    $(function() {

        // 初始化下拉框
        $('.select2').select2();

        // 初始化日期选择器
        fnInitBirthPicker();
    });

    // 初始化日期选择器
    function fnInitBirthPicker() {

    	// 具体使用方法请参见：https://github.com/dbushell/Pikaday
        var picker = new Pikaday({
            i18n: {
                previousMonth: '上一月',
                nextMonth: '下一月',
                months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                weekdaysShort: ['日', '一', '二', '三', '四', '五', '六']
            },
            field: document.getElementById('birthpicker'),
            firstDay: 1,
            minDate: new Date(1900, 0, 1),
            maxDate: new Date(2020, 12, 31),
            yearRange: [1900, 2020],
            onSelect: function() {
                document.getElementById('txtBirth').value = this.toString('YYYY-MM-DD');
            }
        });
    }

})(window, jQuery);
