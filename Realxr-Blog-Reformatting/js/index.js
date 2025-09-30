$('#bottom-cta').on('click', function() {
	alert("We are not currently taking sign ups");
	$('.button').text("No Sign Ups!");
});

$('.readmore1').on('click', function() {
	$('#paragraph1').slideToggle(2000);	
		if($('.readmore1').text() === 'Read more') {
			$('.readmore1').text("Read more");
		}
		else {
			$('.readmore1').text("Read less");		
		}
});

$('.readmore2').on('click', function() {
	$('#paragraph2').slideToggle(2000);	
		if($('.readmore2').text() === 'Read more') {
			$('.readmore2').text("Read more");
		}
		else {
			$('.readmore2').text("Read less");		
		}
});

$('.learnmore').on('click', function() {
	$('#paragraph3').slideToggle(2000);	
		if($('.learnmore').text() === 'Read more') {
			$('.learnmore').text("Learn more");
		}
		else {
			$('.learnmore').text("Learn less");		
		}
});

// I feel like I'm really close and just can't gett he if/else statement to work right in order
// to change the text.

//also, how would we do this to prevent the page from jumping back to the top on every click?