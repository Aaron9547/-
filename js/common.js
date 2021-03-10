// 头部广告删除
$(".top_pc>span").click(function(){
	$(".top_pc").css("display","none");
	$(".articleImg").css("margin-top","80px")
})
// 导航栏鼠标移入移出效果
$(".seach>span").click(function(){
	$(".seach>input").blur();
})
//input聚焦失焦
$(".seach>input").focus(function(){
	$(".seach>span").css("display","block");
	$(".inputNav").css("display","block");
})
$(".seach>input").blur(function(){
	$(".seach>span").css("display","none");
	$(".inputNav").css("display","none");
})


//搜索标签历史记录
$(".seach>input").keydown(function(event){
	// console.log(event.keyCode);
	if(event.keyCode==13){
		var new_li = $('<li><a href="">'+$(".seach>input").val()+'</a></li>')
		$(".seachKey").prepend(new_li);
	}
})


