$(function() {
  function pageInit() {
    // ajax
    loadData();
  }

  function loadData() {
    loadCity(drawList);
  }

  function loadCity(callback) {
    // callback(testData);//测试数据
    $.ajax({
      type: 'get',
      url: ApiUrl + 'City/CityList',
      success: function(data) {
        if (!!callback && typeof callback == 'function' && data.Code == 1) {
          callback(data);
        }
      }
    });
  }

  //绘制列表
  function drawList() {
    if (arguments.length == 0) return false;
    var _data = arguments[0].Data;
    var htmlStr = '';
    for (var i = 0, len = _data.length; i < len; i++) {
      htmlStr += '<ul class="row">\
            <h3>' + _data[i].pinYin + '</h3>\
        </ul>\
        <ul class="row groups">';

      for (var j = 0; j < _data[i].cityData.length; j++) {
        htmlStr += '<li data-id="' + _data[i].cityData[j].id + '">' + _data[i].cityData[j].cityName + '</li>';
      }

      htmlStr += '</ul>';
    }

    $('#js-city-select').html(htmlStr);

    BindEvent();
  }

  //绑定事件
  function BindEvent() {
    $('#js-city-select .row.groups li').each(function(i, item) {
      $(this).on('click', function() {
        var tempId = $(this).attr('data-id');
        var tempName = $(this).text();
        $.cookie('CityId', tempId);
        $.cookie('CityName', tempName);
        setTimeout(function(){
          window.history.go(-1);
        },1000);
      })
    })
  }

  pageInit();
})

var testData = {
  "Code": 1,
  "Data": [{
    "pinYin": "B",
    "cityData": [{
      "id": 28,
      "cityName": "北京市"
    }]
  }, {
    "pinYin": "C",
    "cityData": [{
      "id": 382,
      "cityName": "重庆市"
    }]
  }, {
    "pinYin": "F",
    "cityData": [{
      "id": 77,
      "cityName": "福州市"
    }]
  }, {
    "pinYin": "G",
    "cityData": [{
      "id": 91,
      "cityName": "广州市"
    }]
  }, {
    "pinYin": "L",
    "cityData": [{
      "id": 187,
      "cityName": "龙岩市"
    }]
  }, {
    "pinYin": "N",
    "cityData": [{
      "id": 208,
      "cityName": "南平市"
    }, {
      "id": 213,
      "cityName": "宁德市"
    }]
  }, {
    "pinYin": "P",
    "cityData": [{
      "id": 222,
      "cityName": "莆田市"
    }]
  }, {
    "pinYin": "Q",
    "cityData": [{
      "id": 239,
      "cityName": "泉州市"
    }]
  }, {
    "pinYin": "S",
    "cityData": [{
      "id": 243,
      "cityName": "三明市"
    }, {
      "id": 250,
      "cityName": "上海市"
    }, {
      "id": 255,
      "cityName": "深圳市"
    }]
  }, {
    "pinYin": "T",
    "cityData": [{
      "id": 287,
      "cityName": "天津市"
    }]
  }, {
    "pinYin": "X",
    "cityData": [{
      "id": 322,
      "cityName": "厦门市"
    }]
  }, {
    "pinYin": "Z",
    "cityData": [{
      "id": 375,
      "cityName": "漳州市"
    }]
  }]
}