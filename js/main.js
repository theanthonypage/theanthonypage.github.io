
$(document).ready(function(){


// HERO IMAGE


// CASSANO LINK ONCLICK SCROLL TO TOP

$('.site-title').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    $('.nav-link').removeClass('activate');
});


// MASONRY GRID INITIALIZE

$(window).on('load', function() {
  $('#grid').masonry({
    // options
   itemSelector: '.grid-item'
  });
});


/* ------ LOAD LUNCH OR DINNER MENU BASED ON TIME OF DAY ------- */

var objDate = new Date();
var time = objDate.getHours();
var dinnerValue  = localStorage.getItem("dinner");
var lunchValue  = localStorage.getItem("lunch");

console.log(time);

if (time < 16){
	$('#target').load('/lunch-menu.html');
  $('#lunch').addClass('activated');
  $("#menu-select").val('lunch');
} else if (time >= 16){
	$('#target').load('/dinner-menu.html');
  $('#dinner').addClass('activated');
  $("#menu-select").val('dinner')
  if (window.matchMedia('(max-width: 870px)').matches){
    if (window.matchMedia('(min-width: 400px)').matches){
      $('#menu').css('min-height','5250px');
    } else { 
      $('#menu').css('min-height','6000px');
    }
  } else {
     $('#menu').css('min-height','3082px');
  }
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
      if (window.matchMedia('(max-width: 870px)').matches){
        if (window.matchMedia('(min-width: 400px)').matches){
          $('#menu').css('min-height','5700px');
        } else { 
          $('#menu').css('min-height','6500px');
        }
      } else {
     $('#menu').css('min-height','3082px');
      }
	} else if (whichMenu == 'dinner'){
		$(target).load('/dinner-menu.html');
    $(this).addClass('activated');
    $(this).siblings().not(this).removeClass('activated');
    if (window.matchMedia('(max-width: 870px)').matches){
      if (window.matchMedia('(min-width: 400px)').matches){
        $('#menu').css('min-height','5250px');
      } else { 
        $('#menu').css('min-height','6000px');
      }
    } else {
      $('#menu').css('min-height','3082px');
    }
	} else if (whichMenu == 'bar'){
		$(target).load('/bar-menu.html');
    $(this).addClass('activated');
    $(this).siblings().not(this).removeClass('activated');
    if (window.matchMedia('(max-width: 870px)').matches){
      if (window.matchMedia('(min-width: 400px)').matches){
        $('#menu').css('min-height','2100px');
      } else { 
        $('#menu').css('min-height','2475px');
      }
    } else {
      $('#menu').css('min-height','1200px');
    }
	} else if (whichMenu == 'catering'){
		$(target).load('/catering-menu.html');
    $(this).addClass('activated');
    $(this).siblings().not(this).removeClass('activated');
    if (window.matchMedia('(max-width: 870px)').matches){
      if (window.matchMedia('(min-width: 400px)').matches){
        $('#menu').css('min-height','1500px');
      } else { 
        $('#menu').css('min-height','1700px');
      }
    } else {
      $('#menu').css('min-height','1200px');
    }
	} else {
		$(target).load('/wine-menu.html');
    $(this).addClass('activated');
    $(this).siblings().not(this).removeClass('activated');
	}
 });


// #MENU OVERFLOW VISIBLE ON MAX WIDTH
 
 if (window.matchMedia('(max-width: 870px)').matches){
  $('#menu').css('overflow', 'visible');
} else {

};


// LOAD MOBILE MENUS ON CLICK

$("#menu-select").change(function() {
  var whichMenu = $(this).val();
  console.log(whichMenu);
  target = ('#target');
  if (whichMenu == 'lunch'){
    $(target).load('/lunch-menu.html');
    if (window.matchMedia('(max-width: 870px)').matches){
        if (window.matchMedia('(min-width: 400px)').matches){
          $('#menu').css('min-height','5700px');
        } else { 
          $('#menu').css('min-height','6500px');
        }
      } else {
     $('#menu').css('min-height','3082px');
      }
} else if (whichMenu == 'dinner'){
    $(target).load('/dinner-menu.html');
    if (window.matchMedia('(max-width: 870px)').matches){
      if (window.matchMedia('(min-width: 400px)').matches){
        $('#menu').css('min-height','5250px');
      } else { 
        $('#menu').css('min-height','6000px');
      }
    } else {
      $('#menu').css('min-height','3082px');
    }
} else if (whichMenu == 'bar'){
    $(target).load('/bar-menu.html');
    if (window.matchMedia('(max-width: 870px)').matches){
      if (window.matchMedia('(min-width: 400px)').matches){
        $('#menu').css('min-height','2100px');
      } else { 
        $('#menu').css('min-height','2475px');
      }
    } else {
      $('#menu').css('min-height','1200px');
    }
} else if (whichMenu == 'catering'){
    $(target).load('/catering-menu.html');
    if (window.matchMedia('(max-width: 870px)').matches){
      if (window.matchMedia('(min-width: 400px)').matches){
        $('#menu').css('min-height','1500px');
      } else { 
        $('#menu').css('min-height','1700px');
      }
    } else {
      $('#menu').css('min-height','1200px');
    }
} else {
    $(target).load('/wine-menu.html');
}

});

// MOBILE NAV FUNCTIONALITY

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


// LOAD GALLERY ON SCROLL PAST WAYPOINT

var waypoint = new Waypoint({
  element: document.getElementById('gallery'),
  handler: function() {
    target = ('#gallery-target');
    $(target).load('/gallery.html');
  },
  offset: 225
});

// LOAD GALLERY ON LINK CLICK

$('.gallery-click').click(function(){
  var target = ('#gallery-target');
  $(target).load('/gallery.html');
});

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
                $("nav li:last-child a").not('.mobile-nav > li').addClass("activate");
            }
        }
    });

// DATE PICKER

$('.datepicker-here').datepicker({
    language: 'en',
    minDate: new Date() // Now can select only dates, which goes after today
})

$('.datepicker-here').datepicker({
        onSelect: function (fd, d, picker) {
            // Do nothing if selection was cleared
            console.log(fd);
            //if (!d) return;

            var day = d.getDay();
            var monFri = $('.mon-fri');
            var monSat = $('.mon-sat');
            var friSat = $('.fri-sat');
            console.log(day);
            if (day > 0 && day < 5){
              $(monFri).css('display', 'block');
              $(monSat).css('display', 'block');
              $(friSat).css('display', 'none');
            } else if (day == 5) {
              $(friSat).css('display', 'block');
              $(monSat).css('display', 'block');
            } else if (day == 6){
              $(monFri).css('display', 'none');
              $(monSat).css('display', 'block');
              $(friSat).css('display', 'block');
            } else if (day == 0) {
              $(monFri).css('display', 'none');
              $(friSat).css('display', 'none');
              $(monSat).css('display', 'none');
            }
        }
    });






///// END OF CODE - CLOSING TAG BENEATH

});