(function(window, document, $, undefined) {

  $(function() {

    // 顺序执行异步代码
    async.waterfall([
      function(next) {
        fnInitSurprise();
        next(null);
      },
      function(next) {
        fnInitRegular();
        next(null);
      },
      function(next) {
        fnInitPart();
        next(null);
      },
      function(next) {
        fnInitAddress();
        next(null);
      },
      function(next) {
        fnInitCoupon();
        next(null);
      },
      function(next) {
        fnInitMoreInfo();
        next(null);
      }
    ], function(err, result) {
      fnInitGlobalOperate();
      fnCommodityInfo();
      fnAddressInfo();
      fnCakeCardMethod();
      fnIncakeCardMethod();
      fnPaymentMethod();
      fnCouponInfo();
      fnMoreInfo();
      fnRemarksInfo();
    });

    // 瑞雪检测 --- 订单提交
    fnInitRxOrderSubmit();
  });

  // init surprise data
  function fnInitSurprise() {
    var $page = $('#settlementPage'),
      $listContainer = $page.find('.list-container');

    var _data = {
      list: [
        {
          link: '/detail.html',
          thumbImg: '/assets/imgs/basket/thumb_cake.jpg',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          price: 189,
          spec: '1.5磅',
          attr: ['附送餐具5套'],
          amount: 1,
          privilege: {
            name: '夏日甜心',
            price: '30'
          },
          subtotal: '219',
          discountInfo: '<a href="javascript:;" class="btn-option btn-act">母亲节活动</a>',
          surprise: {
            btns: '<a href="javascript:;" class="btn-option btn-surprise">惊喜</a>',
            sTarget: '朋友',
            sScene: '生日/祝寿',
            remark: '非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容',
            sPhoto: '/assets/imgs/basket/img_preview_thumb.jpg'
          }
        }, {
          link: '/detail.html',
          thumbImg: '/assets/imgs/basket/thumb_cake.jpg',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          price: 189,
          spec: '1.5磅',
          attr: ['附送餐具5套'],
          amount: 1,
          privilege: {
            name: '夏日甜心',
            price: '30'
          },
          subtotal: '219',
          discountInfo: '',
          surprise: {
            btns: '<a href="javascript:;" class="btn-option btn-surprise">惊喜</a>',
            sTarget: '朋友',
            sScene: '生日/祝寿',
            remark: '非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容非真正内容',
            sPhoto: '/assets/imgs/basket/img_preview_thumb.jpg'
          }
        }
      ]
    };

    var _html = template('tplSurpriseList', _data);
    $listContainer.prepend(_html);

    // init surprise operate
    var $surprise = $listContainer.find('.surprise-list');
    fnInitListOperate($surprise);
  }

  // init surprise data
  function fnInitRegular() {
    var $page = $('#settlementPage'),
      $listContainer = $page.find('.list-container');

    var _data = {
      list: [
        {
          link: '/detail.html',
          thumbImg: '/assets/imgs/basket/thumb_cake.jpg',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          price: 189,
          spec: '1.5磅',
          attr: ['附送餐具5套'],
          amount: 1,
          privilege: {
            name: '夏日甜心',
            price: '30'
          },
          subtotal: '219',
          discountInfo: '<a href="javascript:;" class="btn-option btn-act">母亲节活动</a>',
          imgCake: ''
        }, {
          link: '/detail.html',
          thumbImg: '/assets/imgs/basket/thumb_image_cake.jpg',
          name: {
            cn: '画影蛋糕',
            en: 'Image Cake'
          },
          price: 189,
          spec: '1.5磅',
          attr: ['附送餐具5套'],
          amount: 1,
          privilege: {
            name: '夏日甜心',
            price: '30'
          },
          subtotal: '219',
          discountInfo: '',
          imgCake: '<a href="javascript:;" class="btn-option btn-imgCake">画影</a>'
        }
      ]
    };

    var _html = template('tplRegularList', _data);
    if ($listContainer.children('.surprise-list').length > 0) {
      $(_html).insertAfter($listContainer.children('.surprise-list'));
    } else {
      $listContainer.prepend(_html);
    }

    // init regular operate
    var $regular = $page.find('.regular-list');
    fnInitListOperate($regular);
  }

  // init part data
  function fnInitPart() {
    var $page = $('#settlementPage'),
      $listContainer = $page.find('.list-container');

    var _data = {
      list: [
        {
          link: '/detail.html',
          thumbImg: '/assets/imgs/basket/thumb_cake.jpg',
          name: {
            cn: '芒果拿破仑',
            en: 'Mango Napoleon'
          },
          price: 189,
          spec: '1.5磅',
          attr: ['附送餐具5套'],
          amount: 1,
          privilege: {
            name: '夏日甜心',
            price: '30'
          },
          subtotal: '219',
          discountInfo: '',
          surprise: ''
        }
      ]
    };

    var _html = template('tplPartList', _data);
    if ($listContainer.children('.surprise-list').length > 0) {
      if ($listContainer.children('.regular-list').length > 0) {
        $(_html).insertAfter($listContainer.children('.regular-list'));
      } else {
        $(_html).insertAfter($listContainer.children('.surprise-list'));
      }
    } else {
      $listContainer.prepend(_html);
    }
  }

  // func of init list-container operate
  function fnInitListOperate(_list) {

    // maxlength setting about message
    _list.find('.txt-popups').maxlength({max: 50, feedbackText: '还可输入{r}字'});

    // view activity
    _list.on('click', '.btn-act', function(e) {
      // stop propagation
      event.stopPropagation();

      var isActive = $(this).hasClass('active');
      if (!isActive) {
        // close other popup
        $('.list-container').find('.btn-option').removeClass('active');
        $('.list-container').find('.popups').slideUp();
        // view current
        $(this).addClass('active');
        $(this).closest('.c-activity').find('.popup-act').slideDown();
      } else {
        $(this).removeClass('active');
        $(this).closest('.c-activity').find('.popup-act').slideUp();
      }
    });

    // view surprise
    _list.on('click', '.btn-surprise', function(e) {
      // stop propagation
      event.stopPropagation();

      var isActive = $(this).hasClass('active');
      if (!isActive) {
        // close other popup
        $('.list-container').find('.btn-option').removeClass('active');
        $('.list-container').find('.popups').slideUp();
        // view current
        $(this).addClass('active');
        $(this).closest('.c-operate').find('.popup-surprise').slideDown();
      } else {
        $(this).removeClass('active');
        $(this).closest('.c-operate').find('.popup-surprise').slideUp();
      }
    });

    // close popup of surprise
    _list.on('click', '.btn-sure', function(e) {
      $(this).closest('.c-operate').find('.btn-surprise').removeClass('active');
      $(this).closest('.popup-surprise').slideUp();
    });

    // preview photo
    _list.on('click', '.btn-preview', function(e) {
      var $mask = $('#mask-list'),
        $popPreview = $mask.find('.popup-preview'),
        $imgWrapper = $popPreview.find('.img-wrapper'),
        $btnClose = $popPreview.find('.btn-close');

      // bind preview photo src
      //var $photo = $popPreview.find('img');
      //$photo.attr('src',$(this).find('img').attr('src'));

      $imgWrapper.removeClass('imgCake');
      $mask.fadeIn(200, function() {
        $popPreview.fadeIn();
      });

      $btnClose.on('click', function(e) {
        $popPreview.fadeOut(function() {
          $mask.hide();
        });
      });
    });

    //  view image cake
    _list.on('click', '.btn-imgCake', function(e) {
      var $mask = $('#mask-list'),
        $popPreview = $mask.find('.popup-preview'),
        $imgWrapper = $popPreview.find('.img-wrapper'),
        $btnClose = $popPreview.find('.btn-close');

      // close other popup
      $('.list-container').find('.btn-option').removeClass('active');
      $('.list-container').find('.popups').slideUp();
      // view current
      $(this).addClass('active');
      // bind preview photo src
      //var $photo = $popPreview.find('img');
      //$photo.attr('src',$(this).find('img').attr('src'));

      $imgWrapper.addClass('imgCake');
      $mask.fadeIn(200, function() {
        $popPreview.fadeIn();
      });

      $btnClose.on('click', function(e) {
        // view current
        $('.btn-imgCake').removeClass('active');
        $popPreview.fadeOut();
        $mask.fadeOut();
      });
    });

  }

  // init address data
  function fnInitAddress() {
    var $page = $('#settlementPage'),
      $addressInfo = $page.find('.addressInfo'),
      $listContainer = $addressInfo.find('.address-container');

    var _data = {
      list: [
        {
          isDefault: 'true',
          iName: '张三',
          iProvince: '上海',
          iCity: '闸北区',
          iArea: '城区',
          iStreet: '广中西路777弄99号江裕大厦506室',
          iPhone: '13711111111',
          iTel: ''
        }, {
          isDefault: 'false',
          iName: '李四',
          iProvince: '上海',
          iCity: '虹口区',
          iArea: '城区',
          iStreet: '中山北路888号虹口足球场88号',
          iPhone: '13788888888',
          iTel: '0532-2869888'
        }, {
          isDefault: 'false',
          iName: '王五',
          iProvince: '北京',
          iCity: '朝阳区',
          iArea: '城区',
          iStreet: '朝阳路666号朝阳大厦666室',
          iPhone: '13766666666',
          iTel: ''
        }, {
          isDefault: 'false',
          iName: '赵六',
          iProvince: '吉林省',
          iCity: '六里屯区',
          iArea: '城区',
          iStreet: '六里屯路222号',
          iPhone: '13722222222',
          iTel: '2222-2222222'
        }
      ]
    };

    var _html = template('tplAddressList', _data);
    $listContainer.prepend(_html);

  }

  // init couponInfo data
  function fnInitCoupon() {
    var $page = $('#settlementPage'),
      $couponInfoBox = $page.find('.couponInfo'),
      $couponInfo = $couponInfoBox.find('.coupon-infos'),
      $cashInfo = $couponInfoBox.find('.cash-info');

    // coupon list info
    var _data = {
      list: [
        {
          iName: '蛋糕30元优惠券'
        }, {
          iName: '蛋糕50元优惠券'
        }, {
          iName: '蛋糕80元优惠券'
        }, {
          iName: '蛋糕50元优惠券'
        }, {
          iName: '蛋糕50元优惠券'
        }, {
          iName: '蛋糕80元优惠券'
        }, {
          iName: '蛋糕30元优惠券'
        }
      ]
    };

    var _html = template('tplCouponList', _data);
    $couponInfo.prepend(_html);

    // cash list info
    var _data2 = {
      list: [
        {
          iPrice: '10'
        }, {
          iPrice: '20'
        }, {
          iPrice: '30'
        }, {
          iPrice: '50'
        }, {
          iPrice: '80'
        }, {
          iPrice: '100'
        }, {
          iPrice: '100'
        }, {
          iPrice: '100'
        }
      ]
    };
    var _html2 = template('tplCashList', _data2);
    $cashInfo.prepend(_html2);

  }

  // init moreInfo data
  function fnInitMoreInfo() {
    var $page = $('#settlementPage'),
      $moreInfo = $page.find('.moreInfo'),
      $listContainer = $moreInfo.find('.moreInfo-container');

    var _data = {
      list: [
        {
          isDefault: 'true',
          iType: '公司',
          iName: '上海印克电子商务股份有限公司',
          iContent: '蛋糕',
          iCode: '1234567890'

        }, {
          isDefault: 'false',
          iType: '公司',
          iName: '上海印克电子商务股份有限公司福州分公司',
          iContent: '食品',
          iCode: '0000000000'
        }, {
          isDefault: 'false',
          iType: '个人',
          iName: '',
          iContent: '蛋糕'
        }, {
          isDefault: 'false',
          iType: '公司',
          iName: '上海印克电子商务股份有限公司青岛分公司',
          iContent: '食品',
          iCode: '12222222890'
        }
      ]
    };

    var _html = template('tplMoreInfoList', _data);
    $listContainer.prepend(_html);

  }

  // func of init global operate
  function fnInitGlobalOperate() {
    var $listCont = $('.list-container'),
      $btnOption = $listCont.find('.btn-option'),
      $popups = $listCont.find('.popups'),
      $addressInfo = $('.addressInfo'),
      $deliveryTime = $addressInfo.find('.delivery-time'),
      $popupTime = $deliveryTime.find('.popups'),
      $moreInfo = $('.moreInfo'),
      $iLabel = $moreInfo.find('.i-label'),
      $popupsOther = $moreInfo.find('.popups');

    $(document).click(function(e) {
      var isPopups = $(e.target).closest('div').hasClass('popups');
      if (!isPopups) {
        // close other popup
        $btnOption.removeClass('active');
        $popups.slideUp();
        if ($deliveryTime.hasClass('b-time')) {
          $deliveryTime.removeClass('b-time');
          $popupTime.slideUp();
        }
        if ($iLabel.hasClass('active')) {
          $iLabel.removeClass('active');
          $popupsOther.slideUp();

        }
      }

    });

    // init select
    $('.select2').select2();

    // datepicker options
    var pickerOptions = {
      addDays: 3, // 提前下单所需天数
      unSupportDays: [0, 2, 3, 4, 5] // 不支持下单的日期（每周中的日期） 0:周日，1:周一，2:周二，3:周三，4:周四，5:周五，6:周六
    };
    // init datePicker
    fnInitDatePicker(pickerOptions);

  }

  // init datePicker
  function fnInitDatePicker(options) {
    var picker = new Pikaday({
      i18n: {
        previousMonth: '上一月',
        nextMonth: '下一月',
        months: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ],
        weekdays: [
          '周日',
          '周一',
          '周二',
          '周三',
          '周四',
          '周五',
          '周六'
        ],
        weekdaysShort: [
          '日',
          '一',
          '二',
          '三',
          '四',
          '五',
          '六'
        ]
      },
      field: document.getElementById('datepicker'),
      firstDay: 1,
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2020, 12, 31),
      yearRange: [
        1900, 2020
      ],
      disableDayFn: function(date) {
        // 当前日期加订单需要提前预定的天数
        var days2add = options.addDays == undefined
          ? 1
          : options.addDays + 1;

        var now = moment().add(days2add, 'days');
        var nextDate = new Date(now.year(), now.month(), now.date()).getTime();

        // 如果配送时间小于nextDate 禁用选择
        if (date.getTime() < nextDate) {
          return true; // 返回值为true表示禁用选择
        }

        // 过滤不支持的一周中的日期
        if (options.unSupportDays != undefined) {
          var dayOfWeek = date.getDay();
          for (var i = 0, len = options.unSupportDays.length; i < len; i++) {
            if (options.unSupportDays[i] == dayOfWeek) {
              return true;
            }
          }
        }
      },
      onSelect: function() {
        var today = new Date(),
          _today = today.getTime(),
          date = new Date(this),
          _date = date.getTime(),
          trueDate = '';

        if (_today - _date >= 0) {
          trueDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 1);
        } else {
          trueDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        }
        $('#datepicker').val(trueDate);
      }
    });
  }

  // func of fnCommodityInfo operate
  function fnCommodityInfo() {
    var $page = $('#settlementPage'),
      $commodityInfo = $page.find('.commodityInfo'),
      $listContainer = $commodityInfo.find('.list-container'),
      $item = $listContainer.find('.item'),
      $tips = $commodityInfo.find('.tips'),
      $btns = $commodityInfo.find('.btns'),
      $btnFold = $btns.find('.btn-fold'),
      $count = $tips.find('#count');

    // bind commodity count
    $count.text($item.length);

    // set button of fold status
    if ($item.length > 0) {
      $tips.hide();
      $btns.show();
    }
    // button of fold operate
    $btnFold.on('click', function() {
      var isActive = $(this).hasClass('active');
      if (!isActive) {
        $listContainer.slideUp();
        $tips.addClass('line-none').show();
        $(this).addClass('active').text('查看全部');
      } else {
        $listContainer.slideDown();
        $tips.hide();
        $(this).removeClass('active').text('收起');
      }

    });
  }

  // func of fnAddressInfo operate
  function fnAddressInfo() {
    var $page = $('#settlementPage'),
      $addrInfo = $page.find('.addressInfo'),
      $listCont = $addrInfo.find('.address-container'),
      $addrLock = $listCont.find('.address-lock'),
      $lockInfo = $addrLock.find('.lock-info'),
      $addrList = $listCont.find('.address-list'),
      $btnLock = $listCont.find('.btn-lock'),
      $btnEdit = $listCont.find('.btn-edit'),
      $btnAdd = $addrLock.find('.btn-add'),
      $btns = $addrInfo.find('.btns'),
      $btnFold = $btns.find('.btn-fold'),
      $deliveryTime = $addrInfo.find('.delivery-time'),
      $btnDate = $deliveryTime.find('.btn-date'),
      $btnTime = $deliveryTime.find('.btn-time'),
      $popupTime = $deliveryTime.find('.popup-time'),
      $popupItem = $popupTime.find('li'),
      $mask = $('#mask-list'),
      $popAddr = $mask.find('.popup-address'),
      $btnCancel = $popAddr.find('#btn-cancel'),
      $btnConfirm = $popAddr.find('#btn-confirm'),
      $option = $popAddr.find('#option');

    // set button of fold status
    if ($addrList.length > 0) {
      $addrLock.addClass('line-none');
      $btns.show();
    }

    // button of fold operate
    $btnFold.on('click', function() {
      var isActive = $(this).hasClass('active');
      if (!isActive) {
        $addrList.slideUp(function() {
          $addrLock.addClass('line-none');
        });
        $(this).addClass('active').text('更多');
      } else {
        $addrLock.removeClass('line-none');
        $addrList.slideDown();
        $(this).removeClass('active').text('收起');
      }

    });

    // item of address list operate
    $listCont.on('click', '.address-list li', function() {
      var lockInfo = $lockInfo.html(),
        selectedInfo = $(this).find('.item-info').html(),
        isDefault = $(this).find('span').hasClass('tip-default');

      $(this).remove();
      $lockInfo.html(selectedInfo);
      $addrList.append('<li><p class="item-info">' + lockInfo + '</p></li>');
      if (!isDefault) {
        $btnLock.show();
      } else {
        $btnLock.hide();
      }

    });

    // button of add operate
    $btnAdd.on('click', function() {
      $mask.fadeIn(200, function() {
        $popAddr.fadeIn();
        $option.val('add');
      });
    });

    // button of edit operate
    // $btnEdit.on('click', function(){
    $addrLock.on('click', '.btn-edit', function(e) {
      $mask.fadeIn(200, function() {
        //$mask.find('.sel-city').select2();
        //$mask.find('.sel-area').select2();
        //$mask.find('.sel-ext').select2();
        $popAddr.fadeIn();
        $option.val('edit');
      });
    });

    // button of Lock operate
    $btnLock.on('click', function() {
      $lockInfo.append('<span class="tip-default">默认地址</span>');
      $addrList.find('.tip-default').remove();
      $btnLock.hide();
    });

    // button of cancel operate
    $btnCancel.on('click', function() {
      $popAddr.fadeOut();
      $mask.fadeOut();
    });

    // button of confirm operate
    $btnConfirm.on('click', function() {
      $popAddr.fadeOut();
      $mask.fadeOut();
      alert('perform action：' + $option.val());
    });

    // button of date operate
    $btnDate.on('click', function() {
      $deliveryTime.removeClass('b-time');
      $popupTime.slideUp();
    });

    // button of time operate
    $btnTime.on('click', function(e) {
      // stop propagation
      e.stopPropagation();

      var isActive = $deliveryTime.hasClass('b-time');
      if (!isActive) {
        $deliveryTime.addClass('b-time');
        $popupTime.slideDown();
      } else {
        $deliveryTime.removeClass('b-time');
        $popupTime.slideUp();
      }

    });

    // popup-time item operate
    $popupItem.on('click', function() {
      $popupItem.removeClass('active');
      $(this).addClass('active');
      $btnTime.val($(this).html());
      $deliveryTime.removeClass('b-time');
      $popupTime.slideUp();
    });

  }

  // func of cakeCardMethod operate
  function fnCakeCardMethod() {
    var $page = $('#settlementPage'),
      $cakeCardInfo = $page.find('.cakeCardInfo'),
      $cakeCardList = $cakeCardInfo.find('.cakeCard-list'),
      $listCont = $cakeCardInfo.find('.cakeCard-content'),
      $cardType = $listCont.find('.card-type'),
      $cardNumber = $cardType.find('.card-number'),
      $cardPwd = $cardType.find('.card-pwd'),
      $btnExchange = $cardType.find('.btn-exchange'),
      $mask = $('#mask-list'),
      $popCakeCard = $mask.find('.popup-cakeCard'),
      $btnSure = $popCakeCard.find('.btn-sure');

    // botton of exchange operate
    $btnExchange.on('click', function() {
      if ($cardNumber.val() == "") {
        $cardNumber.focus();
      } else if ($cardPwd.val() == '') {
        $cardPwd.focus();
      } else {
        var cardState = false;
        if (!cardState) {
          $mask.fadeIn(200, function() {
            $popCakeCard.fadeIn();
          });
        } else {
          var _html = '<li><span>' + $cardNumber.val() + '</span><a href="javascript:;" class="btn-remove">×</a></li>';
          $cakeCardList.append(_html);
        }
      }
    });

    // cakeCard-list item operate
    $cakeCardList.on('click', '.btn-remove', function() {
      $(this).closest('li').remove();
    });

    $btnSure.on('click', function() {
      $popCakeCard.fadeOut();
      $mask.fadeOut();
    });
  }

  // func of incakeCardMethod operate
  function fnIncakeCardMethod() {
    var $page = $('#settlementPage'),
      $incakeCardInfo = $page.find('.incakeCardInfo'),
      $incakeCardList = $incakeCardInfo.find('.incakeCard-list'),
      $listCont = $incakeCardInfo.find('.incakeCard-content'),
      $cardType = $listCont.find('.card-type'),
      $cardNumber = $cardType.find('.card-number'),
      $cardPwd = $cardType.find('.card-pwd'),
      $btnExchange = $cardType.find('.btn-exchange'),
      $mask = $('#mask-list'),
      $popIncakeCard = $mask.find('.popup-incakeCard'),
      $btnSure = $popIncakeCard.find('.btn-sure');

    // botton of exchange operate
    $btnExchange.on('click', function() {
      if ($cardNumber.val() == "") {
        $cardNumber.focus();
      } else if ($cardPwd.val() == '') {
        $cardPwd.focus();
      } else {
        var cardState = false;
        if (!cardState) {
          $mask.fadeIn(200, function() {
            $popIncakeCard.fadeIn();
          });
        } else {
          var _html = '<li><span>' + $cardNumber.val() + '</span><a href="javascript:;" class="btn-remove"></a></li>';
          $incakeCardList.append(_html);
        }
      }
    });

    // cakeCard-list item operate
    $incakeCardList.on('click', '.btn-remove', function() {
      $(this).closest('li').remove();
    });

    $btnSure.on('click', function() {
      $popIncakeCard.fadeOut();
      $mask.fadeOut();
    });
  }

  // func of paymentMethod operate
  function fnPaymentMethod() {
    var $page = $('#settlementPage'),
      $paymentMethod = $page.find('.paymentMethod'),
      $paymentList = $paymentMethod.find('.payment-list'),
      $listItem = $paymentList.find('a'),
      $btnOnline = $paymentList.find('.btn-online'),
      $btnCOD = $paymentList.find('.btn-COD'),
      $btnCard = $paymentList.find('.btn-card'),
      $listCont = $paymentMethod.find('.payment-content'),
      $onLineType = $listCont.find('.online-type'),
      $onLineItem = $onLineType.find('a'),
      $cardType = $listCont.find('.card-type'),
      $cardNumber = $cardType.find('.card-number'),
      $cardPwd = $cardType.find('.card-pwd'),
      $btnExchange = $cardType.find('.btn-exchange');

    // button of online operate
    $btnOnline.on('click', function() {
      var isActive = $(this).hasClass('active');
      if (!isActive) {
        $listItem.removeClass('active');
        $(this).addClass('active');
        $cardType.slideUp();
        $onLineItem.removeClass('active').eq(0).addClass('active');
        $onLineType.slideDown();
      }
    });

    // button of COD operate
    $btnCOD.on('click', function() {
      var isActive = $(this).hasClass('active');
      if (!isActive) {
        $listItem.removeClass('active');
        $(this).addClass('active');
        $onLineType.slideUp();
        $cardType.slideUp();
      }
    });

    // button of card operate
    $btnCard.on('click', function() {
      var isActive = $(this).hasClass('active');
      if (!isActive) {
        $listItem.removeClass('active');
        $(this).addClass('active');
        $onLineType.slideUp();
        $cardType.slideDown();
        $cardNumber.val('');
        $cardPwd.val('');
        $cardNumber.focus();
      }
    });

    // online-type item operate
    $onLineItem.on('click', function() {
      $onLineItem.removeClass('active');
      $(this).addClass('active');
    });

  }

  // func of couponInfo operate
  function fnCouponInfo() {
    var $page = $('#settlementPage'),
      $couponInfo = $page.find('.couponInfo'),
      $couponTitle = $couponInfo.find('.coupon-title'),
      $titleItem = $couponTitle.find('a'),
      $btnCoupon = $couponTitle.find('.btn-coupon'),
      $btnCode = $couponTitle.find('.btn-code'),
      $btnCash = $couponTitle.find('.btn-cash'),
      $listCont = $couponInfo.find('.coupon-content'),
      $couponList = $listCont.find('.coupon-list'),
      $couponItem = $couponList.find('li'),
      $codeInfo = $listCont.find('.code-info'),
      $codeNumber = $codeInfo.find('.code-number'),
      $btnReg = $codeInfo.find('.btn-reg'),
      $cashInfo = $listCont.find('.cash-info'),
      $cashlist = $cashInfo.find('.cash-list'),
      $cashItem = $cashlist.find('li'),
      $btns = $couponInfo.find('.btns'),
      $btnFold = $btns.find('.btn-fold');

    // set button of fold status
    if ($couponItem.length > 4) {
      $couponInfo.addClass('line-none');
    }

    // button of online operate
    $titleItem.on('click', function() {
      var isActive = $(this).hasClass('active')
      index = $(this).index();
      if (!isActive) {
        $titleItem.removeClass('active');
        $couponTitle.find('i').animate({
          left: *200 + 'px'
        }, 500);
        $(this).addClass('active');
        $listCont.find('div.active').slideUp().removeClass('active');
        $listCont.find('div').eq(index).slideDown().addClass('active');
        if (index == 0 || index == 2) {
          $listCont.find('div').eq(index).find('li').removeClass('active');
          $couponInfo.addClass('line-none');
          $listCont.find('div.active').find('li.hide').hide();
          $btnFold.addClass('active').text('更多');
        } else {
          $couponInfo.removeClass('line-none');
          $btnFold.removeClass('active').text('收起');
          $codeNumber.val('');
          $codeNumber.focus();
        }
      }
    });

    // coupon-list item operate
    $couponItem.on('click', function() {
      $couponItem.removeClass('active');
      $(this).addClass('active');
    });

    // cash-list item operate
    $cashItem.on('click', function() {
      $(this).addClass('active');
    });

    $btnFold.on('click', function() {
      var isActive = $(this).hasClass('active'),
        $listBox = $listCont.find('div');

      if (!isActive) {
        $listCont.find('div.active').find('li.hide').slideUp();
        $(this).addClass('active').text('更多');
      } else {
        $listCont.find('div.active').find('li.hide').slideDown();
        $(this).removeClass('active').text('收起');
      }

    });
  }

  // func of MoreInfo operate
  function fnMoreInfo() {
    var $page = $('#settlementPage'),
      $moreInfo = $page.find('.moreInfo'),
      $listCont = $moreInfo.find('.moreInfo-container'),
      $invoiceLock = $listCont.find('.invoice-lock'),
      $lockInfo = $invoiceLock.find('.lock-info'),
      $invoiceList = $listCont.find('.invoice-list'),
      $btnLock = $listCont.find('.btn-lock'),
      $btnEdit = $listCont.find('.btn-edit'),
      $btnAdd = $invoiceLock.find('.btn-add'),
      $btns = $moreInfo.find('.btns'),
      $btnFold = $btns.find('.btn-fold'),
      $infoOther = $moreInfo.find('.info-other'),
      $iLabel = $infoOther.find('.i-label'),
      $btnBirth = $infoOther.find('.btn-birth'),
      $btnCard = $infoOther.find('.btn-card'),
      $popupBirth = $infoOther.find('.popup-birth'),
      $popupBirthItem = $popupBirth.find('li'),
      $popupCard = $infoOther.find('.popup-card'),
      $popupCardItem = $popupCard.find('li'),
      $mask = $('#mask-list'),
      $popInvoice = $mask.find('.popup-invoice'),
      $popTitle = $popInvoice.find('.popup-title'),
      $companyName = $popInvoice.find('.company-name'),
      $companyCode = $popInvoice.find('.company-code'),
      $btnCancel = $popInvoice.find('.btn-cancel'),
      $btnConfirm = $popInvoice.find('.btn-confirm'),
      $option = $popInvoice.find('.option');

    // set button of fold status
    if ($invoiceList.length > 0) {
      $invoiceLock.addClass('line-none');
      $btns.show();
    }

    // button of fold operate
    $btnFold.on('click', function() {
      var isActive = $(this).hasClass('active');
      if (!isActive) {
        $invoiceList.slideUp(function() {
          $invoiceLock.addClass('line-none');
        });
        $(this).addClass('active').text('更多');
      } else {
        $invoiceLock.removeClass('line-none');
        $invoiceList.slideDown();
        $(this).removeClass('active').text('收起');
      }

    });

    // item of address list operate
    $listCont.on('click', '.invoice-list li', function() {
      var lockInfo = $lockInfo.html(),
        selectedInfo = $(this).find('.item-info').html(),
        isDefault = $(this).find('span').hasClass('tip-default');

      $(this).remove();
      $lockInfo.html(selectedInfo);
      $invoiceList.append('<li><p class="item-info">' + lockInfo + '</p></li>');
      if (!isDefault) {
        $btnLock.show();
      } else {
        $btnLock.hide();
      }

    });

    // button of add operate
    $btnAdd.on('click', function() {
      // 格式化弹窗内容
      fnClearInvoice();
      $popTitle.html('添加发票信息');
      $companyName.hide();
      $companyCode.hide();
      $mask.fadeIn(200, function() {
        $popInvoice.fadeIn();
        $option.val('add');
      });
    });

    // button of edit operate
    $btnEdit.on('click', function() {
      // 格式化弹窗内容
      fnClearInvoice();

      var $item = $(this).closest('.invoice-lock'),
        type = $item.find('.i-type').text(),
        content = $item.find('.i-content').text(),
        $select2Type = $('#invoice_type').select2(),
        $select2Content = $('#invoice_content').select2();

      $popTitle.html('修改发票信息');

      $select2Type.val(type).trigger('change');
      $select2Content.val(content).trigger('change');

      if (type == '个人') {
        $companyName.hide();
        $companyCode.hide();
      } else {
        var name = $item.find('.i-name').text();
        var code = $item.find('.i-code').text();
        $('.invoice-name').val(name);
        $('.invoice-code').val(code);
        $companyName.show();
        $companyCode.show();
      }

      $mask.fadeIn(200, function() {
        $popInvoice.fadeIn();
        $option.val('edit');
      });
    });

    // button of Lock operate
    $btnLock.on('click', function() {
      $lockInfo.append('<span class="tip-default">默认发票</span>');
      $invoiceList.find('.tip-default').remove();
      $btnLock.hide();
    });

    // button of cancel operate
    $btnCancel.on('click', function() {
      $popInvoice.fadeOut();
      $mask.fadeOut();
    });

    // button of confirm operate
    $btnConfirm.on('click', function() {
      $popInvoice.fadeOut();
      $mask.fadeOut();
      alert('perform action：' + $option.val());
    });

    // 切换发票抬头
    $('#invoice_type').on('select2:select', function(e) {
      if (e.params.data.text == '公司') {
        $companyName.show();
        $companyCode.show();
      } else {
        $companyName.hide();
        $companyCode.hide();
      }
    });

    // button of birth operate
    $btnBirth.on('click', function() {
      // stop propagation
      event.stopPropagation();

      if ($iLabel.eq(1).hasClass('active')) {
        $iLabel.eq(1).removeClass('active');
        $popupCard.slideUp();
      }

      var isActive = $iLabel.eq(0).hasClass('active');
      if (!isActive) {
        $iLabel.eq(0).addClass('active');
        $popupBirth.slideDown();
      } else {
        $iLabel.eq(0).removeClass('active');
        $popupBirth.slideUp();
      }
    });

    // maxlength setting about remarks
    $moreInfo.find('.txt-card').maxlength({max: 200, feedbackText: '还可输入{r}字'});

    // button of card operate
    $btnCard.on('click', function() {
      // stop propagation
      event.stopPropagation();

      if ($iLabel.eq(0).hasClass('active')) {
        $iLabel.eq(0).removeClass('active');
        $popupBirth.slideUp();
      }

      var isActive = $iLabel.eq(1).hasClass('active');
      if (!isActive) {
        $iLabel.eq(1).addClass('active');
        $popupCard.slideDown();
      } else {
        $iLabel.eq(1).removeClass('active');
        $popupCard.slideUp();
      }
    });

    // popup-card item operate
    $popupCardItem.on('click', function() {
      $popupCardItem.removeClass('active');
      $(this).addClass('active');
      $btnCard.val($(this).html());
      $iLabel.eq(1).removeClass('active');
      $popupCard.slideUp();

      if ($(this).text().trim() == '生日') {
        $btnCard.siblings('.card-content').show();
      } else {
        $btnCard.siblings('.card-content').hide();
      }
    });

    // popup-birth item operate
    $popupBirthItem.on('click', function() {
      $popupBirthItem.removeClass('active');
      $(this).addClass('active');
      $btnBirth.val($(this).html());
      $iLabel.eq(0).removeClass('active');
      $popupBirth.slideUp();

      if ($(this).text().trim() == '自定义') {
        $btnBirth.siblings('.txt-birth').show();
      } else {
        $btnBirth.siblings('.txt-birth').hide();
      }
    });

  }

  // 格式化弹窗内容
  function fnClearInvoice() {
    var $popupInvoice = $('.popup-invoice'),
      $select2Type = $('#invoice_type').select2(),
      $select2Content = $('#invoice_content').select2();

    $select2Type.val('个人').trigger('change');
    $select2Content.val('蛋糕').trigger('change');
    $popupInvoice.find('.invoice-name').val('');
    $popupInvoice.find('.invoice-code').val('');
  }

  // func of remarksInfo operate
  function fnRemarksInfo() {
    var $page = $('#settlementPage'),
      $remarksInfo = $page.find('.remarksInfo'),
      $remarksCont = $remarksInfo.find('.remarks-content');

    // maxlength setting about remarks
    $remarksCont.find('.txt-remarks').maxlength({max: 100, feedbackText: '还可输入{r}字'});
  }

  function fnInitRxOrderSubmit() {
    if (!rxStream) {
      return false;
    }

    var $header = $('#layoutHeader'),
      $portal = $header.find('.portal'),
      $settlementpage = $('#settlementPage'),
      $container = $settlementpage.find('.settlement-container'),
      $info = $container.find('.commodityInfo');

    var o_username = '',
      o_mobile = '',
      b_device = 'pc';

    if ($portal.find('.info').length > 0) {
      o_username = $portal.find('.info').html().trim();
      o_mobile = $portal.find('.info').html().trim();
    }

    // 提交订单 && 提交订单详情
    $container.on('click', '.summary-info .btn-payment', function(e) {
      var submit_order_detail = [],
        submit_order = {},
        totalAmount = 0,
        totalPrice = 0;

      totalPrice = parseFloat($(this).siblings('.s-money').html().trim()).toFixed(2);

      var $items = $info.find('.item');

      $items.each(function(idx, item) {
        var b_productstyle = '',
          b_productname = '',
          b_product_size = '',
          b_productprice_d = '',
          b_productprice_m = 0,
          b_order_count = 0;

        b_productstyle = $(item).attr('data-style').trim();
        b_productname = $(item).attr('data-name').trim();
        b_product_size = $(item).attr('data-size').trim();
        b_productprice_d = $(item).attr('data-price').trim();
        b_productprice_m = parseFloat($(item).attr('data-price').trim()).toFixed(2);
        b_order_count = parseInt($(item).attr('data-amount').trim(), 10);

        totalAmount += b_order_count;

        submit_order_detail.push({
          b_productstyle: b_productstyle,
          b_productname: b_productname,
          b_product_size: b_product_size,
          b_productprice_d: b_productprice_d,
          b_productprice_m: b_productprice_m,
          b_order_count: b_order_count,
          b_device: b_device
        });
      });

      submit_order.b_orderprice = totalPrice;
      submit_order.b_order_count = totalAmount;
      submit_order.b_device = b_device;

      // send submit_order_detail to rxstream server
      $.each(submit_order_detail, function(index, detail) {
        rxStream.track('submit_order_detail', {
  				subject: {
  					o_username: o_username,
  					o_mobile: o_mobile
  				},
  				properties: detail
  			});
      });

      // send submit_order to rxstream server
			rxStream.track('submit_order', {
				subject: {
					o_username: o_username,
					o_mobile: o_mobile
				},
				properties: submit_order
			});
    });
  }
})(window, document, jQuery);
