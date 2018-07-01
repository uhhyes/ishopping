//~~~~~~~~~~~~~~~~~~~~~~~~~~~全选~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(function(){
	//点击全选
	$(".shopcartgoods menu .allcheck input").click(function(){
		//如果是选中状态，就选中。
		if($(this).prop("checked")==true){
			$(".shopcartgoods menu .checkgoods input").prop("checked",true);
			//另外一个全选执行对应动作
			$(".shopcartgoods menu .allcheck input").prop("checked",true);
		}else{
			//如果取消全选，选项也取消全选
			$(".shopcartgoods menu .checkgoods input").prop("checked",false);
			//另外一个全选执行对应动作
			$(".shopcartgoods menu .allcheck input").prop("checked",false);
		}
		worknum();
		workprice();
	})
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~单选~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(function(){
	
	$(".shopcartgoods menu .checkgoods input").click(function(){
		//取消全选的勾选
		$(".shopcartgoods menu .allcheck input").prop("checked",false);
		worknum();
	})
})

//~~~~~~~~~~~~~~~~~~~~~~~~~·商品选择数量~~~~~~~~~~~~~~~~~~~~~~~~~··
$(function(){
	
	//减少一件
	$(".shopcartgoods .goods .number .cut").click(function(){
		var needprice=$(this).parent().find(".num").text();
		//如果需要的数量等于1，则不允许减少购买数量，至少购买一个
		if(parseInt(needprice)<=1){
			return ;
		}else {
			$(this).parent().find(".num").text(parseInt($(this).parent().find(".num").text())-1);
			workprice();
		}
	})
	//增加一件
	$(".shopcartgoods .goods .number .add").click(function(){
		$(this).parent().find(".num").text(parseInt($(this).parent().find(".num").text())+1);	
		workprice();
	})
})

//~~~~~~~~~~~~~~~~~~~~~~~~~计算购买的商品价格~~~~~~~~~~~~~~~~~~~~~
$(function(){
	
	$(".shopcartgoods menu .checkgoods input").click(function(){
		workprice();
	})
})

//~~~~~~~~~~~~~~~~~~~~~~~计算选中的商品数量~~~~~~~~~~~~~~~~~~~~~~~~
function worknum(){
	$(".shopcartgoods .showgoodsnum").text($("input[name='getit']:checked").length);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~计算需要支付的价格~~~~~~~~~~~~~~~~~~~~~
function workprice(){
	//商品单价
	var thisprice=0;
	//购买的数量
	var num=0;
	//需要支付的价格
	var allprice=0;
	$(".shopcartgoods menu .checkgoods input").each(function(){
		if($(this).is(":checked")){
			num=parseFloat($(this).parent().parent().find(".price").text());
			thisprice=parseInt($(this).parent().parent().find(".num").text());
			allprice+=num*thisprice;
		}
	})
	$(".shopcartgoods menu .allprice .price").text(allprice+".00");
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~删除单个商品~~~~~~~~~~~~~~~~~~~~~~~~~~
$(function(){
	
	$(".shopcartgoods .goods .operating ul .delgoods").click(function(){
		$(".shopcartgoods menu .allcheck input").prop("checked",false);
		$(this).parent().parent().parent().remove();
		worknum();
		workprice();
	})
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~删除选中的商品~~~~~~~~~~~~~~~~~~~~~~~~~~
$(function(){
	$(".shopcartgoods .delcheckgoods").click(function(){
		$(".shopcartgoods menu .allcheck input").prop("checked",false);
		$(".shopcartgoods menu .checkgoods input").each(function(){
			if($(this).is(":checked")){
				$(this).parent().parent().remove();
			}
		})
		worknum();
		workprice();
	})
	
})

//~~~~~~~~~~~~~~~~~~~~~查看商品上一页/下一页~~~~~~~~~~~~~~~~~~~~~
$(function(){
	var click=true;
	//点击下一页
	$(".guessyoulike .title .right .next").click(function(){
		if(click){
			click=false;
			$(".guessyoulike .goodsbox .goodscontent").animate({
				marginTop:-251
			},1000,function(){
				$(".guessyoulike .goodsbox").css("margin-top",0);
				click=true;
//				$(".guessyoulike .goodsbox").append($(".guessyoulike .goodsbox .goodscontent").first());
			})
		}
		
	})
	$(".guessyoulike .title .right .prev").click(function(){
		if(click){
			click=false;
//			$(".guessyoulike .goodsbox").prepend($(".guessyoulike .goodsbox .goodscontent").last());
			$(".guessyoulike .goodsbox .goodscontent").animate({
				marginTop:0
			},1000,function(){
//			$(".guessyoulike .goodsbox").css("margin-top",0);
				click=true;
			})
		}
	})
})

