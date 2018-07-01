//~~~~~~~~~~~~~~~~~~~~~~~选择收货地址~~~~~~~~~~~~~~~~~~~~~~~~~
$(function(){
	
	//激活被选择的收货地址样式
	$(".shippingaddress .check").click(function(){
		$(this).children().css("display","block").parent().parent().siblings().find("img").css("display","none");
	})
})

//~~~~~~~~~~~~~~~~~~~~~~~~编辑收货地址~~~~~~~~~~~~~~~~~~~~~~~~~
$(function(){
	
	$(".shippingaddress .edit").click(function(){
		$(this).parent().find(".content").attr("contenteditable","true").css("color","rgb(255, 147, 129)");
	})
	$(".shippingaddress .content").blur(function(){
		$(this).parent().find(".content").attr("contenteditable","false").css("color","#5c5c5c");
		$(this).parent().find(".phonenumber").text($(this).parent().find(".phonenumber").text().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'));
	})
})

//~~~~~~~~~~~~~~~~~~~~~~~~~手机号码隐藏~~~~~~~~~~~~~~~~~~~~~~~~~~
$(function(){
	
	var reg=/^(13|15|17|18)[0-9]{9}$/;
	$(".shippingaddress .phonenumber").each(function(){
		$(this).text($(this).text().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'));
	});
	
})
