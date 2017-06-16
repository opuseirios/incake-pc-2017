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

        // 公告
        fnInitNotice();

        // 轮播图
        fnInitMainSlider();

        // 绑定当季热卖数据
        fnBindBestChoice();
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

})(window, jQuery);
