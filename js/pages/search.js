$(function() {
	var id = null;
	pageInit();

	function pageInit() {
		// ajax
		loadData();
		//绑定事件
		BindEvent();
	}

	// ajax数据
	function loadData() {
		loadBrand(drawBrand)
	}

	//绑定事件
	function BindEvent() {
		var re = /^1\d{10}$/;
		$('#submitBtn').on('click', function() {
			if ($('#brand').val() == '') {
				alert('请选择品牌');
				return false;
			}
			if ($('#carmodel').val() == '') {
				alert('请选择车型');
				return false;
			}
			if ($('#modelnumb').val() == '') {
				alert('请选择型号');
				return false;
			}

			var postData = {
				carId: $('#modelnumb').val()
			}

			window.location.href = './result.html?carId=' + postData.carId;
			/*$.ajax({
				type: 'get',
				data: postData,
				url: ApiUrl + 'CarModel/GetByCarId',
				success: function(data) {
					if (!!callback && typeof callback == 'function' && data.Code == 1) {
						alert('');
					}
				}
			});*/
		})

		$('#brand').change(function() {
			$('#carmodel').empty();
			loadCar($('#brand').val(), drawCarList);
		});

		$('#carmodel').change(function() {
			$('#modelnumb').empty();
			loadModelnumb($('#carmodel').val(), drawModelnumbList);
		});
	}

	//品牌选取
	function drawBrand() {
		if (arguments.length == 0) return false;
		var _data = arguments[0].Data;
		for (var i = 0, len = _data.length; i < len; i++) {
			for (var j = 0, jlen = _data[i].carBand.length; j < jlen; j++) {
				var htmlStr = '';
				htmlStr += '<option value="' + _data[i].carBand[j].id + '">' + _data[i].carBand[j].carBand + '</option>';
				$('#brand').append(htmlStr);
			}

		}
	}

	//车型选取
	function drawCarList() {
		if (arguments.length == 0) return false;
		var _data = arguments[0].Data;
		$('#carmodel').html('<option value="">请选择</option>');
		for (var i = 0, len = _data.length; i < len; i++) {
			var htmlStr = '';
			htmlStr += '<option value="' + _data[i].id + '">' + _data[i].name + '</option>';
			$('#carmodel').append(htmlStr);
		}
	}

	//型号选取
	function drawModelnumbList() {
		if (arguments.length == 0) return false;
		var _data = arguments[0].Data;
		$('#modelnumb').html('<option value="">请选择</option>');
		for (var i = 0, len = _data.length; i < len; i++) {
			var htmlStr = '';
			htmlStr += '<option value="' + _data[i].id + '">' + _data[i].modelName + '</option>';
			$('#modelnumb').append(htmlStr);
		}
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
		//加载型号
	function loadModelnumb(carmodelId, callback) {
		// callback(testSearch); //测试数据
		$.ajax({
			type: 'get',
			data: {
				carId: carmodelId
			},
			url: ApiUrl + 'CarModel/GetByCarId',
			success: function(data) {
				if (!!callback && typeof callback == 'function' && data.Code == 1) {
					callback(data);
				}
			}
		});
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

var testSearch = {
	"Code": 1,
	"Data": [{
		"id": 2,
		"carId": 1,
		"modelName": "2015款 1.4TSI 手动两驱蓝驱版",
		"naked": "21w",
		"purchaseTax": "13214",
		"card": "120",
		"insurance": "6900",
		"allPrice": "23w",
		"createTime": "\/Date(1426427636333)\/",
		"status": 1
	}, {
		"id": 3,
		"carId": 1,
		"modelName": "2015款 1.8TSI 手动两驱风尚版",
		"naked": "19.88w",
		"purchaseTax": "13214",
		"card": "120",
		"insurance": "6900",
		"allPrice": "19.98w",
		"createTime": "\/Date(1426427727203)\/",
		"status": 1
	}, {
		"id": 4,
		"carId": 1,
		"modelName": "2015款 1.8TSI 自动两驱风尚版",
		"naked": "19.88w",
		"purchaseTax": "13214",
		"card": "120",
		"insurance": "6900",
		"allPrice": "21.08w",
		"createTime": "\/Date(1426427746387)\/",
		"status": 1
	}, {
		"id": 5,
		"carId": 1,
		"modelName": "2015款 1.8TSI 手动两驱限量版",
		"naked": "19.88w",
		"purchaseTax": "13214",
		"card": "120",
		"insurance": "6900",
		"allPrice": "22.58w",
		"createTime": "\/Date(1426427763233)\/",
		"status": 1
	}, {
		"id": 6,
		"carId": 1,
		"modelName": "2015款 1.8TSI 自动两驱舒适版",
		"naked": "19.88w",
		"purchaseTax": "13214",
		"card": "120",
		"insurance": "6900",
		"allPrice": "23.78w",
		"createTime": "\/Date(1426427782033)\/",
		"status": 1
	}, {
		"id": 7,
		"carId": 1,
		"modelName": "2015款 1.8TSI 自动两驱30周年纪念版",
		"naked": "19.88w",
		"purchaseTax": "13214",
		"card": "120",
		"insurance": "6900",
		"allPrice": "25.38w",
		"createTime": "\/Date(1426427793910)\/",
		"status": 1
	}, {
		"id": 8,
		"carId": 1,
		"modelName": "2015款 1.8TSI 自动四驱舒适版",
		"naked": "19.88w",
		"purchaseTax": "13214",
		"card": "120",
		"insurance": "6900",
		"allPrice": "25.48w",
		"createTime": "\/Date(1426427805523)\/",
		"status": 1
	}, {
		"id": 9,
		"carId": 1,
		"modelName": "2015款 1.8TSI 自动两驱豪华型",
		"naked": "19.88w",
		"purchaseTax": "13214",
		"card": "120",
		"insurance": "6900",
		"allPrice": "25.98w",
		"createTime": "\/Date(1426427817180)\/",
		"status": 1
	}, {
		"id": 10,
		"carId": 1,
		"modelName": "2015款 1.8TSI 自动四驱豪华型",
		"naked": "19.88w",
		"purchaseTax": "13214",
		"card": "120",
		"insurance": "6900",
		"allPrice": "27.68w",
		"createTime": "\/Date(1426427830160)\/",
		"status": 1
	}, {
		"id": 11,
		"carId": 1,
		"modelName": "2015款 2.0TSI 自动四驱豪华版",
		"naked": "19.88w",
		"purchaseTax": "13214",
		"card": "120",
		"insurance": "6900",
		"allPrice": "29.08w",
		"createTime": "\/Date(1426427853690)\/",
		"status": 1
	}, {
		"id": 12,
		"carId": 1,
		"modelName": "2015款 2.0TSI 自动四驱旗舰版",
		"naked": "19.88w",
		"purchaseTax": "13214",
		"card": "120",
		"insurance": "6900",
		"allPrice": "31.58w",
		"createTime": "\/Date(1426427874410)\/",
		"status": 1
	}]
}