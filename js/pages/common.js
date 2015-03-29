// 当前的城市Id
var ApiUrl = 'http://mobileapi.uumaiche.com/';
var CityId = $.cookie('CityId') || 1;//泉州
var CityName = $.cookie('CityName') || '泉州';//泉州
$.cookie('CityName', CityName);
$.cookie('CityId', CityId);

function gotoUrl(url){
	window.location.href = url;
}

$.hash = {
	getUrlParam : function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
}

$.errorEvent = function(){
	alert('服务器请求失败');
}
//正则表达式
var re = /^1\d{10}$/;

$(function(){
	$('.topHeader span').text(CityName);
})