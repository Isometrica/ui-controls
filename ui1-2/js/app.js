var app = angular.module('plio', []);

$( document ).ready(function() {

  /* 
    Platform Detection
	*/
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
	
	$("#standardsAccordion .list-group-item").click(function() {
  	// Remove existing active classes
  	$("#standardsAccordion .list-group-item").removeClass("active");
  	
  	$(this).addClass("active");
  });
  
  
	


  $('.standard-content').animate({scrollTop: $(document).height()}, 'slow');

});







