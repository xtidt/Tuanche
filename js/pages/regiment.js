$(function() {
	pageInit();
	var BrandData = null;//品牌数据
	var _currentBrandId = null;

	function pageInit() {
		//绑定事件
		BindEvent();
	}

	// ajax数据
	function loadData() {
		loadBrand(drawBrand);
	}

	//绑定事件
	function BindEvent() {
		//提交
		var re = /^1\d{10}$/;
		$('#apply').on('click', function() {
			if ($('#brand').val() == '') {
				alert('请选择品牌');
				return false;
			}
			if ($('#carmodel').val() == '') {
				alert('请选择车型');
				return false;
			}
			if ($('#name').val() == '') {
				alert('请输入姓名');
				return false;
			}
			if ($('#mobile').val() == '' || !re.test($('#mobile').val())) {
				alert('请输入正确的手机号码');
				return false;
			}

			var postData = {
				tuanId: 0,
				carId: $('#carmodel').val(),
				tel: $('#mobile').val(),
				name: $('#name').val()
			}

			$.ajax({
				type: 'get',
				data: postData,
				url: ApiUrl + 'SignUp/Add',
				success: function(data) {
						alert('已成功报名，团长会尽快与您联系！');
						window.location.href = "index.html";
				}
			});
		})

		//品牌获得
		// ajax Brand
		$('#brandname').on('click',function(){
			loadBrand(drawBrand);
		})
	}

	//品牌选取
	function drawBrand() {
		if (arguments.length == 0) return false;
		var _data = BrandData = arguments[0].Data;
		//品牌弹出框
		loadCarPop(_data);
	}

	//车型选取
	function drawCarList() {
		if (arguments.length == 0) return false;
		var _data = arguments[0].Data;
		$('#carmodel').html('');
		for (var i = 0, len = _data.length; i < len; i++) {
			var htmlStr = '';
			htmlStr += '<option value="' + _data[i].id + '">' + _data[i].name + '</option>';
			$('#carmodel').append(htmlStr);
		}
		// $('#carmodel').trigger("chosen:updated");
	}

	//加载品牌
	function loadBrand(callback) {
			// callback(testDataBrand); //测试数据
			$.ajax({
				type: 'get',
				data: {},
				url: ApiUrl + 'Car/CarBandList',
				success: function(data) {
					if (!!callback && typeof callback == 'function' && data.Code == 1) {
						callback(data);
					}
				}
			});
		}
		//加载车型
	function loadCar(brandId, callback) {
		// callback(testCar); //测试数据
		$.ajax({
			type: 'get',
			data: {
				bandId: brandId
			},
			url: ApiUrl + 'Car/CarByBandId',
			success: function(data) {
				if (!!callback && typeof callback == 'function' && data.Code == 1) {
					callback(data);
				}
			}
		});
	}

	// 品牌弹出框
	function loadCarPop(items){
		var htmlStr = '<div id="brandPop">\
						    <h3 class="pop-title">请选择参团品牌<i class="ion-ios-close-outline closeBtn"></i></h3>\
						    <article id="brand-cont" class="clearfix">\
						    </article>\
						</div>';
		$('body').append(htmlStr);
		var _data = items;
		for (var i = 0, len = _data.length; i < len; i++) {
			for (var j = 0, jlen = _data[i].carBand.length; j < jlen; j++) {
				var htmlStr = '';
				htmlStr += '<li data-value="' + _data[i].carBand[j].id + '">' + _data[i].carBand[j].carBand + '</li>';
				$('#brand-cont').append(htmlStr);
			}
		}

		$('#brandPop li').each(function(i,cell){
			var _self = $(this);
			_self.off().on('click',function(){
				_currentBrandId = _self.attr('data-value');
				$('#brand').val(_currentBrandId);
				$('#brandname').text(_self.text());
				$('#brandPop').remove();
				loadCar(_currentBrandId, drawCarList);
			})
		})

		$('#brandPop .closeBtn').off().on('click',function(){
			$('#brandPop').remove();
		})
	}
})

var testDataBrand = {
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


var testCar = {
	"Code": 1,
	"Data": [{
		"id": 35,
		"name": "宝马5系"
	}, {
		"id": 36,
		"name": "宝马3系"
	}, {
		"id": 37,
		"name": "宝马X1"
	}, {
		"id": 38,
		"name": "宝马X5"
	}, {
		"id": 39,
		"name": "宝马X3"
	}, {
		"id": 40,
		"name": "宝马1系"
	}, {
		"id": 41,
		"name": "宝马7系"
	}, {
		"id": 42,
		"name": "宝马X6"
	}, {
		"id": 43,
		"name": "宝马Z4"
	}, {
		"id": 44,
		"name": "宝马316i"
	}, {
		"id": 45,
		"name": "宝马6系"
	}, {
		"id": 46,
		"name": "宝马M系"
	}, {
		"id": 47,
		"name": "宝马2系"
	}, {
		"id": 48,
		"name": "宝马4系"
	}]
}