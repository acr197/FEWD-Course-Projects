//HOME PAGE HOVER EXPAND//

$(document).ready(function(){
	$('#upper-left-hover').hover(function() {
		$("#upper-left-hover-image").addClass('transition-image');
		$("#upper-left-hover-text").addClass('transition-text');
	}, function() {
		$("#upper-left-hover-image").removeClass('transition-image');
		$("#upper-left-hover-text").removeClass('transition-text');
	});
}); 

$(document).ready(function(){
	$('.home-grid-upper-right').hover(function() {
		$("#upper-right-hover-image").addClass('transition-image');
		$("#upper-right-hover-text").addClass('transition-text');
	}, function() {
		$("#upper-right-hover-image").removeClass('transition-image');
		$("#upper-right-hover-text").removeClass('transition-text');
	});
}); 

$(document).ready(function(){
	$('.home-grid-lower-left').hover(function() {
		$("#lower-left-hover-image").addClass('transition-image');
		$("#lower-left-hover-text").addClass('transition-text');    
	}, function() {
		$("#lower-left-hover-image").removeClass('transition-image');
		$("#lower-left-hover-text").removeClass('transition-text');
	});
}); 

$(document).ready(function(){
	$('.home-grid-lower-right').hover(function() {
		$("#lower-right-hover-image").addClass('transition-image');
		$("#lower-right-hover-text").addClass('transition-text');
	}, function() {
		$("#lower-right-hover-image").removeClass('transition-image');
		$("#lower-right-hover-text").removeClass('transition-text');
	});
}); 

//BURGER
var menuOpen = false;

$('.hamburger').on('click', function() {
	if (menuOpen === false) {
		$('nav').animate({'left': '0'});
		$('.nav-text').css({'color': 'white', 'display': 'block', 'padding': '0px', 'box-shadow': 'inset 0 0 0 0'});
		$('.nav-text-current').css({'color': 'black', 'display': 'block', 'padding': '0px', 'box-shadow': 'inset 0 0 0 0'});
		menuOpen = true;
	}
	else {
		$('nav').animate({'left': '100%'});
		menuOpen = false;
	}
});

//PAGE LOAD ANIMATION//
//Home
$(document).ready(function() {
	$('.loader').fadeOut(2000); 
	$('.load').fadeIn(2000);
});
//Professional Profile
$(document).ready(function() {
	$('.lds-circle').fadeOut(2000); 
	$('.load').fadeIn(2000);
});
//About Me
$(document).ready(function() {
	$('.lds-ripple').fadeOut(2000); 
	$('.load').fadeIn(2000);
});
//Resume
$(document).ready(function(){
	$('.lds-ellipsis').fadeOut(2000); 
	$('.load').fadeIn(2000);
});
//Contact
$(document).ready(function() {
	$('.lds-hourglass').fadeOut(2000); 
	$('.load').fadeIn(2000);
});

//FADE OUT PAGES//
$('.nav-text').click(function(e) {
	e.preventDefault();
	newLocation = this.href;
	$('html').fadeOut('slow', newpage);
});
function newpage() {
	window.location = newLocation;
}
	//fix for footer appearing briefly at top on page loads
	$(document).ready(function(){
		$("footer").slideUp(300).delay(800);
	});

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
		$('#ff3').attr("src", "images/cheese1.png");
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
		$('#ff5').attr("src", "images/nutella1.png");
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

//FLUID WIDTH

$('p').each(function(){
	var string = $(this).html();
	string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
	$(this).html(string);
});

//RESUME DROPDOWN

$('.resume-hover').hide();

$("#resume-button").mouseover(function () {
	$(".resume-hover").slideDown('slow');
});

$("#resume-ul-hover").mouseleave(function () {
	$(".resume-hover").slideUp('slow');
});

//CONTACT PAGE FORM FADE

$('.form-grid-takeover').hide();

$(".contact-grid-upper-left").click(function(){
	$('.contact-grid').fadeOut(1000);
	$('.contact-text').fadeOut(1000, function(){
		$('.form-grid-takeover').fadeIn(1000);
	});
});

$("#form-close").click(function(){
	$('.form-grid-takeover').fadeOut(1000, function(){
		$('.contact-grid').fadeIn(1000);
		$('.contact-text').fadeIn(1000);
	});
});


// $('.form-grid-takeover').click(function(event){
// 	console.log(event.target,$(event.target),$(event.target).hasClass("field"));
// 	if ($(event.target).hasClass("field") === false) {
// 		$('.form-grid-takeover').fadeOut(1000, function() {
// 			$('.contact-grid').fadeIn(1000);
// 			$('.form-grid-takeover').removeClass("open")
// 		});
// 	}

// }); 

//FORM SUBMIT BUTTON THANK YOU

$('#form-submit-button').on('click', function() {
	alert('Thank you for your message!');
	$('.form-grid-takeover').fadeOut(1000, function() {
		$('.contact-grid').fadeIn(1000);
		$('.contact-text').fadeIn(1000);
	});
});

$('.pers-top-section').ready(function(){
	$('.pers-top-section').css({'left':'0'});
});

//AOS ANIMATE VIEWPORT

$(function() {
	AOS.init({delay:200, duration:350});
});

// ABOUT TOP IMAGE HOVER //

// $('#camelimage').mouseover(function() {
// 	$('#camelimage').attr('src', 'images/CairoCamel2.jpg');
// });
// $("#camelimage").mouseleave(function () {
//     $("#camelimage").attr('src', 'images/CairoCamel.jpg');
// });