//~~~~~~~~~~~~~~~~返回顶部~~~~~~~~~~~~~~~~~
$(function(){
    $(".fly .totop").click(function(){
        $("html,body").animate({scrollTop:0}, 500);
    });
})
//~~~~~~~~~~~~~~~~查看分类的商品~~~~~~~~~~~~~~~~~
$(function(){
	$(".header .nav .types>li .type").mouseover(function(){
		$(this).children().css("display","block").siblings().children().css("display","none");
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
	});
})
//~~~~~~~~~~~~~~~~~~~轮播~~~~~~~~~~~~~~~~~~~
$(function(){
	var isRun=true;
    var imgs=$('.imgsbox .imgs');
	var index=0;
//~~~~~~~~~~~自动播放设置
	var autoPlay=setInterval(function(){   //自动播放下一张，2秒一次
		next();
	},3000)
//	$('.banner .bannerbox').mouseover(function(){   //鼠标放到轮播图上停止自动播放
//		clearInterval(autoPlay);
//	}).mouseleave(function(){       //鼠标离开轮播图开始自动播放
//		autoPlay=setInterval(function(){
//			next();
//		},3000);
//	})

//~~~~~~~~~~~下一张
	function next(){
		isRun=false;
		index++;
		if(index >= imgs.length){
			index=0;
		}
		chang_list(index)
		$('.imgsbox').animate({left:-860},1000,function(){
			$(this).css({left:0});
			$(this).append($('.imgsbox .imgs').first());
			isRun=true;
		})
	}
//~~~~~~~~~~~上一张
	function prev(){
		isRun=false;
		index--;
		if(index<0){
			index=imgs.length-1;
		}
		chang_list(index)
		$('.imgsbox').prepend($('.imgsbox .imgs').last());
		$('.imgsbox').css('left',-860).animate({
			left:0
		},1000,function(){
			isRun=true;
		})
	}
//~~~~~~~~~~~绑定按钮事件	
	$('.banner .right').click(function(){
		if(isRun){
			next();
		}
	})
	$('.banner .left').click(function(){
		if(isRun){
			prev();
		}
	})
	function chang_list(index){       //小圆点变换
		$('.banner .index_list li').eq(index).addClass('active').siblings().removeClass('active');
	}
})
	
//~~~~~~~~~~~~~~~~~~~~~~~~~~商品类型切换~~~~~~~~~~~~~~~~~~~~~~~~~
$(function(){
	
	var index=0;
	$(".goods .goodstype menu div").mouseover(function(){
		index=$(this).index();
		//鼠标放到类型标题上,对应的商品出现
		$(this).parent().parent().find(".goodscontent").eq(index).css("display","block").siblings().css("display","none");
		$(this).parent().parent().find(".goods .goodstype .goodscontent").eq(index).css("display","block").siblings().css("display","none");
	})
		//鼠标离开商品专区区域，默认显示第一个标题的内容
	$(".goods .goodstype").mouseleave(function(){
		$(this).find("div").eq(0).addClass("active2").siblings().removeClass("active2");
		$(this).find(".goodscontent").eq(0).css("display","block").siblings().css("display","none");
	})
})
	
