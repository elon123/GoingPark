define(['text!../../tpl/home.html'],function(html){

	function render(){

		$('#doc').html(html);-
		bindEvent();
		
	}

	function rendItem(data){
		var tpl = 
		'<div class="swiper-slide">\
			<img src="'+data.img+'" class="col-xs-12 img-responsive"/>\
		</div>';
		return tpl;
	}

	function renderImgItem(data){
		var tpl = 
		'<div class="row">
			<div class="col-xs-12">
				<a href="###"><img src="'+data.img+'" class="img-responsive"/></a>
			</div>
		</div>';
		return tpl;
	}

	function renderList(){
		var data = [{img:1},{img:2}];
		var html = [];
		for(var i in data){
			html.push(renderImgItem(data[i]));
		}
		$('#doc').html(html.join(' '))

	}

	function bindEvent(){

	}

	return {
		render:render
	}
})