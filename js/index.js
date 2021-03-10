//内容头部声明删除
$(".articleImgTop>p").click(function(){
	$(".articleImgTop").css("display","none")
})
setInterval(function(){
	var Left = $(".articleImgTopCon>ul>li").offset().left;
	if(Left>0){
		$(".articleImgTopCon>ul").animate({"margin-left":"-1000px"},1000);
	}else{
		$(".articleImgTopCon>ul").animate({"margin-left":"0px"},1000);
	}
},10000)

