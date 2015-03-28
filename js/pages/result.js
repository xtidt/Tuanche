$(function() {
	var id = null
	,carId = null
	,pageIndex = 1
	,pageSize = 10
	,cityId = null
	,flag = false;//是否加载完全

	pageInit();
	function pageInit() {
		//绑定事件
		carId = $.hash.getUrlParam("carId");
		if(!!carId){
			// ajax
			loadData();
			BindEvent();
		}
	}

	// ajax数据
	function loadData() {
		drawList(testData);//测试数据
		/*$.ajax({
			type:'get',
			url: ApiUrl + 'CarModel/GetByCarId',
			data:{
				carId : carId
			},
			succuess:function(data){
				drawList(data)
			},
			error:function(xhr){
				$.errorEvent();
			}
		})*/

		//交易记录
		loadHistory();
	}

	function loadHistory(){
		var postData = {
			carModelId : carId,
			pageIndex : pageIndex,
			pageSize : pageSize,
			cityId : cityId
		}

		historyList(testData2.Data);//测试数据

		/*$.ajax({
			type:'get',
			url: ApiUrl + 'Price/ListByCarModelId',
			data:postData,
			succuess:function(data){
				if(data.Code == 1){
					historyList(data.Data);
				}
			},
			error:function(xhr){
				$.errorEvent();
			}
		})*/
	}

	//绘制数据
	function drawList(msg){
		id = msg.Data[0].id;

		$('#modelName').text(msg.Data[0].modelName);
		$('#naked').text(msg.Data[0].naked);
		$('#purchaseTax').text(msg.Data[0].purchaseTax);
		$('#card').text(msg.Data[0].card);
		$('#insurance').text(msg.Data[0].insurance);
		$('#allPrice').text(msg.Data[0].allPrice);
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
				tuanId: id,
				carId: carId,
				tel: $('#mobile').val(),
				name: $('#name').val()
			}

			$.ajax({
				type: 'get',
				data: postData,
				url: ApiUrl + 'SignUp/Add',
				success: function(data) {
					if (!!callback && typeof callback == 'function' && data.Code == 1) {
						alert('报名成功');
					}
				}
			});
		})
	}
})

var testData = {
   "Code"        : 1,
   "Data"        : [
      {
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
   ]
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