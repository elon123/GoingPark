define(['text!../../tpl/home.html'],function(html){
	function render(){
		// return "<div>首页的内容</div>"
		// $("#tc").html(html);
		//	Swiper
		

		// function hide(){
			// $('.enter').css('display','none')
		// }
		// setTimeout(hide,3000);
		
		//111111111111111111111111111111111111111111
		
			func1(function(){
			//获取地理位置后要做的事情
			$("#tc").html(html);
			// $('.enter').css('display','none')
			var mySwiper = new Swiper('.swiper-container', {
			autoplay: 2000, //可选选项，自动滑动
			loop: true,
			autoplayDisableOnInteraction : false, 
	
			})
			})
		// ))
	
	function func1(callback){
     wx.getLocation({
         type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
         success: function (res) {
             var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
             var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
             var speed = res.speed; // 速度，以米/每秒计
             var accuracy = res.accuracy; // 位置精度
             alert(latitude+"|"+longitude);
             callback&&callback();
         },
         fail:function(){
           alert('fail');
         }
     });
 }
	
}	
	
	
	return{
		render:render
	}
})