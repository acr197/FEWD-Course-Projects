//PERSONAL PROFILE FUN FACTS//

var isItFlipped1 = true;
var isItFlipped2 = true;
var isItFlipped3 = true;
var isItFlipped4 = true;
var isItFlipped5 = true;
var isItFlipped6 = true;

$("#ff1p, #ff2p, #ff3p, #ff4p, #ff5p, #ff6p").hide();

$("#ff1").on("click", function(){
	if (isItFlipped1) {
		$('#ff1').toggleClass('flipped');
		$('#ff1').attr("src", "images/brew1.png");
		$("#ff1p").fadeToggle('slow');
		isItFlipped1 = false;
	}
});

$("#ff2").on("click", function(){
	if (isItFlipped2) {
		$('#ff2').toggleClass('flipped');
		$('#ff2').attr("src", "images/studio1.png");
		$("#ff2p").fadeToggle('slow');
		isItFlipped2 = false;
	}
});

$("#ff3").on("click", function(){
	if (isItFlipped3) {
		$('#ff3').toggleClass('flipped');
		$('#ff3').attr("src", "images/placeholder.png");
		$("#ff3p").fadeToggle('slow');
		isItFlipped3 = false;
	}
});

$("#ff4").on("click", function(){
	if (isItFlipped4) {
		$('#ff4').toggleClass('flipped');
		$('#ff4').attr("src", "images/sandiego1.png");
		$("#ff4p").fadeToggle('slow');
		isItFlipped4 = false;
	}
});

$("#ff5").on("click", function(){
	if (isItFlipped5) {
		$('#ff5').toggleClass('flipped');
		$('#ff5').attr("src", "images/placeholder.png");
		$("#ff5p").fadeToggle('slow');
		isItFlipped5 = false;
	}
});

$("#ff6").on("click", function(){
	if (isItFlipped6) {
		$('#ff6').toggleClass('flipped');
		$('#ff6').attr("src", "images/hospital1.png");
		$("#ff6p").fadeToggle('slow');
		isItFlipped6 = false;
	}
});

//HOME PAGE HOVER EXPAND//

$(document).ready(function(){
    $('#upper-left-hover').hover(function() {
        $("#upper-left-hover").addClass('transition');
    
    }, function() {
        $("#upper-left-hover").removeClass('transition');
    });
}); 

$(document).ready(function(){
    $('#upper-right-hover').hover(function() {
        $("#upper-right-hover").addClass('transition');
    
    }, function() {
        $("#upper-right-hover").removeClass('transition');
    });
}); 

$(document).ready(function(){
    $('#lower-left-hover').hover(function() {
        $("#lower-left-hover").addClass('transition');
    
    }, function() {
        $("#lower-left-hover").removeClass('transition');
    });
}); 

$(document).ready(function(){
    $('#lower-right-hover').hover(function() {
        $("#lower-right-hover").addClass('transition');
    
    }, function() {
        $("#lower-right-hover").removeClass('transition');
    });
}); 