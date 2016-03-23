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

	$("#todoList .list-group-item").click(function() {
  	// Remove existing active classes
  	$("#todoList .list-group-item").removeClass("active");	
  	$(this).addClass("active");     	
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







