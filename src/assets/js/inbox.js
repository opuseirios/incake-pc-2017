;(function($,window,document){
    $(function(){
        $('#fullPage').fullpage({
            navigation:true,
            onLeave: function(index, nextIndex, direction){
                if(index===1&&direction==='down'){
                    $('.layout-header').fadeOut();
                }
            },
            afterLoad:function(anchorLink, index){
                var loadedSection = $(this);

                //使用 index
                if(index===1){
                    $('.layout-header').fadeIn();
                }
            }
        });
        $('.inbox').hover(function(){
            $(this).animate({'width':'400px','height':'400px'},500)
            // $(this).css({'width':'500px','height':'500px'})
        },function(){
            $(this).animate({'width':'350px','height':'350px'},500)
        })

        $('.cake-one,.cake-two').hover(function() {
            $(this).animate({'height':'500px','top':'-190px','width':'60%'},500);

        },function(){
            $(this).animate({'height':'100%','top':'0','width':'50%'},500)
        })

        $('.bannerImg').hover(function(){
            $(this).find('img').css('opacity',1);
        },function(){
            $(this).find('img').css('opacity',.6);
        })
    })
})(jQuery,window,document);