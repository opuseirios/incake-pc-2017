(function(window, $, undefined) {

  $(function() {

    // 绑定蛋糕列表数据
    fnBindCakeList();
  });

  function fnBindCakeList() {
      var $oCakeList = $('#cakeList');
      var _data = {
          list: [
              {
                  link: '/detail.html',
                  imgUrl: '/assets/imgs/list/cake_01.jpg',
                  desc: '纯芝士与醇香奶油的梦幻组合',
                  name: {
                      cn: '小鸡派对',
                      en: 'Chick Party'
                  },
                  price: 189,
                  pound: 1.5
              }, {
                  link: '/detail.html',
                  imgUrl: '/assets/imgs/list/cake_02.jpg',
                  desc: '纯芝士与醇香奶油的梦幻组合',
                  name: {
                      cn: '百变魔方',
                      en: 'Rubik Cube'
                  },
                  price: 189,
                  pound: 1.5
              }, {
                  link: '/detail.html',
                  imgUrl: '/assets/imgs/list/cake_03.jpg',
                  desc: '纯芝士与醇香奶油的梦幻组合',
                  name: {
                      cn: '小鸡派对',
                      en: 'Chick Party'
                  },
                  price: 189,
                  pound: 1.5
              }, {
                  link: '/detail.html',
                  imgUrl: '/assets/imgs/list/cake_04.jpg',
                  desc: '纯芝士与醇香奶油的梦幻组合',
                  name: {
                      cn: '百变魔方',
                      en: 'Rubik Cube'
                  },
                  price: 189,
                  pound: 1.5
              }, {
                  link: '/detail.html',
                  imgUrl: '/assets/imgs/list/cake_01.jpg',
                  desc: '纯芝士与醇香奶油的梦幻组合',
                  name: {
                      cn: '小鸡派对',
                      en: 'Chick Party'
                  },
                  price: 189,
                  pound: 1.5
              }, {
                  link: '/detail.html',
                  imgUrl: '/assets/imgs/list/cake_02.jpg',
                  desc: '纯芝士与醇香奶油的梦幻组合',
                  name: {
                      cn: '百变魔方',
                      en: 'Rubik Cube'
                  },
                  price: 189,
                  pound: 1.5
              }, {
                  link: '/detail.html',
                  imgUrl: '/assets/imgs/list/cake_03.jpg',
                  desc: '纯芝士与醇香奶油的梦幻组合',
                  name: {
                      cn: '小鸡派对',
                      en: 'Chick Party'
                  },
                  price: 189,
                  pound: 1.5
              }, {
                  link: '/detail.html',
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
  }

})(window, jQuery);
