(function (window, $, undefined) {
    $(function () {
        fnInitReset();
    });

    function fnInitReset() {
        var $oPage = $('#resetPage'),
            $oResetHeader = $oPage.find('.reset-header'),
            $oResetContainer = $oPage.find('.reset-container'),
            $oIndicator = $oResetHeader.find('.indicator'),
            $oStepList = $oResetContainer.find('.step-list'),
            tl = new TimelineLite();
            
        // 验证身份阶段下一步按钮点击事件
        $oResetContainer.find('.step-verify').on('click', '.btn-next', function () {

            // TODO 处理一些验证事宜

            tl.clear();
            tl.to($oIndicator, 0.5, {
                left: '50%',
                ease: Back.easeOut,
                onComplete: function () {
                    tl.to($oStepList, 0.8, {
                        left: '-1200px',
                        ease: Back.easeOut
                    });
                }
            });
        });

        // 重置密码阶段确认并修改按钮点击事件
        $oResetContainer.find('.step-reset').on('click', '.btn-next', function () {

            // TODO 处理一些验证事宜

            tl.clear();
            tl.to($oIndicator, 0.5, {
                left: '100%',
                ease: Back.easeOut,
                onComplete: function () {
                    tl.to($oStepList, 0.8, {
                        left: '-2400px',
                        ease: Back.easeOut
                    });
                }
            });
        });
    }
})(window, jQuery);