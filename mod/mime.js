define(['text!../../tpl/mime.html'], function(mime) {
	function render() {
		$("#tc").html(mime);
		// return "<div>首页的内容</div>"
		
		$('#tease').click(function(){
			$('#tease-div').css('display','block')
			$('#tease-container').css('display','block')
		})
		
		$('.tease-span').click(function(){
			$('#tease-div').css('display','none')
			$('#tease-container').css('display','none')
		})
	}
	
	
	return{
		render:render
	}
})