
$(document).ready(function(){


/* ------ LOAD LUNCH OR DINNER MENU BASED ON TIME OF DAY ------- */

var objDate = new Date();
var time = objDate.getHours();
console.log(time);

if (time < 16){
	$('#target').load('/lunch-menu.html');
} else if (time > 16){
	$('#target').load('/dinner-menu.html');
};


/* ------- LOAD MENUS ON CLICK ------- */


$('.menu-link').click(function(){
	$('#target').html('');
	var whichMenu = event.target.id;
	console.log(whichMenu);
	if (whichMenu == 'lunch'){
		$('#target').load('/lunch-menu.html');
	} else if (whichMenu == 'dinner'){
		$('#target').load('/dinner-menu.html');
	} else if (whichMenu == 'bar'){
		$('#target').load('/bar-menu.html');
	} else if (whichMenu == 'catering'){
		$('#target').load('/catering-menu.html');
	} else{
		$('#target').load('/wine-menu.html');
	}
 });

$(window).on('load', function() {
	$('#grid').masonry({
  	// options
 	 itemSelector: '.grid-item'
	});
});

});