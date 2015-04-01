// 当前的城市Id
var ApiUrl = 'http://m.uumaiche.com/';
var CityId = $.cookie('CityId') || 239; //泉州
var CityName = $.cookie('CityName') || '泉州'; //泉州
$.cookie('CityName', CityName);
$.cookie('CityId', CityId);

function gotoUrl(url) {
	window.location.href = url;
}

$.hash = {
	getUrlParam: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	}
}

$.errorEvent = function() {
		alert('服务器请求失败');
	}
	//正则表达式
var re = /^1\d{10}$/;

$(function() {
	$('.topHeader span').text(CityName);

	//qna toggle list
	var opt = 0;
	$('.question .slideCont').eq(opt).slideDown();
	$('.question h3').eq(opt).find('.js-close').hide();
	$('.question h3').eq(opt).find('.js-open').show();
	$('.question h3').each(function(i, item) {
		$(this).click(function() {
			$('.question .slideCont').eq(i).slideDown();
			$('.question h3').eq(i).find('.js-close').hide();
			$('.question h3').eq(i).find('.js-open').show();
			$('.question .slideCont').eq(opt).slideUp();
			$('.question h3').eq(opt).find('.js-close').show();
			$('.question h3').eq(opt).find('.js-open').hide();
			opt = i;
		})
	})
})

