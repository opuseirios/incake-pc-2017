(function(window, $, undefined) {

  /**
	 * 对规格备注进行格式化
	 * @param  spec    要格式化的规格备注
	 * @param  format  进行格式化的规格备注字符串
	 * @return [description]
	 */
  template.helper('commentFormat', function(comment) {
    var str = '';
    if (!!comment && $.isArray(comment)) {
      str += comment.join('*||*');
    }
    return str;
  });

  // 价格格式化
  template.helper('priceFormat', function(price) {
    return parseInt(price, 10);
  });

  $(function() {

    // 图片懒加载
    var imgLazyLoad = new LazyLoad({elements_selector: ".lazy"});

    // 节流函数，减少更新频率
    var imgThrottle = _.throttle(updateViewport, 200);
    $(window).on('scroll', imgThrottle);

    function updateViewport() {
      imgLazyLoad.update();
    }

    // 公告
    fnInitNotice();

    // 轮播图
    fnInitMainSlider();

    // 绑定当季热卖数据
    fnBindBestChoice();

    // 瑞雪检测 --- 首页
    fnInitRxHome();
  });

  function fnBindBestChoice() {
    var $oBestChoice = $('#bestChoice');
    var _data = {
      list: [
        {
          link: 'detail.html',
          imgUrl: 'assets/imgs/list/cake_01.jpg',
          favor: false,
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '小鸡派对',
            en: 'Chick Party'
          },
          price: 189,
          pound: 1.5,
          specs: {
            sc: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ],
            regular: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ]
          }
        }, {
          link: 'detail.html',
          imgUrl: 'assets/imgs/list/cake_02.jpg',
          favor: true,
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '百变魔方',
            en: 'Rubik Cube'
          },
          price: 189,
          pound: 1.5,
          specs: {
            sc: [],
            regular: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ]
          }
        }, {
          link: 'detail.html',
          imgUrl: 'assets/imgs/list/cake_03.jpg',
          favor: false,
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '小鸡派对',
            en: 'Chick Party'
          },
          price: 189,
          pound: 1.5,
          specs: {
            sc: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ],
            regular: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ]
          }
        }, {
          link: 'detail.html',
          imgUrl: 'assets/imgs/list/cake_04.jpg',
          favor: false,
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '百变魔方',
            en: 'Rubik Cube'
          },
          price: 189,
          pound: 1.5,
          specs: {
            sc: [],
            regular: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ]
          }
        }, {
          link: 'detail.html',
          imgUrl: 'assets/imgs/list/cake_01.jpg',
          favor: false,
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '小鸡派对',
            en: 'Chick Party'
          },
          price: 189,
          pound: 1.5,
          specs: {
            sc: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ],
            regular: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ]
          }
        }, {
          link: 'detail.html',
          imgUrl: 'assets/imgs/list/cake_02.jpg',
          favor: false,
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '百变魔方',
            en: 'Rubik Cube'
          },
          price: 189,
          pound: 1.5,
          specs: {
            sc: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ],
            regular: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ]
          }
        }, {
          link: 'detail.html',
          imgUrl: 'assets/imgs/list/cake_03.jpg',
          favor: false,
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '小鸡派对',
            en: 'Chick Party'
          },
          price: 189,
          pound: 1.5,
          specs: {
            sc: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ],
            regular: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ]
          }
        }, {
          link: 'detail.html',
          imgUrl: 'assets/imgs/list/cake_04.jpg',
          favor: false,
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '百变魔方',
            en: 'Rubik Cube'
          },
          price: 189,
          pound: 1.5,
          specs: {
            sc: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ],
            regular: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ]
          }
        }, {
          link: 'detail.html',
          imgUrl: 'assets/imgs/list/cake_01.jpg',
          favor: false,
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '小鸡派对',
            en: 'Chick Party'
          },
          price: 189,
          pound: 1.5,
          specs: {
            sc: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ],
            regular: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ]
          }
        }, {
          link: 'detail.html',
          imgUrl: 'assets/imgs/list/cake_02.jpg',
          favor: false,
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '百变魔方',
            en: 'Rubik Cube'
          },
          price: 189,
          pound: 1.5,
          specs: {
            sc: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ],
            regular: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ]
          }
        }, {
          link: 'detail.html',
          imgUrl: 'assets/imgs/list/cake_03.jpg',
          favor: false,
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '小鸡派对',
            en: 'Chick Party'
          },
          price: 189,
          pound: 1.5,
          specs: {
            sc: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ],
            regular: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ]
          }
        }, {
          link: 'detail.html',
          imgUrl: 'assets/imgs/list/cake_04.jpg',
          favor: false,
          desc: '纯芝士与醇香奶油的梦幻组合',
          name: {
            cn: '百变魔方',
            en: 'Rubik Cube'
          },
          price: 189,
          pound: 1.5,
          specs: {
            sc: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ],
            regular: [
              {
                pound: 1.5,
                price: 189,
                comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
              }, {
                pound: 2.5,
                price: 279,
                comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
              }, {
                pound: 3.5,
                price: 429,
                comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
              }, {
                pound: 5.5,
                price: 709,
                comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
              }
            ]
          }
        }
      ]

    };
    var _html = template('tplBestChoice', _data);
    $oBestChoice.html(_html);

    handle4JoinBasket();
  }

  // 加入购物车处理函数
  function handle4JoinBasket() {
    var $cakelist = $('#bestChoice'),
      tl = new TimelineLite();

    // 加入购物车icon点击事件
    $cakelist.on('click', '.join-basket', function(e) {
      var specDom = $(this).closest('.text').prev('.img').find('.spec').eq(0);
      tl.clear();
      if ($(specDom).attr('data-expand') === 'true') {
        handle4HideSpec(specDom);
      } else {
        handle4ShowSpec(specDom);
      }
    });

    // 关闭规格遮罩
    $cakelist.on('click', '.spec-close', function(e) {
      var specDom = $(this).closest('.spec').eq(0);
      handle4HideSpec(specDom);
    });

    // 规格切换
    $cakelist.on('click', '.spec-switcher li', function(e) {
      var $li = $(this).closest('ul').find('li'),
        wrapperDom = $(this).closest('.spec-switcher').next('.spec-container').find('.spec-wrapper').eq(0),
        idx = $(this).index();

      // 如果只有一种规格，不进行规格切换
      if ($li.length < 2) {
        return false;
      }

      $(this).addClass('active').siblings().removeClass('active');

      // 当前规则中的磅数设置第一个尺寸为选中状态
      $(wrapperDom).find('.spec-box').eq(idx).find('.pound-item').eq(0).trigger('click');

      tl.clear();
      if (idx === 0) {
        tl.to(wrapperDom, 0.5, {left: 0});
      } else {
        tl.to(wrapperDom, 0.5, {left: '-100%'});
      }
    });

    // 磅数切换
    $cakelist.on('click', '.pound-item', function(e) {
      $(this).addClass('active').siblings().removeClass('active');

      var comments = $(this).attr('data-comment').split('*||*'),
        $items = $(this).closest('.pound-list').next('.comment-list').find('.comment-item'),
        $numbers = $(this).closest('.pound-list').siblings('.numbers'),
        price = parseInt($(this).attr('data-price'), 10);

      // 动态绑定备注内容
      $items.eq(0).html(comments[0]);
      $items.eq(1).html(comments[1]);
      $items.eq(2).html(comments[2]);

      // 把数量改成1
      $numbers.find('.num-minus').removeClass('active').end().find('.txt-num').val(1);

      // 同步价格
      $numbers.find('.txt-price').find('i').attr('data-price', price).html(price)
    });

    // 数量加减
    $cakelist.on('click', '.num-add', function(e) {
      var minusDom = $(this).siblings('.num-minus'),
        inputDom = $(this).siblings('.txt-num'),
        inputVal = parseInt(inputDom.val().trim(), 10),
        priceDom = $(this).siblings('.txt-price').find('i'),
        price = parseInt(priceDom.attr('data-price'), 10);

      inputVal++;
      inputDom.val(inputVal);
      priceDom.html(inputVal * price);
      if (inputVal >= 2) {
        minusDom.addClass('active');
      }
    }).on('click', '.num-minus', function(e) {
      var inputDom = $(this).siblings('.txt-num'),
        inputVal = parseInt(inputDom.val().trim(), 10),
        priceDom = $(this).siblings('.txt-price').find('i'),
        price = parseInt(priceDom.attr('data-price'), 10);

      inputVal--;
      if (inputVal <= 1) {
        inputVal = 1;
        $(this).removeClass('active');
      }
      priceDom.html(inputVal * price);
      inputDom.val(inputVal);
    });

    // 显示规格遮罩处理函数
    function handle4ShowSpec(specDom) {
      tl.clear();
      tl.to(specDom, 0.5, {
        bottom: '0',
        onComplete: function() {
          $(specDom).attr('data-expand', 'true');
        }
      });
    }

    // 隐藏规格遮罩处理函数
    function handle4HideSpec(specDom) {
      tl.clear();
      tl.to(specDom, 0.5, {
        bottom: '-100%',
        onComplete: function() {
          $(specDom).attr('data-expand', 'false');
        }
      });
    }
  }

  function fnInitMainSlider() {
    var $oHomePage = $('#homePage'),
      $oMainSlider = $oHomePage.find('.main-slider'),
      $oMainSwiper = $oMainSlider.find('.swiper-container'),
      _swiper = null,
      count = $oMainSlider.find('.swiper-slide').length;

    if (count > 1) {
      _swiper = $oMainSwiper.swiper({
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        speed: 1000
      });

      // slide prev
      $oMainSlider.on('click', '.prev-slide', function(e) {
        e.preventDefault();
        _swiper.swipePrev();
      });

      // slide next
      $oMainSlider.on('click', '.next-slide', function(e) {
        e.preventDefault();
        _swiper.swipeNext();
      });

      $oMainSlider.hover(function() {
        _swiper.stopAutoplay();
      }, function() {
        _swiper.startAutoplay();
      });
    } else {
      _swiper = $oMainSwiper.swiper({autoplay: false});
      $oMainSlider.find('.prev-slide').hide();
      $oMainSlider.find('.next-slide').hide();
    }
  }

  function fnInitNotice() {
    var $notice = $('#idxNotice'),
      $noticeMsg = $notice.find('.notice-content').find('p'),
      tl = new TimelineLite();

    $noticeMsg.liMarquee();

    $notice.on('click', '.notice-close', function(e) {
      tl.clear();
      tl.to($notice, 1, {
        opacity: 0,
        onComplete: function() {
          $notice.remove();
        }
      });
    });
  }

  function fnInitRxHome() {
    if(!rxStream) {
			return false;
		}

    var $header = $('#layoutHeader'),
      $portal = $header.find('.portal'),
      $homepage = $('#homePage');

    var o_username = '',
      o_mobile = '',
      b_device = 'pc';

    if($portal.find('.info').length > 0) {
      o_username = $portal.find('.info').html().trim();
      o_mobile = $portal.find('.info').html().trim();
    }

    // 访问首页
    (function() {
      // send to rxstream server
			rxStream.track('visit_homepage', {
				subject: {
					o_username: o_username,
					o_mobile: o_mobile
				},
				properties: {
					b_device: b_device
				}
			});

      // rxStream.track('session', {
			// 	subject: {
			// 		o_username: o_username,
			// 		o_mobile: o_mobile
			// 	},
			// 	properties: {
      //     b_position_ad: '',
      //     b_content_ad: '',
			// 		b_device: b_device
			// 	}
			// });
    })();

    // banner 广告
    $('#mainSlider').on('click', '.swiper-slide', function(e) {
      var slideLen = $(this).closest('.swiper-wrapper').find('.swiper-slide:not(.swiper-slide-duplicate)').length;
      var b_ad_title = '',
        b_ad_number = 0,
        b_ad_type = '';

      b_ad_number = $(this).index();
      if(b_ad_number > slideLen) {
        b_ad_number = b_ad_number - slideLen;
      }
      console.log(b_ad_number);
      b_ad_title = $(this).attr('data-adtitle').trim();
      b_ad_type = $(this).attr('data-adtype').trim();

      // send to rxstream server
			rxStream.track('ad_banner', {
				subject: {
					o_username: o_username,
					o_mobile: o_mobile
				},
				properties: {
          b_ad_title: b_ad_title,
          b_ad_number: b_ad_number,
          b_ad_type: b_ad_type,
					b_device: b_device
				}
			});
    });

    // 首页分类入口
    $homepage.find('.our-inspiration').on('click', '.item .img', function(e) {
      var b_menu = $(this).next('.text').html().split('|')[0].trim();

      // send to rxstream server
			rxStream.track('ad_category', {
				subject: {
					o_username: o_username,
					o_mobile: o_mobile
				},
				properties: {
					b_menu: b_menu,
					b_device: b_device
				}
			});
    });

    // 当季热卖
    $('#bestChoice').on('click', '.link', function(e) {
      var b_ad_number = 0,
        b_productname = '',
        b_product_size = '',
        b_productprice_d = '',
        b_productprice_m = 0;

      var $item = $(this).closest('li');

      b_ad_number = $item.index() + 1;
      b_productname = $item.find('.cn').html().trim();
      b_product_size = $item.find('.pound').html().trim().slice(1);
      b_productprice_d = $item.find('.price').html().trim().slice(1);
      b_productprice_m = parseFloat(b_productprice_d, 10).toFixed(2);

      // send to rxstream server
			rxStream.track('featured_products', {
				subject: {
					o_username: o_username,
					o_mobile: o_mobile
				},
				properties: {
					b_ad_number: b_ad_number,
          b_productname: b_productname,
          b_product_size: b_product_size,
          b_productprice_d: b_productprice_d,
          b_productprice_m: b_productprice_m,
					b_device: b_device
				}
			});
    });

    // 长条广告位
    $homepage.find('.ad-container').on('click', '.ad', function(e) {
      var b_ad_title = '';

      b_ad_title = $(this).attr('data-adtitle').trim();

      // send to rxstream server
			rxStream.track('long_banner', {
				subject: {
					o_username: o_username,
					o_mobile: o_mobile
				},
				properties: {
          b_ad_title: b_ad_title,
					b_device: b_device
				}
			});
    });

    // 底部广告位
    $homepage.find('.ads-container').on('click', 'a', function(e) {
      var b_ad_title = '',
        b_ad_number = 0,
        b_ad_type = '';

      b_ad_number = $(this).index() + 1;
      b_ad_title = $(this).attr('data-adtitle').trim();
      b_ad_type = $(this).attr('data-adtype').trim();

      // send to rxstream server
			rxStream.track('ad_bottom', {
				subject: {
					o_username: o_username,
					o_mobile: o_mobile
				},
				properties: {
          b_ad_title: b_ad_title,
          b_ad_number: b_ad_number,
          b_ad_type: b_ad_type,
					b_device: b_device
				}
			});
    });

    // 加入购物车
    $('#bestChoice').on('click', '.operate-join-basket', function(e) {
      var b_productname = '',
        b_product_size = '',
        b_productprice_d = '',
        b_productprice_m = 0,
        b_productCount_d = 0,
        b_productstyle = '';

      var $spec = $(this).closest('.spec'),
        $item = $spec.closest('li'),
        $switcher = $spec.find('.spec-switcher'),
        $wrapper = $spec.find('.spec-wrapper'),
        currType = $switcher.find('li').filter('.active').index(),
        $specbox = $wrapper.find('.spec-box').eq(currType),
        $pounditem = $specbox.find('.pound-item').filter('.active');

      b_productname = $item.find('.cn').html().trim();
      b_product_size = $pounditem.html().trim();
      b_productprice_d = $pounditem.attr('data-price').trim();
      b_productprice_m = parseFloat(b_productprice_d, 10).toFixed(2);
      b_productCount_d = parseInt($specbox.find('.numbers').find('.txt-num').val(), 10);
      b_productstyle = $switcher.find('li').filter('.active').html().trim();

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
    $('#bestChoice').on('click', '.operate-buy', function(e) {
      var b_productname = '',
        b_product_size = '',
        b_productprice_d = '',
        b_productprice_m = 0,
        b_productCount_d = 0,
        b_productstyle = '';

      var $spec = $(this).closest('.spec'),
        $item = $spec.closest('li'),
        $switcher = $spec.find('.spec-switcher'),
        $wrapper = $spec.find('.spec-wrapper'),
        currType = $switcher.find('li').filter('.active').index(),
        $specbox = $wrapper.find('.spec-box').eq(currType),
        $pounditem = $specbox.find('.pound-item').filter('.active');

      b_productname = $item.find('.cn').html().trim();
      b_product_size = $pounditem.html().trim();
      b_productprice_d = $pounditem.attr('data-price').trim();
      b_productprice_m = parseFloat(b_productprice_d, 10).toFixed(2);
      b_productCount_d = parseInt($specbox.find('.numbers').find('.txt-num').val(), 10);
      b_productstyle = $switcher.find('li').filter('.active').html().trim();

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

    // 喜欢
    $('#bestChoice').on('click', '.favor', function(e) {
      var b_productname = '',
        b_linkornot = '';

      var $item = $(this).closest('li');

      b_productname = $item.find('.cn').html().trim();
      b_linkornot = $(this).hasClass('selected') ? '取消喜欢' : '喜欢';

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

      e.preventDefault();
      e.stopPropagation();
    });

    // 继续购物
    $('#maskPopup').on('click', '.btn-cancel', function(e) {
      var isKeepbuy = $(this).html().trim() === '再逛逛' ? true : false;
      if(!isKeepbuy) {
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
})(window, jQuery);
