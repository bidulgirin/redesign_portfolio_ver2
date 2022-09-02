$(document).ready(function () {
		
		
	// 스크롤 되면 나오는 네비게이션에 대한 동작
		$('#headerNav').hide();
		$('#topM').hide();
	
	$(window).scroll(function(){
		var contents=$('body .mee');
		
		
		
		if($(this).scrollTop()>=contents.eq(1).offset().top){
			
			$('#headerNav').fadeIn(400);
			$('#topM').fadeIn(400);
			$('#headerNav').css("position","fixed").css("background","rgba(255,255,255,0.7)");
			
		}else{
			
			$('#headerNav').fadeOut(400);
			$('#topM').fadeOut(400);
			
		};
		
		
	
	
		
	});

		//메뉴의 포커스 설정
	$(window).scroll(function(){
		
		var sct=$(window).scrollTop();  //스크롤 된 화면의 top의 값을 구하여 sct변수에 기억하라
		var menu=$('#headerNav li');
		var menuleft=$('#menu li');
		var contents=$('body .mee');
		
		

		
		if(sct>=contents.eq(0).offset().top){
			//offset() 특정 값의 좌표(x,y)값 찾기 /그영역의 top을 구한다
			
			
			menu.removeClass("on");
			menuleft.removeClass("on");
			
			menu.eq(0).addClass("on");
			menuleft.eq(0).addClass("on");
			
		}
		
		if(sct>=contents.eq(1).offset().top){
			
			menu.removeClass("on");
			menu.eq(1).addClass("on");
			
			menuleft.removeClass("on");
			menuleft.eq(1).addClass("on");
			str.fadeIn();
		}
		if(sct>=contents.eq(2).offset().top){
			
			menu.removeClass("on");
			menu.eq(2).addClass("on");
			
			menuleft.removeClass("on");
			menuleft.eq(2).addClass("on");
		}
		if(sct>=contents.eq(3).offset().top){
			
			menu.removeClass("on");
			menu.eq(3).addClass("on");
			
			menuleft.removeClass("on");
			menuleft.eq(3).addClass("on");
		}
		if(sct>=contents.eq(4).offset().top){
			
			menu.removeClass("on");
			menu.eq(4).addClass("on");
			
			menuleft.removeClass("on");
			menuleft.eq(4).addClass("on");
		}	
		
		
		/*
		
		if(sct>=0){
			//offset() 특정 값의 좌표(x,y)값 찾기 /그영역의 top을 구한다
			
			
			menu.removeClass("on");
			menu.eq(0).addClass("on");
		}
		
		if(sct>=900){
			
			menu.removeClass("on");
			menu.eq(1).addClass("on");
		}
		if(sct>=1800){
			
			menu.removeClass("on");
			menu.eq(2).addClass("on");
		}
		if(sct>=2800){
			
			menu.removeClass("on");
			menu.eq(3).addClass("on");
		}
		if(sct>=4550){
			
			menu.removeClass("on");
			menu.eq(4).addClass("on");
		}	*/
	});
	
	//this is where we apply opacity to the arrow
	$(window).scroll( function(){

	  //get scroll position
	  var topWindow = $(window).scrollTop();
	  //multipl by 1.5 so the arrow will become transparent half-way up the page
	  var topWindow = topWindow * 1.5;
	  
	  //get height of window
	  var windowHeight = $(window).height();
		  
	  //set position as percentage of how far the user has scrolled 
	  var position = topWindow / windowHeight;
	  //invert the percentage
	  position = 1 - position;

	  //define arrow opacity as based on how far up the page the user has scrolled
	  //no scrolling = 1, half-way up the page = 0
	  $('.arrow-wrap').css('opacity', position);
		
		
		
	
	});
	
	
  
 
	
	
	
  
  });

