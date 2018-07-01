//~~~~~~~~~~~~~~~~~~~~~~选择商品颜色~~~~~~~~~~~~~~~~~~~~~
$(function(){
	
	var index=0;
	//商品不同颜色的图片切换
	$(".goods .colors .color").click(function(){
		index=$(this).index()-1;
		//对应颜色的图标加上激活样式
		$(this).addClass("active5").siblings().removeClass("active5");
		//显示对应的大图
		$(".goods .goodsimg .bigimg img").css("display","none");
		$(".goods .goodsimg .bigimg").eq(index).children().eq(0).css("display","block").siblings().css("display","none").parent().css("display","block").siblings().css("display","none");
		//显示对应的一些细节图
		$(".goodsimg .smallimgs").eq(index).css("display","block").siblings().css("display","none");
	})
	
//~~~~~~~~~~~~~~~~~~~~~~点击查看细节图~~~~~~~~~~~~~~~~~~~~~~
	var index2=0;
	$(".goodsimg .smallimgs li").click(function(){
		index2=$(this).index();
		$(".goods .goodsimg .bigimg img").css("display","none");
		$(".goods .goodsimg .bigimg").eq(index).children().eq(index2).css("display","block").siblings().css("display","none");
	})
	
})

//~~~~~~~~~~~~~~~~~~~~~~选择购买的版本~~~~~~~~~~~~~~~~~~~~~
$(function(){
	
	//对应版本的样式激活
	$(".goods .versions .version").click(function(){
		$(this).addClass("active4").siblings().removeClass("active4");
	})
	
})

//~~~~~~~~~~~~~~~~~~~~~~选择购买数量~~~~~~~~~~~~~~~~~~~~~
$(function(){
	
	//需要的数量
	var num=$(".goods .number .num ").text();
	//减少一件
	$(".goods .number .cut").click(function(){
		needprice=$(".goods .number .num ").text();
		//如果需要的数量等于1，则不允许减少购买数量，至少购买一个
		if(parseInt(needprice)<=1){
			return ;
		}else {
			$(".goods .number .num ").text(--num);
		}
	})
	//增加一件
	$(".goods .number .add").click(function(){
		$(".goods .number .num ").text(++num);		
	})
	
})

//~~~~~~~~~~~~~~~~~~~~~·推荐商品换一换~~~~~~~~~~~~~~~~~~~~~~
$(function(){
	
	var num=0;
	$(".goods .other .title div").click(function(){
		num=(++num)%2;
		$(".goods .other .box .goodscontent").eq(num).css("display","block").siblings().css("display","none");
	})
})



//~~~~~~~~~~~~~~~~~~~~~~跳到指定区域~~~~~~~~~~~~~~~~~~~~~
$(function(){
	
	//点击商品评论
	$(".more .introduction .title .type").eq(2).click(function(){
		//获取评论区域的滚动条高度
		var top=$(".more .aftermarket").eq(2).offset().top;
		$(document).scrollTop(top);
	})
	//点击售后保障
	$(".more .introduction .title .type").eq(3).click(function(){
		//获取评论区域的滚动条高度
		var top=$(".more .aftermarket").eq(0).offset().top;
		$(document).scrollTop(top);
	})
	
})
