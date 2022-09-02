

$(function(){
	var device = $('.special');
	var offset = 300;
	var deviceOST = device.offset().top - offset;

	$(window).scroll(function(){
		if($(this).scrollTop() > deviceOST)
		device.fin('.special ul li').addClass('animation')
	});
	
	
	
	
	
	
});