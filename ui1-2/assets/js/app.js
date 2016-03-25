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
	
	
  
  /*
    STANDARDS SIDEBAR - collapse
  */
  
  var sidebarToggles = $(".btn-sidebar-collapse");
  
  sidebarToggles.click(function(){
    var sidebar = $(".standard-sidebar");
    sidebar.toggleClass("hide");
    sidebarToggles.toggleClass("collapsed");
    
    if (sidebar.hasClass("hide")) {
      // Hide sidebar
      var offset = sidebar.outerWidth() * -1;
      sidebar.css("margin-right", offset);
    } else {
      // Show sidebar
      sidebar.css("margin-right", 0);
      
    }
    
  });
  
  
  /*
  	STANDARDS ACCORDION
  */
	
	$("#standardsAccordion .list-group-item").click(function() {
  	if ($(this).hasClass("list-group-toggle")) {
    	// Collapse any open sections
    	$('#standardsAccordion .collapse').collapse("hide");  	
  	}

  	// Remove existing active classes
  	$("#standardsAccordion .list-group-item").removeClass("active");	
  	$(this).addClass("active");
  });
  

  /*
  	SUMMARY ACCORDION
  */
	
	// Ignore clicks on worksheet icon
	$("#summaryAccordion .btn-right").click(function(e) {
  	e.stopPropagation();
  	var target = $(this).data( "target" );
  	$(target).modal('show');
  });
  
	$("#summaryAccordion .list-group-item").click(function() {
  	if ($(this).hasClass("list-group-toggle")) {
    	// Collapse any open sections
    	$('#summaryAccordion .collapse').collapse("hide");  	
  	} else {
    	// Remove existing active classes
    	$("#summaryAccordion .list-group-item").removeClass("active");	
    	$(this).addClass("active");     	
  	}
  });
  
  /*
    TODO LIST
  */

  var toDoItems = $("#todoList .list-group-item");
	toDoItems.click(function() {
  	// Remove existing active classes
  	toDoItems.removeClass("active");	
  	$(this).addClass("active");     	
  });  
  
  
  /*
    USERS LIST
  */

  var userItems = $("#usersList .list-group-item")
	userItems.click(function() {
  	// Remove existing active classes
  	userItems.removeClass("active");	
  	$(this).addClass("active");     	
  });  
  

  /* 
    DETAIL VIEW FOR MOBILE
  */
  
  $( ".bootcards-list .list-group a.list-group-item" ).click(function() {
    if ($(window).width() < 768) {
      // Hide list view
      $(".bootcards-list").attr('style','display:none !important');
      // Show detail view
      $(".bootcards-cards").attr('style','display:block !important');
    }
  });


  /*
    CHAT SCROLL TO BOTTOM ON LOAD
  */

  $('.chat-content').animate({scrollTop: $(document).height()}, 'slow');
  
  /*
    BIA CHART
  */
   
  var $biaTrendChart = $("#biaTrendChart");
  $('#bia-chart-modal').on('shown.bs.modal', function (e) {
    if ($biaTrendChart.length) {
      var data = {
          labels: ["2014 Q2", "2014 Q3", "2014 Q4", "2015 Q1", "2015 Q2", "2015 Q3", "2015 Q4", "2016 Q1"],
          datasets: [
            {
              fillColor: "#E81123",
              strokeColor: "transparent",
              highlightFill: "#E81123",
              highlightStroke: "transparent",
              data: [6500, 5900, 8000, 8100, 5600, 5500, 4000, 12300]
            }
          ]
      };
      var ctx = $biaTrendChart.get(0).getContext("2d");
      var options = {
        responsive: true,
        maintainAspectRatio: false,
        barShowStroke : false,
        //scaleShowLabels: false,
        scaleShowGridLines : false,
        //barValueSpacing : 10
      };
      new Chart(ctx).Bar(data,options);  
    }
  });


});







