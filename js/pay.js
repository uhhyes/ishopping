//~~~~~~~~~~~~~~~选择支付方式,小圆点图片出现,模拟选中~~~~~~~~~~~~~~~~~~
$(function(){
	
	$(".payorder .payway .internet li").click(function(){
		$(this).find(".check").css("display","block").parent().siblings().find(".check").css("display","none");
		//当点击非银行支付时,取消银行支付的激活样式
		$(".payorder .payway .bank li").removeClass("checkbank");
	})
	$(".payorder .payway .bank li").click(function(){
		$(this).addClass("checkbank").siblings().removeClass("checkbank");
		//当点击银行支付时,取消非银行支付的激活样式
		$(".payorder .payway .internet li .check").css("display","none");
		$(".payorder .morebank li").removeClass("checkbank");
	})
	
   //获取屏幕宽高 做遮罩层
    var width=$(window).width();
    var height=$(window).height();
    $(".payorder .bankbox").width(width);
    $(".payorder .bankbox").height(height);
    //点击更多银行
    $(".payorder .payway .bank #more").click(function(){
	//当点击更多银行时,已被选中的银行的激活样式取消
    	$(".payorder .payway .bank li").removeClass("checkbank");
    	//更多银行的div出现
   		$(".payorder .bankbox").css("display","block");
    })
    $(".payorder .morebank li").click(function(){
		$(this).addClass("checkbank").siblings().removeClass("checkbank");
	})
	//关闭更多银行
    $(".payorder .morebank .close").click(function(){
   		$(".payorder .bankbox").css("display","none");
    })
  
})
