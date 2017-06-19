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
      $nav = $wrapper.find('.categories-nav'),
      $body = $wrapper.find('.categories-body'),
      $btnPrev = $body.find('.btn-prev'),
      $btnNext = $body.find('.btn-next'),
      $listParts = $body.find('.list-parts'),
      liW = 260,
      liML = 10,
      viewNum = 4,
      iLeft = 0,
      maxW = 0,
      len = 0;

    // 默认初始化时传入数字蜡烛数据
    handle4InitList('candles');

    /**
     * ==================================
     * Methods
     * ==================================
     */

    // switch nav
    $nav.on('click', 'li', function(e) {
      var target = $(this).attr('data-target');
      iLeft = 0;
      handle4InitList(target);
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active');
    });

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
      $listParts.animate({
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
      $listParts.animate({
        left: -iLeft + 'px'
      });
      if (len > viewNum && !$btnNext.hasClass('active')) {
        $btnNext.addClass('active');
      }
    });

    // 选中切换
    $listParts.on('click', '.img', function(e) {
      var $element = $(this).closest('li');
      $element.toggleClass('selected');
      e.preventDefault();
    });

    // 数量加减
    $listParts.on('click', '.num-add', function(e) {
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

    /**
     * ==================================
     * Handles
     * ==================================
     */

    // handle for init list
    function handle4InitList(target) {

      // 数字蜡烛模拟数据
      var candlesData = {
        list: [{
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_01.jpg',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '4只装',
          price: 189
        }, {
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_02.jpg',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '1.5磅',
          price: 189
        }, {
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_03.jpg',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '1.5磅',
          price: 189
        }, {
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_04.jpg',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '1.5磅',
          price: 189
        }, {
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_01.jpg',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '4只装',
          price: 189
        }, {
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_02.jpg',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '1.5磅',
          price: 189
        }, {
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_03.jpg',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '1.5磅',
          price: 189
        }, {
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_04.jpg',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '1.5磅',
          price: 189
        }]
      };

      // 餐盘模拟数据
      var platesData = {
        list: [{
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_04.jpg',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '4只装',
          price: 189
        }, {
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_03.jpg',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '1.5磅',
          price: 189
        }, {
          link: 'javascript:;',
          img: '/assets/imgs/list/cake_02.jpg',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          spec: '1.5磅',
          price: 189
        }]
      };

      // TODO 上线时需要通过AJAX从后台拉取
      switch (target) {
        case 'candles':
          _data = candlesData;
          break;
        case 'plates':
          _data = platesData;
          break;
        default:
          _data = candlesData;
          break;
      }

      // set list position left to 0
      $listParts.css({
        left: 0
      });

      len = _data.list.length;
      maxW = (len - viewNum) * (liW + liML);
      $listParts.width((liW + liML) * len);

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

      var _html = template('tplListParts', _data);
      $listParts.append(_html);
    }
  }

})(window, jQuery);
