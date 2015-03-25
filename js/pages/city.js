$(function() {
  function pageInit() {
    BindEvent();
    // ajax
    loadData();
  }

  function BindEvent() {
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      spaceBetween: 30
    });
  }

  function loadData() {
    $.ajax({
      type: 'get',
      url: 'http://mobileapi.uumaiche.com/City/CityList',
      success: function(data) {
        console.log(data);
      }
    });
  }

  pageInit();
})

var _test = {
  "Code": 1,
  "Data": [{
    "pinYin": "B",
    "carBand": [{
      "id": 4,
      "carBand": "宝马"
    }, {
      "id": 5,
      "carBand": "北京奔驰"
    }, {
      "id": 9,
      "carBand": "北京现代"
    }, {
      "id": 26,
      "carBand": "北京汽车"
    }, {
      "id": 31,
      "carBand": "一汽奔腾"
    }, {
      "id": 33,
      "carBand": "比亚迪"
    }]
  }, {
    "pinYin": "C",
    "carBand": [{
      "id": 15,
      "carBand": "长安铃木"
    }, {
      "id": 18,
      "carBand": "长安马自达"
    }, {
      "id": 23,
      "carBand": "昌河铃木"
    }, {
      "id": 29,
      "carBand": "长城汽车"
    }, {
      "id": 34,
      "carBand": "长安汽车"
    }, {
      "id": 41,
      "carBand": "长安福特"
    }]
  }, {
    "pinYin": "D",
    "carBand": [{
      "id": 11,
      "carBand": "东风日产"
    }, {
      "id": 14,
      "carBand": "东风悦达起亚"
    }, {
      "id": 19,
      "carBand": "东风本田"
    }, {
      "id": 27,
      "carBand": "东南汽车"
    }, {
      "id": 36,
      "carBand": "东风启辰"
    }, {
      "id": 42,
      "carBand": "道奇"
    }, {
      "id": 47,
      "carBand": "东风雪铁龙"
    }, {
      "id": 49,
      "carBand": "东风标致"
    }]
  }, {
    "pinYin": "F",
    "carBand": [{
      "id": 53,
      "carBand": "菲亚特"
    }]
  }, {
    "pinYin": "G",
    "carBand": [{
      "id": 10,
      "carBand": "广汽丰田"
    }, {
      "id": 13,
      "carBand": "广汽三菱"
    }, {
      "id": 17,
      "carBand": "广汽本田"
    }, {
      "id": 37,
      "carBand": "广汽传祺"
    }, {
      "id": 39,
      "carBand": "观致"
    }]
  }, {
    "pinYin": "H",
    "carBand": [{
      "id": 38,
      "carBand": "红旗"
    }]
  }, {
    "pinYin": "J",
    "carBand": [{
      "id": 43,
      "carBand": "Jeep"
    }, {
      "id": 52,
      "carBand": "捷豹"
    }]
  }, {
    "pinYin": "K",
    "carBand": [{
      "id": 44,
      "carBand": "克莱斯勒"
    }, {
      "id": 45,
      "carBand": "凯迪拉克"
    }]
  }, {
    "pinYin": "L",
    "carBand": [{
      "id": 20,
      "carBand": "雷克萨斯"
    }, {
      "id": 48,
      "carBand": "雷诺"
    }, {
      "id": 51,
      "carBand": "路虎"
    }]
  }, {
    "pinYin": "M",
    "carBand": [{
      "id": 7,
      "carBand": "MINI"
    }]
  }, {
    "pinYin": "N",
    "carBand": [{
      "id": 32,
      "carBand": "纳智捷"
    }]
  }, {
    "pinYin": "O",
    "carBand": [{
      "id": 24,
      "carBand": "讴歌"
    }]
  }, {
    "pinYin": "Q",
    "carBand": [{
      "id": 21,
      "carBand": "起亚（进口）"
    }, {
      "id": 30,
      "carBand": "奇瑞"
    }]
  }, {
    "pinYin": "S",
    "carBand": [{
      "id": 1,
      "carBand": "上海大众"
    }, {
      "id": 3,
      "carBand": "斯柯达"
    }, {
      "id": 6,
      "carBand": "smart"
    }, {
      "id": 12,
      "carBand": "斯巴鲁"
    }, {
      "id": 35,
      "carBand": "上汽荣威"
    }]
  }, {
    "pinYin": "T",
    "carBand": [{
      "id": 40,
      "carBand": "通用雪佛兰"
    }, {
      "id": 46,
      "carBand": "通用别克"
    }]
  }, {
    "pinYin": "W",
    "carBand": [{
      "id": 28,
      "carBand": "五菱"
    }, {
      "id": 50,
      "carBand": "沃尔沃"
    }]
  }, {
    "pinYin": "Y",
    "carBand": [{
      "id": 2,
      "carBand": "一汽奥迪"
    }, {
      "id": 8,
      "carBand": "一汽-大众"
    }, {
      "id": 16,
      "carBand": "一汽马自达"
    }, {
      "id": 22,
      "carBand": "一汽丰田"
    }]
  }, {
    "pinYin": "Z",
    "carBand": [{
      "id": 25,
      "carBand": "郑州日产"
    }]
  }]
}