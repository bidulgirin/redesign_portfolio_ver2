

$(function(){
	//함수 생성> next 버튼 자동 클릭 이벤트
	//function 함수명{실행문}
	
	function autoslide(){
		$("#btnNext").trigger("click"); //강제 이벤트 발생!
		
	}
	//함 수 실 행  setInterval(함수명,시간);
	setInterval(autoslide,3000);
	
	
	
	var img_w=100; //이미지 가로 사이즈
	var img_c=8;   //이미지 전체 갯수
	//초기값 설정
	$(".wrap_img").css("left","-100%");
	
	n=1; //몇번째 슬라이드 인지 알려주는 변수(첫번째)
	
	
	//next(오른쪽)버튼 클릭시
	$('#btnNext').click(function(){
		n++; //한번 클릭할때 마다 n 1씩 증가
		
		if(n==img_c){ //n의 값이 8과 같다면
			n=2; //
			$(".wrap_img").css("left","-100%"); 
		}
		
		$(".wrap_img").stop().animate({
			left:-img_w * n+"%"},500);
			
		$('.roundBtn img').attr("src","img/ico_slider.png"); //속성 값 변경	
		
		if(n==7){ //순환했을때 0번 속성이 바뀌지 않을때! 
			$(".roundBtn img:eq(0)").attr("src","img/ico_slider_on.png");	
			
		}
		$(".roundBtn img:eq("+(n-1)+")").attr("src","img/ico_slider_on.png");	
		
	
	});
	
	 
	
	
	$('#btnPrev').click(function(){
		n--; //한번 클릭할때 마다 n 1씩 감소
		 if(n==-1){ //n의 값이 -1이 되면서 5번째그림이 나와야 하니까
			
			$(".wrap_img").css({left:-img_w*(img_c-2)+"%"}); //6
			n=img_c-3; //5 
		}  //계산식 적어도 되고 그냥 계산해서 적어도 된다!
		
		$(".wrap_img").stop().animate({
			left:-img_w * n+"%"},500);
		
		$('.roundBtn img').attr("src","img/ico_slider.png"); //속성 값 변경	
		
		/* if(n==-1){ //순환했을때 0번 속성이 바뀌지 않을때! 
			$(".roundBtn img:eq(0)").attr("src","img/ico_slider_on.png");	
			
		} */
		$(".roundBtn img:eq("+(n-1)+")").attr("src","img/ico_slider_on.png");		
		
		
		
	}); 
	//라운드 버튼 클릭시
	
	$('.roundBtn li').click(function(){
		
		n=$(this).index()+1;
		$('.wrap_img').stop().animate({left:-img_w * n+"%"});
		
		//눌렀을때 선택 그림으로 변환하는것 
		$('.roundBtn img').attr("src","img/ico_slider.png"); //초기값 지우기가 첫번째
		$('img',this).attr("src","img/ico_slider_on.png"); //선택 라운드 보이기가 그다음
	});
	
	
	
	
	
	
	
	
	
	
	
});