
	$.ajax('../data/p22.json',
				{success:function (e) {
				  var arr=e.data
				for (var i=0;i<arr.length;i++) {
						$('.main')[0].innerHTML+=
						'<div class="main-div">'
							+'<a href="../tpl/particulars.html">'+'<img src='+arr[i].img+' class="main-img"/>'+'</a>'
							+'<p class="main-p1">'+arr[i].name+'</p>'
							+'<p class="main-p2">'+arr[i].address+'<span>'+arr[i].dist+'公里'+'</span>'+'</p>'
							+'<img src="../img/border.gif" class="main-img2"/>'
							+'<img src="../img/map.gif" class="main-img3"/>'
						+'</div>'
					}
				}})