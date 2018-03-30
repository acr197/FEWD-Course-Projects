/* Goal: reveal from the side (CSS: the nav must be set to position:fixed and left:100% for this to 
work on mobile)
--- mobile breakpoint: 580px */


// 1. on clicking of the hamburger, show the nav by animating it's left value to 0

$('.hamburger').on('click', function() {
	$('nav').animate({'left': '0'});
	$('li').css({'color': 'white'});
	$('.close-nav').css('display', 'block');
});

// 2. on clicking of the close button in the nav, hide the nav by animating it's left value back to 100%

$('.close-nav').on('click', function() {
	$('nav').animate({'left': '100%'});
	$('.hamburger').css('display', 'block');
});

// 3. on resizing of the browser, we want to reset any styles set if we are back on desktop). Look into 
//removeAttr to remove the inline styles that's being added to the nav element
// 

$(window).on("resize", function(){
	$('nav').removeAttr('style');
});

