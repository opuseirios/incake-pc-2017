(function(window, $, undefined) {

    $(function() {

        // 初始化列表
        fnInitList();

        // 初始化下拉框
        $('.select2').select2();

        // 高德地图智能提示模块代码
		(function($layout) {

			// Doms
			var $addrElem = $layout.find('.address-input'),
				$inputElem = $addrElem.find('.address-street'),
				$listElem = $addrElem.find('.search-addrlist');

			// Amap variables
			var autocomplete = null;
			AMap.plugin(['AMap.Autocomplete'], function() {
				var autoOptions = {
					city: ''
				};
				autocomplete = new AMap.Autocomplete(autoOptions);
			});

			// 文本改变事件
			$inputElem.on('input focus', function(e) {
				var _html = '';
				var keywords = $(this).val().trim();
				
				if (keywords == '') {
					$listElem.empty().hide();
					return false;
				}

				autocomplete.search(keywords, function(status, result) {
					if (status == 'complete') {
						var tips = result.tips;

						// 过滤掉没有详细地址信息的数据
						tips = tips.filter(function(tip) {
							return !(tip.id == '' || location == '');
						});

						if (tips.length == 0) {
							$listElem.empty().hide();
							return false;
						}

						tips.forEach(function(tip) {
							_html += '<li';
							_html += ' data-adcode="' + tip.adcode + '"';
							_html += ' data-address="' + tip.address + '"';
							_html += ' data-district="' + tip.district + '"';
							_html += ' data-lng="' + tip.location.lng + '"';
							_html += ' data-lat="' + tip.location.lat + '"';
							_html += ' data-name="' + tip.name + '"';
							_html += ' data-typecode="' + tip.typecode + '">';
							_html += tip.name + '<span>' + tip.district + '</span>';
							_html += '</li>';
						});

						$listElem.html(_html).show();
					}
				});
			});

			// 搜索列表项选中事件
			$listElem.on('click', 'li', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
				var $elem = $(this);
				var data = {
					adcode: $elem.data('adcode'),
					address: $elem.data('address'),
					district: $elem.data('district'),
					lng: parseFloat($elem.data('lng')),
					lat: parseFloat($elem.data('lat')),
					name: $elem.data('name'),
					typecode: $elem.data('typecode')
				};

				$inputElem.val(data.name);
				$listElem.hide();
			});
        })($('#mask'));
        
    });

    // 初始化列表
    function fnInitList() {

        // 绑定收货地址列表数据
        fnBindList();

        // 修改&删除收货地址信息
        fnEditAddress();

    }

    // 绑定收货地址列表数据
    function fnBindList() {
        var $oComWrap = $('.address-wrap'),
            $oNumber = $oComWrap.find('.number'),
            $oListWrap = $oComWrap.find('.list-wrap'),
            $oAddressList = $oComWrap.find('.address-list');
        var _data = {
            list: [{
                iName: '张三',
                addr: {
                    city: '上海市',
                    area: '静安区',
                    ext: '外环线以内',
                    street: '广中西路777弄99号江裕大厦506室'
                },
                mobile: '13615211254',
                isDefault: 'false'
            }, {
                iName: '李四',
                addr: {
                    city: '上海市',
                    area: '闸北区',
                    ext: '外环线以内',
                    street: '上海马戏城地铁站'
                },
                mobile: '15800110202',
                isDefault: 'false'
            }, {
                iName: '王五',
                addr: {
                    city: '上海市',
                    area: '普陀区',
                    ext: '外环线以外',
                    street: '雪松路458弄桃浦七村263号602室'
                },
                tel: '021-89283321',
                isDefault: 'true'
            }, {
                iName: '张三',
                addr: {
                    city: '上海市',
                    area: '静安区',
                    ext: '外环线以内',
                    street: '广中西路777弄99号江裕大厦506室'
                },
                mobile: '13615211254',
                isDefault: 'false'
            }, {
                iName: '张三',
                addr: {
                    city: '上海市',
                    area: '静安区',
                    ext: '外环线以内',
                    street: '广中西路777弄99号江裕大厦506室'
                },
                mobile: '13615211254',
                isDefault: 'false'
            }, {
                iName: '张三',
                addr: {
                    city: '上海市',
                    area: '静安区',
                    ext: '外环线以内',
                    street: '广中西路777弄99号江裕大厦506室'
                },
                mobile: '13615211254',
                isDefault: 'false'
            }]
        };

        if (_data.list.length > 0) {
            $oNumber.text(_data.list.length);
            var _html = template('tplAddressList', _data);
            $oAddressList.html(_html);
            $oListWrap.show();
        } else {
            $oNumber.text(0);
            $oListWrap.hide();
        }
    }

    // 添加&修改收货地址信息
    function fnEditAddress() {
        var $oComWrap = $('.address-wrap'),
            $oListWrap = $oComWrap.find('.list-wrap'),
            $oBtnAdd = $oComWrap.find('.btn-add'),
            $oNumber = $oComWrap.find('.number'),
            $aComItem = $oComWrap.find('.address-item'),
            $aBtnUpdate = $aComItem.find('.btn-update'),
            $aBtnDelete = $aComItem.find('.btn-delete'),
            $oMask = $('#mask'),
            $oMaskTitle = $oMask.find('.popup-title').find('span'),
            $oBtnClose = $oMask.find('.btn-close'),
            $oBtnCancel = $oMask.find('#btn-cancel');

        // 新增收货地址
        $oBtnAdd.on('click', function() {
            // 格式化弹窗内容
            fnClearAddress();

            $oMaskTitle.html('新增收货地址');
            $oMask.fadeIn();
        });

        // 关闭弹窗
        $oBtnClose.on('click', function() {
            $oMask.fadeOut();
        });

        // 删除收货地址信息
        $aBtnDelete.on('click', function() {
            $(this).closest('.address-item').slideUp(function() {
                $(this).closest('.address-item').remove();
                $oNumber.text($oNumber.text() - 1);
                if ($('.address-item').length == 0) {
                    $oListWrap.hide();
                }
            });

        });

        // 修改收货地址信息
        $aBtnUpdate.on('click', function() {
            var $item = $(this).closest('.address-item'),
                name = $item.attr('data-name'),
                mobile = $item.attr('data-mobile'),
                tel = $item.attr('data-tel'),
                city = $item.attr('data-city'),
                area = $item.attr('data-area'),
                ext = $item.attr('data-ext'),
                street = $item.attr('data-street'),
                isDefault = $item.attr('data-default'),
                $select2City = $('#select_city'),
                $select2Area = $('#select_area'),
                $select2Ext = $('#select_ext');

            $oMaskTitle.html('修改收货地址');

            $oMask.find('.receiver-name').val(name);
            $select2City.val(city).trigger('change');
            $select2Area.val(area).trigger('change');
            $select2Ext.val(ext).trigger('change');
            $oMask.find('.address-street').val(street);
            $oMask.find('.mobile').val(mobile);
            $oMask.find('.tel').val(tel);

            if(isDefault == 'true') {
        		$oMask.find('.set-default').find('i').addClass('checked');
            } else {
            	$oMask.find('.set-default').find('i').removeClass('checked');
            }

            $oMask.fadeIn();

        });

        // 取消操作
        $oBtnCancel.on('click', function() {
            $oMask.fadeOut();
        });

        // 设置默认地址切换
        $oMask.find('.set-default').on('click', 'i', function() {
        	$(this).toggleClass('checked');
        });
    }

    // 格式化弹窗内容
    function fnClearAddress() {
        var $oMask = $('#mask'),
            $select2City = $('#select_city'),
            $select2Area = $('#select_area'),
            $select2Ext = $('#select_ext');

        $select2City.val('0').trigger('change');
        $select2Area.val('0').trigger('change');
        $select2Ext.val('0').trigger('change');
        $oMask.find('.receiver-name').val('');
        $oMask.find('.address-street').val('');
        $oMask.find('.mobile').val('');
        $oMask.find('.tel').val('');
    }

})(window, jQuery);
