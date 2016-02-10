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
	


  // TABS 
  
  $('[data-toggle="btn-tabs"] .btn').on('click', function(){
  	var $this = $(this);
    	$this.parent().find('.active').removeClass('active');
      $this.addClass('active');
  });
  
  
  // DETAIL VIEW FOR MOBILE
  //
  $( ".content-list .list-group a.list-group-item" ).click(function() {
    if ($(window).width() < 768) {
      // Hide list view
      $(".content-list").attr('style','display:none !important');
      // Show detail view
      $(".content-cards").attr('style','display:block !important');
    }
  });

});







