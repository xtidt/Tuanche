$(function() {
	var Id = null
	,pageIndex = 1
	,pageSize = 10
	,cityId = null
	,flag = false;//是否加载完全
	var tuanId = null;;

	pageInit();
	function pageInit() {
		//绑定事件
		Id = $.hash.getUrlParam("Id");
		if(!!Id){
			// ajax
			loadData();
			BindEvent();
		}
	}

	// ajax数据
	function loadData() {
		// drawList(testData);//测试数据
		$.ajax({
			type:'get',
			url: ApiUrl + 'CarModel/GetById',
			data:{
				id : Id
			},
			success:function(data){
				if(data.Data.length == 0){
					var tempData = {
						"Code": 1,
						"Data": {
							"id": 1,
							"carId": 1,
							"modelName": "暂时无真实报价",
							"naked": "暂时无真实报价",
							"purchaseTax": "暂时无真实报价",
							"card": "暂时无真实报价",
							"insurance": "暂时无真实报价",
							"allPrice": "暂时无真实报价",
							"createTime": "-",
							"status": 1
						}
					}
					drawList(tempData);
				}else{
					drawList(data);
				}
			},
			error:function(xhr){
				$.errorEvent();
			}
		})

		//交易记录
		loadHistory();
	}

	function loadHistory(){
		var postData = {
			carModelId : Id,
			pageIndex : pageIndex,
			pageSize : pageSize,
			cityId : cityId
		}

		// historyList(testData2.Data);//测试数据

		$.ajax({
			type:'get',
			url: ApiUrl + 'Price/ListByCarModelId',
			data:postData,
			success:function(data){
				if(data.Code == 1){
					historyList(data.Data);
				}
			},
			error:function(xhr){
				$.errorEvent();
			}
		})
	}

	//绘制数据
	function drawList(msg){
		tuanId = msg.Data.id;

		$('#modelName').text(msg.Data.modelName);
		$('#naked').text(msg.Data.naked);
		$('#purchaseTax').text(msg.Data.purchaseTax);
		$('#card').text(msg.Data.card);
		$('#insurance').text(msg.Data.insurance);
		$('#allPrice').text(msg.Data.allPrice);
	}

	function historyList(data){
		if(flag) return false;//已完全加载
		var _data = data;

		if(_data.length < 10){
			flag = true;;
		}else{
			pageIndex++;
		}

		var htmlStr = '';
		for(var i=0, len=_data.length; i<len; i++){
			htmlStr += '<ul class="record-title">\
		        <li class="leftCloumn">张先生</li>\
		        <li class="rightCloumn">成交时间：'+ _data[i].createTime +'</li>\
		        <br class="clearfix">\
		      </ul>\
		      <ul class="record-row">\
		        <p>裸车价：'+ _data[i].naked +'</p>\
		        <p>购置税：'+ _data[i].purchaseTax +'  </p>\
		        <p>上牌费：'+ _data[i].card +'</p>\
		        <p>保险费：'+ _data[i].insurance +'</p>\
		        <p>落地价：'+ _data[i].allPrice +'    （已上传发票）</p>\
		      </ul>';
		}
		$('#js-bid-history').append(htmlStr);
	}

	function BindEvent() {
		$('#apply').on('click', function() {
			if ($('#name').val() == '') {
				alert('请输入姓名');
				return false;
			}
			if ($('#mobile').val() == '' || !re.test($('#mobile').val())) {
				alert('请输入正确的手机号码');
				return false;
			}

			var postData = {
				tuanId: tuanId,
				carId: Id,
				tel: $('#mobile').val(),
				name: $('#name').val()
			}

			$.ajax({
				type: 'get',
				data: postData,
				url: ApiUrl + 'SignUp/Add',
				success: function(data) {
						alert('已成功报名，团长会尽快与您联系！');
						window.location.href = 'index.html';
				}
			});
		})
	}
})

var testData = {
   "Code"        : 1,
   "Data"        : {
      "id"          : 1,
      "carId"       : 1,
      "modelName"   : "途观2012 自动挡",
      "naked"       : "20.3w（优惠2w）",
      "purchaseTax" : "12000",
      "card"        : "800",
      "insurance"   : "7000",
      "allPrice"    : "21w",
      "createTime"  : "\/Date(1426224127353)\/",
      "status"      : 1
   }
}

var testData2 = {
   "Code"        : 1,
   "Data"        : [
      {
         "id"          : 1,
         "cityId"      : 1,
         "carId"       : 1,
         "carModelId"  : 1,
         "name"        : "joy",
         "naked"       : "21.1w",
         "purchaseTax" : "12555",
         "card"        : "800",
         "insurance"   : "7000",
         "allPrice"    : "22w",
         "dealTime"    : "\/Date(1426224277453)\/",
         "isInvoice"   : 0,
         "createTime"  : "\/Date(1426224277453)\/",
         "status"      : 1
      },
      {
         "id"          : 1,
         "cityId"      : 1,
         "carId"       : 1,
         "carModelId"  : 1,
         "name"        : "joy",
         "naked"       : "21.1w",
         "purchaseTax" : "12555",
         "card"        : "800",
         "insurance"   : "7000",
         "allPrice"    : "22w",
         "dealTime"    : "\/Date(1426224277453)\/",
         "isInvoice"   : 1,
         "createTime"  : "\/Date(1426224277453)\/",
         "status"      : 1
      }
   ]
}