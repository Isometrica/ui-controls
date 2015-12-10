var app = angular.module('isometrica', []);

// Platform Detection (testing only)
$( document ).ready(function() {
	if( navigator.userAgent.match(/iPhone|iPad|iPod/i) ) {
		var cssLink = $("<link rel='stylesheet' type='text/css' href='assets/libs/bootcards/dist/css/bootcards-ios.min.css'>");
		$("head").append(cssLink);
		$('body').addClass('ios');
   	}
	else if( navigator.userAgent.match(/Android/i) ) {
		var cssLink = $("<link rel='stylesheet' type='text/css' href='assets/libs/bootcards/dist/css/bootcards-android.min.css'>");
		$("head").append(cssLink);
		$('body').addClass('android');
	}
	else
	{
		var cssLink = $("<link rel='stylesheet' type='text/css' href='assets/libs/bootcards/dist/css/bootcards-desktop.min.css'>");
		$("head").append(cssLink);
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
  $( ".isometrica-orgsetup-modal .form-control").click(function() {
  	event.stopPropagation();
  });
  
  $( ".isometrica-orgsetup-modal .clear-field").click(function() {
  	event.stopPropagation();
  });
  
  
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







