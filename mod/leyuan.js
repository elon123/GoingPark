define(['text!../../tpl/leyuan.html'], function(leyuan) {
	function render() {
		$("#tc").html(leyuan);
		// return "<div>首页的内容</div>"
(function classify(){
		var xhr=new XMLHttpRequest();
		xhr.open("GET","data/classify.json",true);
		xhr.send(null);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var ojson=JSON.parse(xhr.responseText)
				var jso=ojson.classify;
				var divClassify=document.createElement("div");
				for(var i=0;i<jso.length;i++){
					divClassify.setAttribute('class','divClassify')
				
					var pClassify=document.createElement('span')
					pClassify.setAttribute("class","pClassify")
					pClassify.innerHTML=jso[i].name
					
					var aClassify=document.createElement("a")
					aClassify.setAttribute("href","javascript:avoid(0)")
					aClassify.setAttribute("class","aClassify")
					aClassify.appendChild(pClassify)
					console.log(1)
					divClassify.appendChild(aClassify)
				}//for-end
					var classifyLi=document.getElementsByClassName("classify")[0];
					classifyLi.appendChild(divClassify)
			}
		}
	})()
	//分类的隐藏和出现
	$(function(){
		$(".classify-li").click(function(){
			$("#sortBox").css("display","none")
			$(".divAllCity").css("display","none")
			$(".divClassify").toggle()
			$(".mask").toggle()
		})
	})
	
//	(function allCity(){
		var xhr=new XMLHttpRequest();
		xhr.open("GET","data/allCity.json",true);
		xhr.send(null);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var ojson=JSON.parse(xhr.responseText)
				var jso=ojson.allCity;
				var divAllCity=document.createElement("div");
				for(var i=0;i<jso.length;i++){
					divAllCity.setAttribute('class','divAllCity')
				
					var pAllCity=document.createElement('span')
					pAllCity.setAttribute("class","pAllCity")
					pAllCity.innerHTML=jso[i].name
					
					var aAllCity=document.createElement("a")
					aAllCity.setAttribute("href","javascript:avoid(0)")
					aAllCity.setAttribute("class","aAllCity")
					aAllCity.appendChild(pAllCity)
					console.log(2)
					divAllCity.appendChild(aAllCity)
				}//for-end
					var AllCity=document.getElementsByClassName("classify")[0];
					AllCity.appendChild(divAllCity)
			}
		}
//	})()

	//显示与隐藏

$(function(){
	$(".classify-li2").click(function(){
		$(".divClassify").css("display","none")
		$("#sortBox").css("display","none")
		$(".divAllCity").toggle()
		$(".mask").toggle()
	})
})


$(function(){
	$(".classify-li3").click(function(){
		$(".divClassify").css("display","none")
		$(".divAllCity").css("display","none")
		$("#sortBox").toggle()
		$(".mask").toggle()
	})
})
//		bindEvent();
	}
	
	return {
		render: render
	}
})