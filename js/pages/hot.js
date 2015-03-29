$(function() {
  function pageInit() {
    BindEvent();
    // ajax
    loadData();
  }

  function BindEvent() {
    
  }

  function loadData() {
    hotCar(drawList);
    hotBrand(drawList2);
  }

  function drawList() {
    if (arguments.length == 0) return false;
    var _data = arguments[0].Data;
    var htmlStr = '';
    for (var i = 0, len = _data.length; i < len; i++) {
      htmlStr += '<li data-info="{id:' + _data[i].id + ',carId:' + _data[i].carId + '}">\
        <a href="applyDetail.html?tuanId=' + _data[i].id + '&carId=' + _data[i].carId + '" >\
          <img src="' + _data[i].picUrl + '">\
          <div>\
            <p>' + _data[i].name + '</p>\
            <p class="many-buy"> <strong class="fc-orange">' + _data[i].signUpNum + '</strong>\
              人已报名\
            </p>\
          </div>\
        </a>\
      </li>'
    }

    $('#js-hot-car').empty().html(htmlStr);
  }

  function drawList2() {
    if (arguments.length == 0) return false;
    var _data = arguments[0].Data;
    var htmlStr = '';
    for (var i = 0, len = _data.length; i < len; i++) {
      htmlStr += '<li>\
        <a href="applyDetail.html?tuanId=0&carBandId=' + _data[i].id + '" >\
          <img src="' + _data[i].picUrl + '" alt="' + _data[i].carBand + '">\
          <p>' + _data[i].carBand + '</p>\
        </a>\
      </li>';
    }

    $('#js-hot-brand').empty().html(htmlStr);
  }

  var defaultOptions = {
      pageIndex: 1,
      pageSize: 10,
      cityId: CityId
    }
    // 热门车型
  function hotCar(callback) {
    // callback(_test); //测试数据
    $.ajax({
      type: 'get',
      data: defaultOptions,
      url: ApiUrl+'tuan/List',
      success: function(data) {
        if (!!callback && typeof callback == 'function' && data.Code == 1) {
          callback(data);
        }
      }
    });
  }

  // 热门品牌
  function hotBrand(callback) {
    // callback(_test_brand); //测试数据
    $.ajax({
      type: 'get',
      data: defaultOptions,
      url: ApiUrl+'tuan/CarBandList',
      success: function(data) {
        if (!!callback && typeof callback == 'function' && data.Code == 1) {
          callback(data);
        }
      }
    });
  }



  pageInit();
})

var _test = {
  "Code": 1,
  "Data": [{
    "id": 1,
    "cityId": 1,
    "carId": 1,
    "title": "泉州途观汽车团购",
    "tuanTime": "\/Date(1422693394053)\/",
    "price": "现场公布",
    "signUpNum": 77,
    "initNum": 0,
    "createTime": "\/Date(1422088594110)\/",
    "status": 1,
    "hot": 0,
    "carband": "上海大众",
    "countryType": "德系",
    "name": "途观",
    "picUrl": "http://pic.tuanche.com/car/20141112/14157699579369115_pcb.jpg"
  }, {
    "id": 2,
    "cityId": 1,
    "carId": 2,
    "title": "泉州朗逸汽车团购",
    "tuanTime": "\/Date(1422715731500)\/",
    "price": "现场公布",
    "signUpNum": 34,
    "initNum": 0,
    "createTime": "\/Date(1422110931510)\/",
    "status": 1,
    "hot": 0,
    "carband": "上海大众",
    "countryType": "德系",
    "name": "朗逸",
    "picUrl": "http://pic.tuanche.com/car/20141027/14143996510609996_pcb.jpg"
  }, {
    "id": 3,
    "cityId": 1,
    "carId": 3,
    "title": "泉州新帕萨特汽车团购",
    "tuanTime": "\/Date(1422806400000)\/",
    "price": "现场公布",
    "signUpNum": 57,
    "initNum": 23,
    "createTime": "\/Date(1422787864933)\/",
    "status": 1,
    "hot": 0,
    "carband": "上海大众",
    "countryType": "德系",
    "name": "新帕萨特",
    "picUrl": "http://pic.tuanche.com/car/20141027/1414396443612941_pcb.jpg"
  }, {
    "id": 4,
    "cityId": 1,
    "carId": 4,
    "title": "泉州Polo汽车团购",
    "tuanTime": "\/Date(1426421606247)\/",
    "price": "现场公布",
    "signUpNum": 56,
    "initNum": 0,
    "createTime": "\/Date(1426421606247)\/",
    "status": 1,
    "hot": 0,
    "carband": "上海大众",
    "countryType": "德系",
    "name": "Polo",
    "picUrl": "http://pic.tuanche.com/car/20141027/14143819776818632_pcb.jpg"
  }, {
    "id": 5,
    "cityId": 1,
    "carId": 5,
    "title": "泉州帕萨特汽车团购",
    "tuanTime": "\/Date(1426421699520)\/",
    "price": "现场公布",
    "signUpNum": 89,
    "initNum": 0,
    "createTime": "\/Date(1426421699520)\/",
    "status": 1,
    "hot": 0,
    "carband": "上海大众",
    "countryType": "德系",
    "name": "帕萨特",
    "picUrl": "http://pic.tuanche.com/car/20141027/14143996663033776_pcb.jpg"
  }, {
    "id": 6,
    "cityId": 1,
    "carId": 7,
    "title": "泉州新桑塔纳汽车团购",
    "tuanTime": "\/Date(1426421745160)\/",
    "price": "现场公布",
    "signUpNum": 56,
    "initNum": 0,
    "createTime": "\/Date(1426421745160)\/",
    "status": 1,
    "hot": 0,
    "carband": "上海大众",
    "countryType": "德系",
    "name": "新桑塔纳",
    "picUrl": "http://pic.tuanche.com/car/20141027/1414399709499409_pcb.jpg"
  }, {
    "id": 7,
    "cityId": 1,
    "carId": 8,
    "title": "泉州朗行汽车团购",
    "tuanTime": "\/Date(1430409600000)\/",
    "price": "现场公布",
    "signUpNum": 107,
    "initNum": 10,
    "createTime": "\/Date(1426426868083)\/",
    "status": 1,
    "hot": 0,
    "carband": "上海大众",
    "countryType": "德系",
    "name": "朗行",
    "picUrl": "http://pic.tuanche.com/car/20141027/14143996164228728_pcb.jpg"
  }]
}

var _test_brand = {
  "Code": 1,
  "Data": [{
    "id": 1,
    "carBand": "上海大众",
    "picUrl": "http://pic.tuanche.com/car/20140804/14071141466531076_s.jpg"
  }, {
    "id": 8,
    "carBand": "一汽-大众",
    "picUrl": "http://pic.tuanche.com/car/20140804/14071140956585687_s.jpg"
  }, {
    "id": 10,
    "carBand": "广汽丰田",
    "picUrl": "http://pic.tuanche.com/car/20140804/14071215610895914_s.jpg"
  }, {
    "id": 17,
    "carBand": "广汽本田",
    "picUrl": "http://pic.tuanche.com/car/20140804/14071216126722570_s.jpg"
  }, {
    "id": 41,
    "carBand": "长安福特",
    "picUrl": "http://pic.tuanche.com/car/20140804/14071217458303546_s.jpg"
  }, {
    "id": 46,
    "carBand": "通用别克",
    "picUrl": "http://pic.tuanche.com/car/20140808/14074697832287231_s.jpg"
  }]
}