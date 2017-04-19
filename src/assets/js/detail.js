(function(window, document, $, undefined) {

    $(function() {

        // 初始化图片预览功能模块
        fnInitPreview();

        // 初始化商品信息
        fnInitIntroInfo();
    });

    // 初始化商品信息
    function fnInitIntroInfo() {
        var $info = $('#introInfo'),
            $specifics = $info.find('.specifics'),
            $types = $info.find('.types'),
            $addons = $info.find('.addons'),
            $amount = $info.find('.amount'),
            $scan = $info.find('.qrcode-scan');

        // 规格切换
        $specifics.on('click', '.spec', function(e) {
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active');
        });

        // 款项切换
        $types.on('click', 'li', function(e) {
            $(this)
                .addClass('checked')
                .siblings()
                .removeClass('checked');
        });

        // 推荐切换
        $addons.on('click', 'li', function(e) {
            $(this).toggleClass('checked');
        });

        // 数量切换
        (function($wrap) {
            var $input = $wrap.find('.txt-amount'),
                amount = 0;

            // 增加数量
            $wrap.on('click', '.btn-add', function(e) {
                amount = parseInt($input.val());
                amount++;
                if (amount > 1) {
                    $wrap
                        .find('.btn-sub')
                        .removeClass('disabled');
                }
                $input.val(amount);
            });

            // 减少数量
            $wrap.on('click', '.btn-sub', function(e) {
                if ($(this).hasClass('disabled')) {
                    return false;
                }
                amount = parseInt($input.val());
                amount--;
                if (amount <= 1) {
                    $(this).addClass('disabled');
                }
                $input.val(amount);
            });
        })($amount);

        // 手机扫码
        $scan.hover(function(e) {
            $(this).find('.qrcode').fadeIn();
        }, function(e) {
            $(this).find('.qrcode').fadeOut();
        });
    }

    // 初始化图片预览功能模块
    function fnInitPreview() {
        $('.jqzoom').jqzoom({
            zoomWidth: 540,
            zoomHeight: 540,
            zoomType: 'reverse',
            lens: true,
            preloadImages: true,
            alwaysOn: false,
            title: false,
            showEffect: 'fadein',
            hideEffect: 'fadeout'
        });

        var $thumblist = $('#thumblist'),
            $thumbli = $thumblist.children('li'),
            $thumbs = $thumblist.closest('.thumbs'),
            $btnPrev = $thumbs.find('.btn-prev'),
            $btnNext = $thumbs.find('.btn-next');

        // init thumblist width
        (function() {
            var totalW = 0;
            $thumblist.find('li').each(function(idx, ele) {
                totalW += $(ele).width() + parseInt($(ele).css('margin-right'), 10);
            });
            $thumblist.width(totalW);
        })();

        // init thumbs
        (function() {
            var listLen = $thumbli.length,
                currIndex = 0;
            $btnPrev.addClass('disabled');
            if (listLen <= 4) {
                $btnNext.addClass('disabled');
            } else if (listLen > 4) {
                currIndex = 3;
            }

            var liW = 110,
                liM = 10,
                iLeft = 0,
                tl = new TimelineLite();

            // handler for next thumb
            $btnNext.on('click', function(e) {
                if ($(this).hasClass('disabled')) {
                    return false;
                }
                $btnPrev.removeClass('disabled');
                currIndex++;
                if (currIndex == listLen - 1) { // last item
                    $(this).addClass('disabled');
                }
                iLeft += liW + liM;
                tl.clear();
                tl.to($thumblist, 0.5, {
                    x: -iLeft + 'px'
                });
            });

            // handler for prev thumb
            $btnPrev.on('click', function(e) {
                if ($(this).hasClass('disabled')) {
                    return false;
                }
                $btnNext.removeClass('disabled');
                currIndex--;
                if (currIndex == 3) { // first item
                    $(this).addClass('disabled');
                }
                iLeft -= liW + liM;
                tl.clear();
                tl.to($thumblist, 0.5, {
                    x: -iLeft + 'px'
                });
            });

        })();
    }

})(window, document, jQuery);
