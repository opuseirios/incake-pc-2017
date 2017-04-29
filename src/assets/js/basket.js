(function(window, document, $, undefined) {

    $(function() {

        // init global operate
        fnInitGlobalOperate();

        // init surprise operate
        fnInitSurpriseOperate();

        // init regular operate
        fnInitRegularOperate();
    });

    // func of init global operate
    function fnInitGlobalOperate() {
        var $page = $('#basketPage'),
            $basketContainer = $page.find('.basket-container');

        // check on/off basket items
        $basketContainer.on('click', '.btn-ckbox', function(e) {
            var isChecked = $(this).hasClass('checked');
            if (!isChecked) {
                $(this).addClass('checked');
            } else {
                $(this).removeClass('checked');
            }
        });

        // 数量切换
        (function($wrap) {

            // 增加数量
            $wrap.find('.item').not('.soldout').on('click', '.btn-add', function(e) {
                var $input = $(this)
                    .prev('.amount-wrap')
                    .find('.txt-amount'),
                    amount = parseInt($input.val());
                amount++;
                if (amount > 1) {
                    $(this)
                        .siblings('.btn-sub')
                        .removeClass('disabled');
                }
                $input.val(amount);
            });

            // 减少数量
            $wrap.find('.item').not('.soldout').on('click', '.btn-sub', function(e) {
                if ($(this).hasClass('disabled')) {
                    return false;
                }
                var $input = $(this)
                    .next('.amount-wrap')
                    .find('.txt-amount'),
                    amount = parseInt($input.val());
                amount--;
                if (amount <= 1) {
                    $(this).addClass('disabled');
                }
                $input.val(amount);
            });
        })($basketContainer);

        // 删除商品
        $basketContainer.on('click', '.btn-del-item', function(e) {
            var $item = $(this).closest('.item'),
                $list = $item.parent('ul');

            // TODO 删除提示

            // 删除之前，当前列表只剩一个商品，当前列表也删除
            if ($list.find('.item').length == 1) {
                $list.remove();
            }

            $item.remove();
        });

        // 优惠购
        (function($wrap) {
            var $view = $wrap.find('.view-privilege');

            // toggle wrap
            $view.on('click', '>p', function(e) {
                var isActive = $(this).hasClass('active');
                if (!isActive) {
                    $(this)
                        .addClass('active')
                        .next('.privilege-wrap')
                        .fadeIn();
                } else {
                    $(this)
                        .removeClass('active')
                        .next('.privilege-wrap')
                        .fadeOut();
                }
            });

            // close wrap
            $view.on('click', '.close-privilege-wrap', function(e) {
                var $privilegeWrap = $(this).parent('.privilege-wrap'),
                    $paragraph = $privilegeWrap.prev('p');

                $privilegeWrap.fadeOut();
                $paragraph.removeClass('active');
            });

            // checked privilege
            $view.on('click', '.btn-ckbox-p', function(e) {
                var isChecked = $(this).hasClass('checked');
                if (!isChecked) {
                    $(this).addClass('checked');
                } else {
                    $(this).removeClass('checked');
                }
            });

            // remove privilege
            $view.on('click', '.btn-del-p', function(e) {
                var $item = $(this).closest('li'),
                    $list = $(this).closest('.privilege-list');

                // TODO 删除提示

                // 删除之前，当前列表只剩一个商品，当前列表也删除
                if ($list.find('li').length == 1) {
                    $list.closest('.view-privilege').remove();
                }

                $item.remove();
            });
        })($basketContainer);
    }

    // func of init surprise operate
    function fnInitSurpriseOperate() {
        var $page = $('#basketPage'),
            $surprise = $page.find('.surprise-list');

        // view surprise
        $surprise.on('click', '.view-surprise', function(e) {
            var isActive = $(this).hasClass('active');
            if (!isActive) {
                $(this).addClass('active');
                $(this).next('.surprise-wrapper').slideDown();
            } else {
                $(this).removeClass('active');
                $(this).next('.surprise-wrapper').slideUp();
            }
        });

        // check on/off radio-box
        $surprise.on('click', '.radio-box p', function(e) {
            $(this)
                .addClass('checked')
                .parent('.radio-box')
                .siblings('.radio-box')
                .children('p')
                .removeClass('checked');

            // set the input focus if this item be other-box
            if ($(this).parent('.radio-box').hasClass('other-box')) {
                $(this).next('.txt-other').focus();
            }
        });

        // focus other input
        $surprise.on('focus', '.txt-other', function(e) {
            $(this)
                .prev('p')
                .addClass('checked')
                .parent('.radio-box')
                .siblings('.radio-box')
                .children('p')
                .removeClass('checked');
        });

        // maxlength setting about summary
        $surprise.find('.txt-summary').maxlength({
            max: 100,
            feedbackText: '还可输入{r}字'
        });
    }

    // func of init regular operate
    function fnInitRegularOperate() {
        var $page = $('#basketPage'),
            $regular = $page.find('.regular-list');

        // upload image
        $regular.on('click', '.upload-img', function(e) {
            var isActive = $(this).hasClass('active');
            if (!isActive) {
                $(this).addClass('active');
                $(this).next('.upload-wrapper').slideDown();
            } else {
                $(this).removeClass('active');
                $(this).next('.upload-wrapper').slideUp();
            }
        });
    }

})(window, document, jQuery);
