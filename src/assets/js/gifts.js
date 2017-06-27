(function(window, $, undefined) {

  $(function() {

    // 初始化赠品数据
    fnInitGiftList();

    // 初始化配件数据
    fnInitListParts();
  });

  // init gift list data
  function fnInitGiftList() {
    var $wrapper = $('#giftWrapper'),
      $btnPrev = $wrapper.find('.btn-prev'),
      $btnNext = $wrapper.find('.btn-next'),
      $giftList = $wrapper.find('.gift-list'),
      liW = 240,
      liML = 10,
      viewNum = 3,
      iLeft = 0,
      maxW = 0,
      len = 0;

    // handle for init list
    (function() {

      // 数字蜡烛模拟数据
      var _data = {
        list: [{
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_01.jpg',
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '4只装',
          price: 189
        }, {
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_02.jpg',
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '1.5磅',
          price: 189
        }, {
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_03.jpg',
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '1.5磅',
          price: 189
        }, {
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_04.jpg',
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '1.5磅',
          price: 189
        }, {
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_01.jpg',
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '4只装',
          price: 189
        }, {
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_02.jpg',
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '1.5磅',
          price: 189
        }, {
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_03.jpg',
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '1.5磅',
          price: 189
        }, {
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_04.jpg',
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '1.5磅',
          price: 189
        }]
      };

      // set list position left to 0
      $giftList.css({
        left: 0
      });

      len = _data.list.length;
      maxW = (len - viewNum) * (liW + liML);
      $giftList.width((liW + liML) * len);

      // reset previous button style
      if ($btnPrev.hasClass('active')) {
        $btnPrev.removeClass('active');
      }

      // reset next button style
      if (len > viewNum) {
        $btnNext.addClass('active');
      } else {
        if ($btnNext.hasClass('active')) {
          $btnNext.removeClass('active');
        }
      }

      var _html = template('tplGiftList', _data);
      $giftList.html(_html);
    })();

    // handle for next slide
    $btnNext.on('click', function(e) {
      if (!$(this).hasClass('active')) {
        return false;
      }
      iLeft += (liW + liML);
      if (iLeft >= maxW) {
        iLeft = maxW;
        $(this).removeClass('active');
      }
      $giftList.animate({
        left: -iLeft + 'px'
      });
      if (len > viewNum && !$btnPrev.hasClass('active')) {
        $btnPrev.addClass('active');
      }
    });

    // handle for previous slide
    $btnPrev.on('click', function(e) {
      if (!$(this).hasClass('active')) {
        return false;
      }
      iLeft -= (liW + liML);
      if (iLeft <= 0) {
        iLeft = 0;
        $(this).removeClass('active');
      }
      $giftList.animate({
        left: -iLeft + 'px'
      });
      if (len > viewNum && !$btnNext.hasClass('active')) {
        $btnNext.addClass('active');
      }
    });

    // 选中切换
    $giftList.on('click', '.img', function(e) {
      var $element = $(this).closest('li');
      $element.toggleClass('selected');
      e.preventDefault();
    });

    // 数量加减
    $giftList.on('click', '.num-add', function(e) {
      var minusDom = $(this).siblings('.num-minus'),
        inputDom = $(this).siblings('.txt-num'),
        inputVal = parseInt(inputDom.val().trim(), 10);

      inputVal++;
      inputDom.val(inputVal);
      if (inputVal >= 2) {
        minusDom.addClass('active');
      }
    }).on('click', '.num-minus', function(e) {
      var inputDom = $(this).siblings('.txt-num'),
        inputVal = parseInt(inputDom.val().trim(), 10);

      inputVal--;
      if (inputVal <= 1) {
        inputVal = 1;
        $(this).removeClass('active');
      }
      inputDom.val(inputVal);
    });
  }

  // init list parts data
  function fnInitListParts() {
    var $wrapper = $('#partsWrapper'),
      $mask = $('#numberCandle');

    // 数字蜡烛加入购物车
    $wrapper.on('click', '.btn-candle', function(e) {
      $mask.fadeIn();
    });

    // 关闭数字蜡烛弹窗
    $mask.on('click', '.numbercandle-close', function(e) {
      $mask.fadeOut();
    });

    // 数字蜡烛选择
    $mask.on('click', '.container-body li', function(e) {
      $(this).toggleClass('active');
    });

    // 增加数量
    $mask.on('click', '.num-add', function(e) {
      var $input = $(this).prev('.txt-num'),
        amount = parseInt($input.val());
      amount++;
      if (amount > 1) {
        $(this).siblings('.num-minus').addClass('active');
      }
      $input.val(amount);

      e.preventDefault();
      e.stopPropagation();
    });

    // 减少数量
    $mask.on('click', '.num-minus', function(e) {
      var $input = $(this).next('.txt-num'),
        amount = parseInt($input.val());
      amount--;
      if (amount <= 1) {
        amount = 1;
        $(this).removeClass('active');
      }
      $input.val(amount);

      e.preventDefault();
      e.stopPropagation();
    });
  }

})(window, jQuery);
