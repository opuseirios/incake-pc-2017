(function(window, document, $, undefined) {

  $(function() {

    // 初始化图片预览功能模块
    fnInitPreview();

    // 初始化商品信息
    fnInitIntroInfo();

    // 切换商品详情和评价选项卡
    fnSwitchDetail();

    // 瑞雪检测 --- 详情页
    // fnInitRxDetail();
  });

  // 切换商品详情和评价
  function fnSwitchDetail() {
    var $detail = $('#productDetail'),
      $header = $detail.find('>.header'),
      $container = $detail.find('>.container');

    // switch tabs
    $header.on('click', 'a', function(e) {
      $(this).addClass('active').siblings().removeClass('active');
      var idx = $(this).index();
      $container.find('.c-wrap').eq(idx).addClass('active').siblings().removeClass('active');
    });
  }

  // 初始化商品信息
  function fnInitIntroInfo() {
    var $info = $('#introInfo'),
      $specifics = $info.find('.specifics'),
      $types = $info.find('.types'),
      $addons = $info.find('.addons'),
      $amount = $info.find('.amount'),
      $operates = $info.find('.operates'),
      $scan = $info.find('.qrcode-scan');

    // 规格切换
    $specifics.on('click', '.spec', function(e) {
      $(this).addClass('active').siblings().removeClass('active');
    });

    // 款项切换
    $types.on('click', 'li', function(e) {
      $(this).addClass('checked').siblings().removeClass('checked');
    });

    // 搭配套餐
    (function($wrap) {
      var $li = $wrap.find('li'),
        idx = 1;

      if ($li.length <= 2) {
        $wrap.find('.switcher').hide();
      }

      // 初始化时设置索引大于1的li都隐藏
      $li.eq(idx).nextAll().hide();

      // 推荐切换
      $wrap.on('click', 'li', function(e) {
        $(this).toggleClass('checked');
      });

      // 展开／收缩
      $wrap.on('click', '.btn-switch', function(e) {
        var isExpand = $(this).hasClass('expanded');

        if (isExpand) { // 展开状态
          $(this).removeClass('expanded');
          $li.eq(idx).nextAll().slideUp();
        } else { // 非展开状态
          $(this).addClass('expanded');
          $li.eq(idx).nextAll().slideDown();
        }
      });
    })($addons);

    // 数量切换
    (function($wrap) {
      var $input = $wrap.find('.txt-amount'),
        amount = 0;

      // 增加数量
      $wrap.on('click', '.btn-add', function(e) {
        amount = parseInt($input.val());
        amount++;
        if (amount > 1) {
          $wrap.find('.btn-sub').removeClass('disabled');
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

    // 喜欢及加入购物车
    (function($wrap) {

      // 喜欢／取消喜欢
      $wrap.on('click', '.favor', function(e) {
        var isFavored = $(this).hasClass('selected');
        if (isFavored) {
          $(this).removeClass('selected');

          // TODO 执行取消喜欢逻辑
        } else {
          $(this).addClass('selected');

          // TODO 执行设置喜欢逻辑
        }

        fnInitRxFavor($info, isFavored);
      });
    })($operates);

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
      zoomWidth: 400,
      zoomHeight: 400,
      zoomType: 'reverse',
      lens: true,
      preloadImages: false,
      alwaysOn: false,
      title: false,
      // showEffect: 'fadein',
      // hideEffect: 'fadeout'
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

  function fnInitRxDetail() {
    if (!rxStream) {
      return false;
    }

    var $header = $('#layoutHeader'),
      $portal = $header.find('.portal'),
      $detailpage = $('#detailPage');

    var o_username = '',
      o_mobile = '',
      b_device = 'pc';

    if ($portal.find('.info').length > 0) {
      o_username = $portal.find('.info').html().trim();
      o_mobile = $portal.find('.info').html().trim();
    }

    // 访问详情页
    (function() {
      var b_productname = '';

      b_productname = $('#introInfo').find('.title').find('.cn').html().trim();

      // send to rxstream server
      rxStream.track('view_detail', {
        subject: {
          o_username: o_username,
          o_mobile: o_mobile
        },
        properties: {
          b_productname: b_productname,
          b_device: b_device
        }
      });
    })();

    // 加入购物车
    $('#introInfo').on('click', '.add-basket', function(e) {
      var b_productname = '',
        b_product_size = '',
        b_productprice_d = '',
        b_productprice_m = 0,
        b_productCount_d = 0,
        b_productstyle = '';

      var $item = $(this).closest('.introinfo-wrap'),
        $type = $item.find('.types').find('li').filter('.checked');

      b_productname = $item.find('.title').find('.cn').html().trim();
      b_product_size = $item.find('.specifics').find('.spec').filter('.active').html().trim();
      b_productprice_d = $type.find('.price').find('i').html().trim();
      b_productprice_m = parseFloat(b_productprice_d, 10).toFixed(2);
      b_productCount_d = parseInt($item.find('.amount').find('.txt-amount').val(), 10);
      b_productstyle = $type.find('.name').html().trim();

      // send to rxstream server
      rxStream.track('add_shoppingcart', {
        subject: {
          o_username: o_username,
          o_mobile: o_mobile
        },
        properties: {
          b_productname: b_productname,
          b_product_size: b_product_size,
          b_productprice_d: b_productprice_d,
          b_productprice_m: b_productprice_m,
          b_productCount_d: b_productCount_d,
          b_productstyle: b_productstyle,
          b_device: b_device
        }
      });

      e.stopPropagation();
    });

    // 立即购买
    $('#introInfo').on('click', '.buy-immediate', function(e) {
      var b_productname = '',
        b_product_size = '',
        b_productprice_d = '',
        b_productprice_m = 0,
        b_productCount_d = 0,
        b_productstyle = '';

      var $item = $(this).closest('.introinfo-wrap'),
        $type = $item.find('.types').find('li').filter('.checked');

      b_productname = $item.find('.title').find('.cn').html().trim();
      b_product_size = $item.find('.specifics').find('.spec').filter('.active').html().trim();
      b_productprice_d = $type.find('.price').find('i').html().trim();
      b_productprice_m = parseFloat(b_productprice_d, 10).toFixed(2);
      b_productCount_d = parseInt($item.find('.amount').find('.txt-amount').val(), 10);
      b_productstyle = $type.find('.name').html().trim();

      // send to rxstream server
      rxStream.track('buy_now', {
        subject: {
          o_username: o_username,
          o_mobile: o_mobile
        },
        properties: {
          b_productname: b_productname,
          b_product_size: b_product_size,
          b_productprice_d: b_productprice_d,
          b_productprice_m: b_productprice_m,
          b_productCount_d: b_productCount_d,
          b_productstyle: b_productstyle,
          b_device: b_device
        }
      });

      e.stopPropagation();
    });

    // 继续购物
    $('#maskPopup').on('click', '.btn-cancel', function(e) {
      var isKeepbuy = $(this).html().trim() === '再逛逛'
        ? true
        : false;
      if (!isKeepbuy) {
        return false;
      }

      // send to rxstream server
      rxStream.track('keepbuy', {
        subject: {
          o_username: o_username,
          o_mobile: o_mobile
        },
        properties: {
          b_device: b_device
        }
      });
    });
  }

  function fnInitRxFavor($item, isFavored) {
    if (!rxStream) {
      return false;
    }

    var $header = $('#layoutHeader'),
      $portal = $header.find('.portal');

    var o_username = '',
      o_mobile = '',
      b_device = 'pc';

    if ($portal.find('.info').length > 0) {
      o_username = $portal.find('.info').html().trim();
      o_mobile = $portal.find('.info').html().trim();
    }

    // 喜欢
    var b_productname = '',
      b_linkornot = '';

    b_productname = $item.find('.title').find('.cn').html().trim();
    b_linkornot = isFavored
      ? '取消喜欢'
      : '喜欢';

    // send to rxstream server
    rxStream.track('like', {
      subject: {
        o_username: o_username,
        o_mobile: o_mobile
      },
      properties: {
        b_productname: b_productname,
        b_linkornot: b_linkornot,
        b_device: b_device
      }
    });
  }
})(window, document, jQuery);
