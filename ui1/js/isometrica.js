var app = angular.module('isometrica', []);

$( document ).ready(function() {

  // Platform Detection
	if( navigator.userAgent.match(/iPhone|iPad|iPod/i) ) {
		$('body').addClass('ios');
   	}
	else if( navigator.userAgent.match(/Android/i) ) {
		$('body').addClass('android');
	}
	else
	{
		$('body').addClass('desktop');
	}

  /* Tooltips */
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
  
  $('.btn[data-toggle="collapse"]').click(function(){
    $(this).toggleClass("active");
  });
  
  
  
  /* Prevent form clicks from expanding/contracting accordion */
  /*$( ".isometrica-orgsetup-modal .form-control").click(function() {
  	event.stopPropagation();
  });
  
  $( ".isometrica-orgsetup-modal .clear-field").click(function() {
  	event.stopPropagation();
  });*/
  
  
  // DETAIL VIEW FOR MOBILE
  //
  $( ".bootcards-list .list-group a.list-group-item" ).click(function() {
    if ($(window).width() < 768) {
      // Hide list view
      $(".bootcards-list").attr('style','display:none !important');
      // Show detail view
      $(".bootcards-cards").attr('style','display:block !important');
    }
  });

});







