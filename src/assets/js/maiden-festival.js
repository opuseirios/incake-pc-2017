;(function () {
    $(function () {
        fnInitData();
    });

    function fnInitData() {
        var $cdContainer = $('#cdContainer');
        var _data = {
            list: [
                {
                    img: 'assets/imgs/maiden-festival/cake3.png',
                    name: {
                        cn: '香草瑞士卷',
                        en: 'VANILLA SWISS ROLL'
                    },
                    currentPrice:58,
                    originalPrice:68,
                    piece:'4只装',
                    link: 'javascript:;'
                },
                {
                    img: 'assets/imgs/maiden-festival/cake4.png',
                    name: {
                        cn: '巧克力瑞士卷',
                        en: 'CHOCOLATE SWISS ROLL'
                    },
                    currentPrice:58,
                    originalPrice:68,
                    piece:'4只装',
                    link: 'javascript:;'
                },
                {
                    img: 'assets/imgs/maiden-festival/cake5.png',
                    name: {
                        cn: '经典小方',
                        en: 'CLASSIC SLICES'
                    },
                    currentPrice:58,
                    originalPrice:68,
                    piece:'4只装',
                    link: 'javascript:;'
                },
                {
                    img: 'assets/imgs/maiden-festival/cake6.png',
                    name: {
                        cn: '芝士星语',
                        en: 'QUEEN CHEESE'
                    },
                    currentPrice:99,
                    originalPrice:99,
                    piece:'4只装',
                    link: 'javascript:;'
                },
                {
                    img: 'assets/imgs/maiden-festival/cake7.png',
                    name: {
                        cn: '草莓甜心',
                        en: 'STRAWBERRY SWEET HEART'
                    },
                    currentPrice:58,
                    originalPrice:68,
                    piece:'4只装',
                    link: 'javascript:;'
                },
                {
                    img: 'assets/imgs/maiden-festival/cake8.png',
                    name: {
                        cn: '甜心',
                        en: 'SWEET HEART'
                    },
                    currentPrice:58,
                    originalPrice:68,
                    piece:'4只装',
                    link: 'javascript:;'
                },
            ]
        };
        //console.log(_data)
        var _html = template('tplList',_data);
        $cdContainer.html(_html);
        console.log($cdContainer.html);
    }
})();