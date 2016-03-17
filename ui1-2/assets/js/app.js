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
	
	$(".content-list .list-group-item").click(function() {
  	// Remove existing active classes
  	$(".content-list .list-group-item").removeClass("active");
  	
  	$(this).addClass("active");
  });



  $('.chat-content').animate({scrollTop: $(document).height()}, 'slow');
  
  
  var $biaTrendChart = $("#biaTrendChart");
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
      scaleShowLabels: false,
      scaleShowGridLines : false,
      barValueSpacing : 10
    };
    new Chart(ctx).Bar(data,options);  
  }

});







