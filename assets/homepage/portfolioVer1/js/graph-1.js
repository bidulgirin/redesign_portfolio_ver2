
$(function(){
	
	



function p1(){
  var perNum = 90;
	$('.photoshop .second.circle').circleProgress({
	  value: perNum/100,
	startAngle:300,
	size:400,
	fill:{
	  gradient:["#fff","#fff"],
	gradientAngle: Math.PI / 2
	},
	animation:{
	  duration:2200,
	easing:"swing"
	},
	lineCap : "butt",
	reverse:true

	}).on('circle-animation-progress', function(event, progress) {
	$(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
	});
}

function p2(){
  var perNum = 95;
$('.illust .second.circle').circleProgress({
	  value: perNum/100,
	startAngle:300,
	size:400,
	fill:{
	  gradient:["#fff","#fff"],
	gradientAngle: Math.PI / 2
	},
	animation:{
	  duration:2200,
	easing:"swing"
	},
	lineCap : "butt",
	reverse:true

	}).on('circle-animation-progress', function(event, progress) {
	$(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
	});
}
function p3(){
  var perNum = 85;
$('.html .second.circle').circleProgress({
	  value: perNum/100,
	startAngle:300,
	size:400,
	fill:{
	  gradient:["#fff","#fff"],
	gradientAngle: Math.PI / 2
	},
	animation:{
	  duration:2200,
	easing:"swing"
	},
	lineCap : "butt",
	reverse:true

	}).on('circle-animation-progress', function(event, progress) {
	$(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
	});
}
function p4(){
  var perNum = 80;
$('.css .second.circle').circleProgress({
	  value: perNum/100,
	startAngle:300,
	size:400,
	fill:{
	  gradient:["#fff","#fff"],
	gradientAngle: Math.PI / 2
	},
	animation:{
	  duration:2200,
	easing:"swing"
	},
	lineCap : "butt",
	reverse:true

	}).on('circle-animation-progress', function(event, progress) {
	$(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
	});
}
function p5(){
  var perNum = 30;
$('.javascript .second.circle').circleProgress({
	  value: perNum/100,
	startAngle:300,
	size:400,
	fill:{
	  gradient:["#fff","#fff"],
	gradientAngle: Math.PI / 2
	},
	animation:{
	  duration:2200,
	easing:"swing"
	},
	lineCap : "butt",
	reverse:true

	}).on('circle-animation-progress', function(event, progress) {
	$(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
	});
}
function p6(){
  var perNum = 70;
$('.jquery .second.circle').circleProgress({
	  value: perNum/100,
	startAngle:300,
	size:400,
	fill:{
	  gradient:["#fff","#fff"],
	gradientAngle: Math.PI / 2
	},
	animation:{
	  duration:2200,
	easing:"swing"
	},
	lineCap : "butt",
	reverse:true

	}).on('circle-animation-progress', function(event, progress) {
	$(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
	});
}

function p7(){
  var perNum = 70;
$('.autocad .second.circle').circleProgress({
	  value: perNum/100,
	startAngle:300,
	size:400,
	fill:{
	  gradient:["#fff","#fff"],
	gradientAngle: Math.PI / 2
	},
	animation:{
	  duration:2200,
	easing:"swing"
	},
	lineCap : "butt",
	reverse:true

	}).on('circle-animation-progress', function(event, progress) {
	$(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
	});
}
function p8(){
  var perNum = 60;
$('.max .second.circle').circleProgress({
	  value: perNum/100,
	startAngle:300,
	size:400,
	fill:{
	  gradient:["#fff","#fff"],
	gradientAngle: Math.PI / 2
	},
	animation:{
	  duration:2200,
	easing:"swing"
	},
	lineCap : "butt",
	reverse:true

	}).on('circle-animation-progress', function(event, progress) {
	$(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
	});
}
function p9(){
  var perNum = 70;
$('.Rhinoceros .second.circle').circleProgress({
	  value: perNum/100,
	startAngle:300,
	size:400,
	fill:{
	  gradient:["#fff","#fff"],
	gradientAngle: Math.PI / 2
	},
	animation:{
	  duration:2200,
	easing:"swing"
	},
	lineCap : "butt",
	reverse:true

	}).on('circle-animation-progress', function(event, progress) {
	$(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
	});
}

	/*	//메뉴의 포커스 설정
	$(window).scroll(function(){
		var viewportHeight = $(window).height()
		var sct=$(window).scrollTop();
		
		var chartLand=$('#skill').offset().top;
		var contents=$('.me');
		
		
		
		
		
	
		
		function chart(){
			p1();
			p2();
			p3();
			p4();
			p5();
			p6();
			p7();
			p8();
			p9();
	}	
		if(sct<=chartLand && sct>=chartLand){
			
			chart();
		}

	});*/

	function chart(){
			p1();
			p2();
			p3();
			p4();
			p5();
			p6();
			p7();
			p8();
	p9();
	
	}
	// 드디어 한번만 재생시키는걸 찾아냈다
	function scrollEvent() {
		  var hT = $('#skill').offset().top,
			  hH = $('#skill').outerHeight(),
			  wH = $(window).height(),
			  wS = $(this).scrollTop();
		  if (wS > (hT+hH-wH-950)){
			 
			 chart();
			
			 window.removeEventListener("scroll", scrollEvent);
			  
		  }
	}
	
	window.addEventListener("scroll", scrollEvent);



	

	
	
	
});


























