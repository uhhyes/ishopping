//~~~~~~~~~~~~~~~~~~~~~~查看更多筛选条件~~~~~~~~~~~~~~~~~~~~~~
$(function(){
	var num=1;
	$(".select .tips").click(function(){
		$(".select .hide").slideToggle(function(){
			$(".select .tips img").css({
//				当点击更多条件时,箭头旋转
				transform:"rotate("+(180*num++)+"deg)"
			})
		});
	})
})

//~~~~~~~~~~~~~~~~~~~~~~~~~添加购物车~~~~~~~~~~~~~~~~~~~~~~~~~~
$(function(){
	
	$(".goodsplace .needgoods .goodscontent .addshopcart").click(function(){
		if(!window.localStorage){
			alert("本浏览器不支持localStorage")
			return false;
		}else{
			var storage=window.localStorage;
			var src=$(this).parent().parent().find("img").attr("src");
			var name=$(this).parent().parent().find("p a").text();
			var price=$(this).parent().parent().find(".price").text();
			storage.setItem("src",src);
			storage.setItem("name",name);
			storage.setItem("price",price);
		}
	})
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~下一页~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(function(){
	
	var num=0;
	$(".goodsplace .prev").click(function(){
		//下一页按钮激活
		$(".goodsplace .next").css("background-color","#f90");
		//处于第一页时,按钮变灰色
		if($(".goodsplace .nowpage").text()<=1){
			$(this).css("background-color","#797979");
			return ;
		}else{
			num=(++num)%2;
			$(".goodsplace .needgoods .goodscontent").eq(num).css("display","block").siblings().css("display","none");
			$(".goodsplace .nowpage").text(parseInt($(".goodsplace .nowpage").text())-1);
		}
	})
	$(".goodsplace .next").click(function(){
		//上一页按钮激活
		$(".goodsplace .prev").css("background-color","#f90");
		//翻到最后一页时,按钮变灰色
		if(parseInt($(".goodsplace .nowpage").text())>=parseInt($(".goodsplace .needgoods .allpage").text())){
			$(this).css("background-color","#797979");
			return ;
		}else{
			num=(++num)%2;
			$(".goodsplace .needgoods .goodscontent").eq(num).css("display","block").siblings().css("display","none");
			$(".goodsplace .nowpage").text(parseInt($(".goodsplace .nowpage").text())+1);
		}
	})
})
