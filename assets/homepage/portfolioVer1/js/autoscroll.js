
$(function(){

$(window).on("scroll",function(){
			//$(window).scroll(function(){}); 와 같다
			var ht=$(window).height();  //창의 높이 값을 구해라
			
			var scroll=$(window).scrollTop;  //scroll 이라는 함수에게 맨위로 올라가는것을 입력한다
			
			$('.sc').mousewheel(function(event,delta){ //한페이지의단위에 마우스 휠을 하면~
				//$('.sc').on("mousewheel",function(){}); 와 같다
				if(delta>0){ //마우스 휠을 위쪽으로 드래그 ↑
					var prev=$(this).prev().offset().top; //offset() 특정값의 좌표 (x,y)의 위치값을 찾는다
					
					$("html, body").stop().animate({
						"scrollTop":prev},1000,"easeOutSine"); //animate({속성:값},시간);
				}else if(delta<0){
					
					var next=$(this).next().offset() .top;
					
					$("html, body").stop().animate({
						"scrollTop":next},1000,"easeOutSine"); 
						
				}
			});
		
	});
	});