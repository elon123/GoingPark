<?php
session_start();
require "./JSSDK.php";
$jssdk = new JSSDK("wx234791bdd3de2e6f", "155db235d0f8e2069912505dcf24e5d0 ");
$signPackage = $jssdk->getSignPackage();
// print_r($_SESSION);
?>
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,width=device-width,user-scalable=no">
    <meta charset="utf-8">
    <title>首页</title>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="css/swiper.min.css" />
    <link rel="stylesheet" type="text/css" href="css/reset.css" />
    <link rel="stylesheet" type="text/css" href="css/home.css" />
    <link rel="stylesheet" type="text/css" href="css/leyuan.css" />
    <link rel="stylesheet" type="text/css" href="css/order.css" />
    <link rel="stylesheet" type="text/css" href="css/mime.css" />
    <script src="lib/jquery.js" type="text/javascript" charset="utf-8"></script>
    <script src="lib/loadimg.js" type="text/javascript" charset="utf-8"></script>

    <style type="text/css">
      #bot{
        width: 100%;
        height: 80px;
        position: fixed;
        bottom: 0;left: 0;
        background: white;
        z-index: 5;
      }
      #bot a{
        display: block;
        float: left;
        width: 25%;
        height: 100%;
        line-height: 50px;
        text-align: center;
        text-decoration: none;
      }
      #bot p{
        line-height: 30px;
        text-align: center;
      }
      .footer-top{
        width: 100%;
        height: 80px;
      }
      #bot img{
        width: 30px;
        height: 30px;
        display: block;
        margin: 0 auto;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div id="tc"></div>

    <div class="footer-top"></div>

    <div id="bot">
      <a href="#/home" class="col-xs-3">
        <img src="img/logo1b.gif" alt="">
        <p>首页</p>
      </a>
      <a href="#/leyuan" class="col-xs-3">
        <img src="img/logo2b.gif" alt="">
        <p>乐园</p>
      </a>
      <a href="#/order" class="col-xs-3">
        <img src="img/logo3b.gif" alt="">
        <p>乐享卡</p>
      </a>
      <a href="#/mime" class="col-xs-3">
        <img src="img/logo4b.gif" alt="">
        <p>我的</p>
      </a>
    </div>
    
    <div class="enter">
		<img src="img/enter.gif" alt="enter" />
			<ul class="enter-ul">
				<img onclick="func1()" src="img/map.gif"/>
			</ul>
		</div>
    

        
        <script type="text/javascript">
          $(document).ready(function  () {
            $("#bot a").hover(function  () {
              $(this).css("color","red");
              $(this).siblings().css("color","#666");
              var num = $(this).index()+1;
              console.log(num)
              $("#bot img").eq(0).attr("src","img/logo1b.gif");
              $("#bot img").eq(1).attr("src","img/logo2b.gif");
              $("#bot img").eq(2).attr("src","img/logo3b.gif");
              $("#bot img").eq(3).attr("src","img/logo4b.gif");
              $("#bot img").eq(num-1).attr("src","img/logo"+num+".gif");
              
            })
          })
        </script>
    

    <script type="text/javascript" src="lib/require.js" data-main="main.js"></script>
    <!--data-main="main.js" 可以去掉下面的这个script
    <script type="text/javascript" src="main.js"></script>-->
  </body>


<script>
  
  wx.config({
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: '<?php echo $signPackage["timestamp"];?>',
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      'getLocation'
    ]
  });
  wx.error(function(res){
      alert(res);
    })

  // wx.ready(function(){

</script>
</html>