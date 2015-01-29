$(document).on('ready', function(){
	$('.glyphicon-menu-hamburger').click(function(){
	
	  $('.slideDownMenu').slideToggle("slow");

	});
	$('.home').hover(function(){
		$('.home').toggleClass('hoverCSS');
	});
	$('.projects').hover(function(){
		$('.projects').toggleClass('hoverCSS');
	});
	$('.hobbies').hover(function(){
		$('.hobbies').toggleClass('hoverCSS');
	});
	$('.resume').hover(function(){
		$('.resume').toggleClass('hoverCSS');
	});
});


