;(function(window,document,$){
    $(function(){
        $('#fullpage').fullpage({
            anchors: ['1st-page', '2nd-page', '3rd-page', '4th-page', '5th-page', '6th-page'],
            navigation:true,
            navigationPosition:'right',
            afterLoad:function(anchorLink,index){
                var $section = $(this);

                if(index===1){
                    $section
                        .find('.section_logo')
                        .addClass('animated')
                        .addClass('slideInRight')
                        .show();
                }else{
                    $section
                        .find('.section_text')
                        .addClass('animated')
                        .addClass('swing')
                        .show();
                    $section
                        .find('.section_box')
                        .addClass('animated')
                        .addClass('bounceInDown')
                        .show();
                    $section
                        .find('.section_cake')
                        .addClass('animated')
                        .addClass('lightSpeedIn')
                        .show();
                }
            },
            onLeave:function(index,nextIndex,direction){
                var $section = $(this);
                if(index===1){
                    $section
                        .find('.section_img')
                        .removeClass('animated')
                        .removeClass('slideInLeft')
                        .fadeOut();
                    $section
                        .find('.section_logo')
                        .removeClass('animated')
                        .removeClass('slideInRight')
                        .fadeOut();
                }else{
                    $section
                        .find('.section_text')
                        .removeClass('animated')
                        .removeClass('swing')
                        .fadeOut();
                    $section
                        .find('.section_box')
                        .removeClass('animated')
                        .removeClass('bounceInDown')
                        .fadeOut();
                    $section
                        .find('.section_cake')
                        .removeClass('animated')
                        .removeClass('lightSpeedIn')
                        .fadeOut();
                }
            }
        })
    })
})(window,document,jQuery);