require.config({
	baseUrl:"lib",
	paths:{
		jquery:"jquery",
		backbone:"backbone",
		underscore:"underscore",
		text:"text",
		swiper:"swiper",
		baiduTemplate:"baiduTemplate"
	}
});

require(["jquery","swiper","./router.js","baiduTemplate"],function($){

	Backbone.history.start();
	$('.enter').hide(2000);
	//	rem
	document.documentElement.style.fontSize = innerWidth / 27 + "px"
	onresize = function() {
		document.documentElement.style.fontSize = innerWidth / 27 + "px"
	}

	
})