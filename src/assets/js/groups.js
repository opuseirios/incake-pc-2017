(function(window, $, undefined) {

  $(function() {

    // 绑定蛋糕列表数据
    fnBindCakeList();

    // 初始化配件数据
    fnInitListParts();
  });

  function fnBindCakeList() {
    var $oCakeList = $('#cakeList');
    var _data = {
      list: [
        {
          link: 'javascript:;',
          imgUrl: '/assets/imgs/list/cake_01.jpg',
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '小鸡派对',
            en: 'Chick Party'
          },
          price: 189,
          pound: 1.5
        }, {
          link: 'javascript:;',
          imgUrl: '/assets/imgs/list/cake_02.jpg',
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '百变魔方',
            en: 'Rubik Cube'
          },
          price: 189,
          pound: 1.5
        }, {
          link: 'javascript:;',
          imgUrl: '/assets/imgs/list/cake_03.jpg',
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '小鸡派对',
            en: 'Chick Party'
          },
          price: 189,
          pound: 1.5
        }, {
          link: 'javascript:;',
          imgUrl: '/assets/imgs/list/cake_04.jpg',
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '百变魔方',
            en: 'Rubik Cube'
          },
          price: 189,
          pound: 1.5
        }, {
          link: 'javascript:;',
          imgUrl: '/assets/imgs/list/cake_01.jpg',
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '小鸡派对',
            en: 'Chick Party'
          },
          price: 189,
          pound: 1.5
        }, {
          link: 'javascript:;',
          imgUrl: '/assets/imgs/list/cake_02.jpg',
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '百变魔方',
            en: 'Rubik Cube'
          },
          price: 189,
          pound: 1.5
        }, {
          link: 'javascript:;',
          imgUrl: '/assets/imgs/list/cake_03.jpg',
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '小鸡派对',
            en: 'Chick Party'
          },
          price: 189,
          pound: 1.5
        }, {
          link: 'javascript:;',
          imgUrl: '/assets/imgs/list/cake_04.jpg',
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '百变魔方',
            en: 'Rubik Cube'
          },
          price: 189,
          pound: 1.5
        }
      ]
    };
    var _html = template('tplCakeList', _data);
    $oCakeList.html(_html);

    // 选中切换
    $oCakeList.on('click', '.img', function(e) {
      var $element = $(this).closest('li');
      $element.toggleClass('selected');
      e.preventDefault();
    });

    // 数量加减
    $oCakeList.on('click', '.num-add', function(e) {
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
