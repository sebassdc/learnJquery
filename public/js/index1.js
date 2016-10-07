$(document).ready(function(){

	// BASIC ANIMATIONS
	//$('.box:first').hide(500).delay(2000).show(500);
	//$('.box:first').slideUp(500).slideDown(500);
	//$('.box:first').fadeOut(500);
	//$('.box:first').animate({height: '100px'}, 3000);
	//$('.box:first').animate({bottom: '100px',  left: '200px'}, 800);

	// Index filters
	 //$('p:last').css('border', '4px solid red');

	 //relationship filters
	 //$('h2:has(span)').css('border', '4px solid red');
	 //$('.box:empty').css('border', '4px solid red');

	 //atributes filters
	 //$('p[class=lead]').css('border', '4px solid red');
	 $('a[href$=".co.uk"]').css('border', '4px solid red');
});
