
$(document).ready(function(){

// HERO IMAGE

function fullscreen(){
        jQuery('#hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
    }
  
    fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
       fullscreen();         
    });

function fullscreen2(){
        jQuery('#mobile-hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
    }
  
    fullscreen2();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
       fullscreen2();         
    });

// CASSANO LINK ONCLICK SCROLL TO TOP

$('.site-title').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
});

/* ------ LOAD LUNCH OR DINNER MENU BASED ON TIME OF DAY ------- */

var objDate = new Date();
var time = objDate.getHours();
console.log(time);

if (time < 16){
	$('#target').load('/lunch-menu.html');
  $('#lunch').addClass('activated');
} else if (time >= 16){
	$('#target').load('/dinner-menu.html');
  $('#dinner').addClass('activated');
};


// LOAD MENUS ON CLICK

$('.menu-link').click(function(){
	$('#target').html('');
	var whichMenu = event.target.id,
  target = ('#target');
	console.log(whichMenu);
	if (whichMenu == 'lunch'){
		$(target).load('/lunch-menu.html');
    $(this).addClass('activated');
    $(this).siblings().not(this).removeClass('activated');
	} else if (whichMenu == 'dinner'){
		$(target).load('/dinner-menu.html');
    $(this).addClass('activated');
    $(this).siblings().not(this).removeClass('activated');
	} else if (whichMenu == 'bar'){
		$(target).load('/bar-menu.html');
    $(this).addClass('activated');
    $(this).siblings().not(this).removeClass('activated');
	} else if (whichMenu == 'catering'){
		$(target).load('/catering-menu.html');
    $(this).addClass('activated');
    $(this).siblings().not(this).removeClass('activated');
	} else{
		$(target).load('/wine-menu.html');
    $(this).addClass('activated');
    $(this).siblings().not(this).removeClass('activated');
	}
 });

$(window).on('load', function() {
	$('#grid').masonry({
  	// options
 	 itemSelector: '.grid-item'
	});
});

$('.hamburger').click(function(){
	$('.mobile-nav').animate({width:'toggle'},500);
	$(this).css('display', 'none');
	$('.close').css('display', 'inline-block');
});

$('.close').click(function(){
	$('.mobile-nav').animate({width:'toggle'},500);
	$(this).css('display', 'none');
	$('.hamburger').css('display', 'inline-block');
});

$('.m-nav-link').click(function(){
	$('.mobile-nav').animate({width:'toggle'},500);
	$('.close').css('display', 'none');
	$('.hamburger').css('display', 'inline-block');
});


// ACTIVE STATE TRIGGER FOR NAV LINKS

// $(window).scroll(function(){
//   if($(window).scrollTop() == 
// })


// TRIGGER MENUS BUTTON ON SCROLLTOP

// var menu = $('#menu');
// var button = $('.menus-button');

// $(window).scroll(function() {
 //   var element_position = $(menu).offset().top
  //  y_scroll_pos = window.pageYOffset,
 //   scroll_pos_test = element_position,
 //   hT = $(menu).offset().top,
 //   hH = $(menu).outerHeight(),
//    wH = $(window).height(),
//    wS = $(this).scrollTop(),
//    bT = $(menu).position().top + $(menu).outerHeight(true);
    
//    if(y_scroll_pos > scroll_pos_test) {
//        $(button).css('visibility', 'visible');
//    }

//});

//$(window).scroll(function () {

//var triggerPos = $('#trigger').offset().top;
//var trigger2Pos = $('#trigger2').offset().top;

//if($(window).scrollTop() > (triggerPos)){
  //     $(".menu-button").css('visibility', 'visible');
  //  }
  //  else if($(window).scrollTop() > (trigger2Pos)){
  //      $(".menu-button").css('visibility', 'hidden');
  //  }
  //  else {
  //      $(".menu-button").css('visibility', 'hidden');
  //  }
//});

// NAV LOGO APPEARS AFTER SCROLL PAST MAIN LOGO

  // hide the fixed navbar initially, only if the scroll top is above the main logo

 if($(window).scrollTop() < (topofDiv)){
       $(".site-logo").css('display', 'none');
    }
    else{
    }

var topofDiv = $(".main-logo-holder").offset().top + 150; //gets offset of header

function slider() {
    if($(window).scrollTop() > (topofDiv)){
       $(".site-logo").fadeIn(600);
    }
    else{
       $(".site-logo").fadeOut(600);
    }
}

$(window).scroll(function () {
    slider();
});

slider();



// SMOOTH SCROLL FUNCTIONALITY


  $('a[href*="#"]:not([href="#"])').click(function() {


  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);

    if ($(this).offset().top - target.offset().top > '800' || $(this).offset().top - target.offset().top < "-800"){
    	var scrollSpeed = 1500;
    } else {
    	var scrollSpeed = 1000;
    }

    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 100
      }, scrollSpeed);
      return false;
    }
  }

});

// ACTIVATE NAV LINKS ON CLICK

$('.nav-link').click(function() {
  $(this).addClass('activate');
  $('.nav-link').not(this).removeClass('activate');
  $('.nav-link').data('clicked', true);
});

$('.m-nav-link').click(function() {
  $(this).addClass('activatem');
  $('.m-nav-link').not(this).removeClass('activatem');
  $('.m-nav-link').data('clicked', true);
});



// ACTIVATE NAV LINKS ON SCROLL

    var aChildren = $(".main-nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        if($('.nav-link').data('clicked')) {
        
        } else {
            var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
            var windowHeight = $(window).height(); // get the height of the window
            var docHeight = $(document).height();

            for (var i=0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = $(theID).offset().top - 80; // get the offset of the div from the top of page
                var divHeight = $(theID).height(); // get the height of the div in question
                if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                    $("a[href='" + theID + "']").addClass("activate");
                } else {
                $("a[href='" + theID + "']").removeClass("activate");
                }
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("activate")) {
                var navActiveCurrent = $(".activate").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("activate");
                $("nav li:last-child a").addClass("activate");
            }
        }
    });


});