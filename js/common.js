//~~~~~~~~~~~~~~~~查看分类的商品~~~~~~~~~~~~~~~~~
$(function(){
	$(".header .nav .types>li").eq(0).mouseover(function(){
		$(this).children().css("display","block");
		$(this).find(".type").mouseover(function(){
			$(this).find(".shops").css("display","block").parent().siblings().find(".shops").css("display","none");
		}).mouseleave(function(){
			$(this).find(".shops").css("display","none");
		})
	}).mouseleave(function(){
		$(this).children().css("display","none");
	})
//~~~~~~~~~~~~总商品类型导航条样式
	$(".header .nav .types .other").mouseover(function(){
		$(this).addClass("active3").siblings().removeClass("active3");
	}).mouseleave(function(){
		$(this).parent().children().eq(1).addClass("active3").siblings().removeClass("active3");
	})
//~~~~~~~~~~~~专区商品类型导航条样式
	$(".goods .goodstype menu div").mouseover(function(){
		$(this).addClass("active2").siblings().removeClass("active2");
	}).mouseleave(function(){
		$(this).parent().children().eq(0).addClass("active2").siblings().removeClass("active2");
	})
	
})