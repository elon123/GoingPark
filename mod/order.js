define(['text!../../tpl/order.html'], function(order) {
	function render() {
		$("#tc").html(order);
		// return "<div>首页的内容</div>"

//		$(document).ready(function() {
//			$("#inbox").click(function() {
//				$(".box").animate({
//					left: "0"
//				}, 500)
//			})
//			$(".btn a").click(function() {
//				$(".box").animate({
//					left: "100%"
//				}, 500)
//			})
//		})
	}

	return {
		render: render
	}
})