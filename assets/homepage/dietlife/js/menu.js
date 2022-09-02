$(function(){
	   
	
		//전체메뉴동작 
		
		
			 $('.hamberger-img').click(function(){
				
				$('.hamberger_Menu').animate({
					top:'0',
					left:'0px'},500);
				
				$("#black").css("display","block");
				
				$('.hamberger_Menu').addClass('wid');
				
				});				
				
				
			
			// 이영역을 외의 클릭하면 꺼지는 거
			
			$('#black').mouseup(function(){
				
				$('.hamberger_Menu').animate({
					left:'-500px'
				
				});
				
			});
			
			// 이영역을 벗어나면 꺼지는 거
			$('.hamberger_Menu').mouseleave(function(){
				
				$('.hamberger_Menu').animate({
					left:'-500px'
				
				});
				$('.mobile_Menu').animate({
					left:'-500px'
				
				});
				$("#black").css("display","none");
			});
			// 닫기 버튼을 누르면 꺼지는 거
			
			$('.closeMenu').mouseup(function(){
				
				$('.hamberger_Menu').animate({
					left:'-500px'
				
				});
			
			});
			
			
			
			
			//모바일 전체 메뉴 동작
				
				//초기값
			

			$('.allMenu').click(function(){
				
				$(".mobile_Menu").animate({
					left:'0px'
				
				});
				
				
					
			});
			
			$('#black').mouseup(function(){
				
				$('.mobile_Menu').animate({
					left:'-500px'
				
				});
				$("#black").css("display","none");
			});
			
			$('.click').mouseup(function(){
				
				$('.mobile_Menu').animate({
					left:'-500px'
				
				});
			
			});
			$('#black').mouseup(function(){
				
				$('.mobile_Menu').animate({
					left:'-500px'
				
				});
			
			});
			
			$('.mobile_Menu').mouseleave(function(){
				
				$('.mobile_Menu').animate({
					left:'-500px'
				
				});
				
				$("#black").css("display","none");
			});
			
			
			$('.closeMenu').click(function(){
				
				$(".mobile_Menu").animate({
					left:'-500px'
				
				});
				
				$("#black").css("display","none");
			});
		//인스타그램 버튼 눌렀을때 동작
			
			$(".ViewMore button").click(function(){
				
				$(this).hide();
				$(".opacity50").hide();
				$(".wrapPic").css("height","auto");
			
			});
			
		
		
			
		
		
		
		
		 //메뉴가 나타날시 스크롤 하지 말아라~ (pc)
		 $('.hamberger_Menu').on('scroll touchmove mousewheel', function(e){

			e.preventDefault();

			e.stopPropagation(); 

		return false;

		}) 
		
		
		//메뉴가 나타날시 뒷화면이 검정색이 되어라
		//그 검정색을 스크롤 되지 말어라
		 $('#black').on('scroll touchmove mousewheel', function(e){

			e.preventDefault();

			e.stopPropagation(); 

		return false;

		})
		
		//메뉴가 나타날시 스크롤 하지 말아라~ (모바일/태블릿)
		/* $('.mobile_Menu',).on('scroll touchmove mousewheel', function(e){

			e.preventDefault();

			e.stopPropagation(); 

		return false; 

		});*/


		});  
		 
		
	
	