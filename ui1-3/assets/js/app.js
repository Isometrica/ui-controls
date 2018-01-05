var app = angular.module('plio', []);

$( document ).ready(function() {
  
  /*
    Tooltips
  */
  
  $('[data-tooltip="true"]').tooltip();
  
  

  

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
		DASHBOARD - Goals collapse
	*/
	
	$(".goals-collapse-toggle").click(function() {
		$(this).toggleClass("collapsed");
		$(".goals-collapse").collapse("toggle");
		return false;
	});
	
	/*
		DASHBOARD - Goals dropdowns - reposition if not enough space
	*/
	
	$(document).on("click", ".goal .dropdown-toggle", function() {
		var $goalsContainerWidth = $(".goals").outerWidth();
		var $space = $goalsContainerWidth - $(this).offset().left;
		//console.log($space);
		if ($space < 160) {
			$(this).siblings(".dropdown-menu").addClass("dropdown-menu-right");
		}
	});
	
  
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
  	} else {
    	// Remove existing active classes
    	$("#standardsAccordion .list-group-item").removeClass("active");	
    	$(this).addClass("active");     	
  	}
  });
  
  
  /*
  	DISCUSSION ACCORDION
  */
	
	$("#discussionAccordion .list-group-item").click(function() {
  	if ($(this).hasClass("list-group-toggle")) {
    	// Collapse any open sections
    	$('#discussionAccordion .collapse').collapse("hide");  	
  	}
  	// Remove existing active classes
  	$("#discussionAccordion .list-group-item").removeClass("active");	
  	$(this).addClass("active");     	
  });

  
  /*
  	NCs ACCORDION
  */

	$("#nonconformitiesAccordion .list-group-item").click(function() {
  	if ($(this).hasClass("list-group-toggle")) {
    	// Collapse any open sections
    	$('#nonconformitiesAccordion .collapse').collapse("hide");  	
  	} else {
    	// Remove existing active classes
    	$("#nonconformitiesAccordion .list-group-item").removeClass("active");	
    	$(this).addClass("active");     	
  	}
  });
  
  /*
    TODO LIST
  */

  var actionsList = $("#actionsList .list-group-item");
	actionsList.click(function() {
  	// Remove existing active classes
  	actionsList.removeClass("active");	
  	$(this).addClass("active");     	
  });  
  
  
  
  /*
    CLIENT PROFILES ACCORDION
  */

  $("#clientProfilesAccordion .list-group-item").click(function() {
  	if ($(this).hasClass("list-group-toggle")) {
    	// Collapse any open sections
    	$('#clientProfilesAccordion .collapse').collapse("hide");  	
  	} else {
    	// Remove existing active classes
    	$("#clientProfilesAccordion .list-group-item").removeClass("active");	
    	$(this).addClass("active");     	
  	}
  }); 
  
  
  /*
    AUDITS ACCORDION
  */

  $("#auditsAccordion .list-group-item").click(function() {
  	if ($(this).hasClass("list-group-toggle")) {
    	// Collapse any open sections
    	$('#auditsAccordion .collapse').collapse("hide");  	
  	} else {
    	// Remove existing active classes
    	$("#auditsAccordion .list-group-item").removeClass("active");	
    	$(this).addClass("active");     	
  	}
  }); 
  
  // Audit question attachments
  
  $(document).on("click", ".audit-question-dropdown .dropdown-item-pa", function() {
    $(this).closest('.card-block').find('.collapse-attachment').collapse('hide');
    $(this).closest('.card-block').find('.collapse-attachment-pa').collapse('show');
  });
  
  $(document).on("click", ".audit-question-dropdown .dropdown-item-ca", function() {
    $(this).closest('.card-block').find('.collapse-attachment').collapse('hide');
    $(this).closest('.card-block').find('.collapse-attachment-ca').collapse('show');
  });
  
  $(document).on("click", ".audit-question-dropdown .dropdown-item-nc", function() {
    $(this).closest('.card-block').find('.collapse-attachment').collapse('hide');
    $(this).closest('.card-block').find('.collapse-attachment-nc').collapse('show');
  });
  
  $(document).on("click", ".audit-question-dropdown .dropdown-item-risk", function() {
    $(this).closest('.card-block').find('.collapse-attachment').collapse('hide');
    $(this).closest('.card-block').find('.collapse-attachment-risk').collapse('show');
  });
  
  $(document).on("click", ".audit-question-dropdown .dropdown-item-risk-control", function() {
    $(this).closest('.card-block').find('.collapse-attachment').collapse('hide');
    $(this).closest('.card-block').find('.collapse-attachment-risk-control').collapse('show');
  });
  
  $(document).on("click", ".audit-question-dropdown .dropdown-item-comment", function() {
    $(this).closest('.card-block').find('.collapse-attachment').collapse('hide');
    $(this).closest('.card-block').find('.collapse-attachment-comment').collapse('show');
  });
  
  $(document).on("click", ".audit-question-dropdown .dropdown-item-file", function() {
    $(this).closest('.card-block').find('.collapse-attachment').collapse('hide');
    $(this).closest('.card-block').find('.collapse-attachment-file').collapse('show');
  });
  
  $(document).on("click", ".audit-question-attachment-cancel", function() {
    $(this).closest('.card-block').find('.collapse-attachment').collapse('hide');
  });
  
  $(document).on("click", ".audit-question-attachment-add", function() {
    $(this).closest('.card-block').find('.collapse-attachment').collapse('hide');
  });
  
  // Audit question: show comments 
  
  $(document).on("click", ".audit-question-answers .btn", function() {
    if ($(this).hasClass("btn-yes")) {
      $(this).closest('.audit-question').find('.collapse-comment').collapse('hide');
    } else {
      $(this).closest('.audit-question').find('.collapse-comment').collapse('show');
    }
  });
  
  // Audit question: change from previous comment style to current
  
  $(document).on("focus", ".audit-question-comment", function() {
    // remove class
    $(this).removeClass("audit-question-comment-previous");
    // remove date text
    $(this).val(
      // Much too aggressive and reliant on specific date - need better function to remove paretheses and date
      $(this).val().replace(" – Q4 2015)","").replace("(","")
    );
  });
  
  // Repeat response
  
  $(document).on("click", ".btn-repeat", function() {
    
    var $previousAnswers = $(this).closest('.audit-question').find('.btn-previous');
    var $nextQuestion = $(this).closest('.audit-question').next('.audit-question');
    var $currentButtonOffset = $(this).closest('.audit-question').find('.btn-repeat').offset().top;
    
    if ($previousAnswers.length > 0) {
      // Mark previous answers .active
      $previousAnswers.addClass('active');
      // Show comments if applicable
      if (!$previousAnswers.hasClass("btn-yes")) {
        $(this).closest('.audit-question').find('.collapse-comment').collapse('show');
      } 
      // Scroll to next question
      if ($nextQuestion.length > 0) {
        $(this).closest('.audit-question').find('.collapse-comment').on("shown.bs.collapse", function(){
          var $modal = $(this).closest('.modal');
          $nextButtonOffset = $(this).closest('.audit-question').next('.audit-question').find('.btn-repeat').offset().top;      
          $modal.animate({ scrollTop: $modal.scrollTop() + $nextButtonOffset - $currentButtonOffset }, 200);      
        });    
      }
    }
    else 
    {
      // Scroll to next question
      var $modal = $(this).closest('.modal');
      $nextButtonOffset = $(this).closest('.audit-question').next('.audit-question').find('.btn-repeat').offset().top;      
      $modal.animate({ scrollTop: $modal.scrollTop() + $nextButtonOffset - $currentButtonOffset }, 200); 
    }

  });
  
  // Hide Repeat button when interact with form
  
  $(document).on("click", ".audit-question .btn-repeat", function() {
    $(this).closest('.audit-question').find('.btn-repeat').hide();
  });
  
  $(document).on("click", ".audit-question-answers .btn", function() {
    $(this).closest('.audit-question').find('.btn-repeat').hide();
  });
  
  $(document).on("focus", ".audit-question-comment", function() {
    $(this).closest('.audit-question').find('.btn-repeat').hide();
  });
  
  // Subquestions
  
  $(document).on("click", ".audit-question .btn-subquestion", function() {
    // What question is it
    subquestion = $(this).data('subquestion');
    console.log(subquestion);
    $(subquestion).collapse('toggle');
  });
  


  /*
    AUDIT QUESTIONS ACCORDION
  */

  $("#auditsQuestionsDatabaseAccordion .list-group-item").click(function() {
  	if ($(this).hasClass("list-group-toggle")) {
    	// Collapse any SIBLING open sections
    	$(this).siblings('.collapse.in').collapse("hide");  	
  	} else {
    	// Remove existing active classes
    	$("#auditsQuestionsDatabaseAccordion .list-group-item.active").removeClass("active");	
    	$(this).addClass("active");     	
  	}
  }); 
  
  
  /*
    E-AUDITS
  */

  $("#eAuditsAccordion .list-group-item").click(function() {
  	if ($(this).hasClass("list-group-toggle")) {
    	// Collapse any open sections
    	$(this).siblings('.collapse.in').collapse("hide");  
    	$(this).closest('#eAuditsAccordion').find('.list-group-item.active').removeClass("active");		
  	} else {
    	// Remove existing active classes
    	$(this).closest('#eAuditsAccordion').find('.list-group-item.active').removeClass("active");	
    	$(this).siblings('.collapse.in').collapse("hide");  
    	$(this).addClass("active");     	
  	}
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
  
  $( ".content-list a.list-group-item" ).click(function() {
    if ($(window).width() < 768) {
      // Hide list view
      $(".content-list").attr('style','display:none !important');
      // Show detail view
      $(".content-cards").attr('style','display:block !important');
    }
  });


  /*
    CHAT SCROLL TO BOTTOM ON LOAD
  */

  $('.chat-content').animate({scrollTop: $(document).height()}, 'slow');
  
  
  
  /*
    CHART CARDS
  */
  
  function LightenDarkenColor(col, amt) {
      var usePound = false;
      if (col[0] == "#") {
          col = col.slice(1);
          usePound = true;
      }
      var num = parseInt(col,16);
      var r = (num >> 16) + amt;
      if (r > 255) r = 255;
      else if  (r < 0) r = 0;
      var b = ((num >> 8) & 0x00FF) + amt;
      if (b > 255) b = 255;
      else if  (b < 0) b = 0;
      var g = (num & 0x0000FF) + amt;
      if (g > 255) g = 255;
      else if (g < 0) g = 0;
      return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  }  
  
  var $colorGreen = "#16a916";
  var $colorAmber = "#FF8C00";
  var $colorRed = "#E81123";
  var $colorLightBlue = "#00BCF2";

  function showMagnitudeChart() {
    var $magnitudeChart = $("#magnitudeChart canvas");
    if ($magnitudeChart.length) {
      var data = {
          labels: ["Q2", "Q3", "Q4", "2015 Q1", "Q2", "Q3", "Q4", "2016 Q1"],
          datasets: [
            {
              label: "Minor",
              fillColor: LightenDarkenColor($colorRed, 120),
              strokeColor: "transparent",
              highlightFill: LightenDarkenColor($colorRed, 120),
              highlightStroke: "transparent",
              data: [8500, 5900, 8000, 8100, 5600, 5500, 4000, 12300]
            },
            {
              label: "Major",
              fillColor: LightenDarkenColor($colorRed, 60),
              strokeColor: "transparent",
              highlightFill: LightenDarkenColor($colorRed, 60),
              highlightStroke: "transparent",
              data: [2500, 1900, 2000, 1100, 1600, 1500, 1000, 2300]
            },
            {
              label: "Critical",
              fillColor: $colorRed,
              strokeColor: "transparent",
              highlightFill: $colorRed,
              highlightStroke: "transparent",
              data: [500, 900, 0, 100, 600, 500, 1000, 300]
            }
          ]
      };
      var ctx = $magnitudeChart.get(0).getContext("2d");
      var options = {
        responsive: true,
        maintainAspectRatio: false,
        barShowStroke : false
        //scaleShowGridLines : false,
      };
      var myChart = new Chart(ctx).StackedBar(data,options);  
      $("#magnitudeChart .chart-legend").html(myChart.generateLegend());
    }
  } 
  
  
  function showStatusChart() {
    var $statusChart = $("#statusChart canvas");
    if ($statusChart.length) {
      var data = {
          labels: ["Q2", "Q3", "Q4", "2015 Q1", "Q2", "Q3", "Q4", "2016 Q1"],
          datasets: [
            {
              label: "Open",
              fillColor: LightenDarkenColor($colorRed, 60),
              strokeColor: "transparent",
              highlightFill: LightenDarkenColor($colorRed, 60),
              highlightStroke: "transparent",
              
              data: [500, 900, 0, 100, 600, 500, 1000, 300]
            },
            {
              label: "In progress",
              fillColor: LightenDarkenColor($colorAmber, 60),
              strokeColor: "transparent",
              highlightFill: LightenDarkenColor($colorAmber, 60),
              highlightStroke: "transparent",
              data: [2500, 1900, 2000, 1100, 1600, 1500, 1000, 2300]
            },
            {
              label: "Closed",
              fillColor: LightenDarkenColor($colorGreen, 40),
              strokeColor: "transparent",
              highlightFill: LightenDarkenColor($colorGreen, 40),
              highlightStroke: "transparent",
              data: [8500, 5900, 8000, 8100, 5600, 5500, 4000, 12300]
            }
          ]
      };
      var ctx = $statusChart.get(0).getContext("2d");
      var options = {
        responsive: true,
        maintainAspectRatio: false,
        barShowStroke : false
        //scaleShowGridLines : false,
      };
      var myChart = new Chart(ctx).StackedBar(data,options);  
      $("#statusChart .chart-legend").html(myChart.generateLegend());
    }
  }  
  
  function showDepartmentChart() {
    var $departmentChart = $("#departmentChart canvas");
    if ($departmentChart.length) {
      var data = {
          labels: ["Sales", "Marketing", "Client services", "Finance", "Administration"],
          datasets: [
            {
              label: "",
              fillColor: $colorLightBlue,
              strokeColor: "transparent",
              highlightFill: $colorLightBlue,
              highlightStroke: "transparent",
              data: [2500, 1900, 2000, 4100, 600]
            }
          ]
      };
      var ctx = $departmentChart.get(0).getContext("2d");
      var options = {
        responsive: true,
        maintainAspectRatio: false,
        barShowStroke : false
        //scaleShowGridLines : false,
      };
      var myChart = new Chart(ctx).Bar(data,options);  
    }
  }    
  
  
  $(document).on("shown.bs.modal", "#nonconformity-chart-modal", function() { 
    showMagnitudeChart();
  });
  
  $(document).on("shown.bs.tab", "a[href='#magnitudeChart']", function() { 
    showMagnitudeChart();
  });
  
  $(document).on("shown.bs.tab", "a[href='#statusChart']", function() { 
    showStatusChart();
  });
  
  $(document).on("shown.bs.tab", "a[href='#departmentChart']", function() { 
    showDepartmentChart();
  });
  




  /*
    RICH TEXT EXPAND
  */
  $(document).on("shown.bs.modal", ".modal", function() { 
    $( ".rich-text-expand-toggle" ).click(function() {
      $(this).closest('.rich-text').toggleClass("expanded");
    });
  });


  /* GUIDANCE PANELS */

  // Open on guidance-panel-open click
  function openGuidanceClick() {
    $( ".guidance-panel-open" ).click(function() {
      console.log("Open guidance panel");
      // Expand panel
      $(this).closest('.card').find('.guidance-panel').collapse('show');
      // Hide toggle
      $(this).removeClass("collapsed");
    });      
  }
  
  // Close on guidance-panel-close click
  function closeGuidanceClick() {
      $( ".guidance-panel-close" ).click(function() {
      console.log("Close guidance panel");
      // Collapse panel
      $(this).closest('.card').find('.guidance-panel').collapse('hide');
      // Show toggle
      $(this).closest('.card').find('.guidance-panel-open').addClass("collapsed");
    });
  } 

  openGuidanceClick();      
      
  $(document).on("shown.bs.collapse", ".guidance-panel", function() {    
    closeGuidanceClick();    
  });
  
  $(document).on("shown.bs.modal", ".modal", function() {    
    openGuidanceClick();    
  });
  
  
  
  
  /* 
    AUDIT GUIDANCE 
  */
    
  // Open on audit-question-guidance-open click    
  $(document).on("shown.bs.modal", ".modal", function() {    
    $( ".audit-question-guidance-open" ).click(function() {
      console.log("Open audit guidance panel");
      // Expand panel
      $(this).closest('.audit-question').find('.audit-question-guidance').collapse('show');
      // Hide toggle
      $(this).removeClass("collapsed");
    });  
  });
  
  // Close on audit-question-guidance-close click
  $(document).on("shown.bs.collapse", ".audit-question-guidance", function() {    
    $( ".audit-question-guidance-close" ).click(function() {
      console.log("Close audit guidance panel");
      // Collapse panel
      $(this).closest('.audit-question').find('.audit-question-guidance').collapse('hide');
      // Show toggle
      $(this).closest('.audit-question').find('.audit-question-guidance-open').addClass("collapsed");
    });
  });
  
  
  /* 
    AUDIT QUESTION TEMPLATES - collapse behaviour
  */
  
  $(document).on("shown.bs.collapse", ".audit-template-questions", function() { 
    $( ".audit-template-question-toggle" ).click(function() {
      $(this).next(".audit-template-question").collapse("toggle");
    });
  });
  
  $(document).on("shown.bs.collapse", ".audit-template-question", function() {
    $( ".audit-template-question-advanced-toggle" ).click(function() {
      $(this).closest(".audit-template-question").find(".audit-template-question-advanced").collapse("toggle");
    });
    $('.audit-template-question-advanced').on('hidden.bs.collapse', function () {
      $(this).closest(".audit-template-question").find(".audit-template-question-advanced-toggle").addClass("collapsed");
    });
    $('.audit-template-question-advanced').on('shown.bs.collapse', function () {
      $(this).closest(".audit-template-question").find(".audit-template-question-advanced-toggle").removeClass("collapsed");
    });
  });

  
  
  /* 
    AUDIT TEMPLATE SECTION EDIT - collapse behaviour
  */
  $(document).on("shown.bs.collapse", ".audit-template-section", function() {
    $( ".audit-template-section-scoring-toggle" ).click(function() {
      console.log("Show section scoring");
      $(this).closest(".audit-template-section").find(".audit-template-section-scoring-collapse").collapse("toggle");
      $(this).toggleClass("collapsed");
    });
  });
  
  
  /*
    Color selector in org settings -> response sets
  */
  
  $(document).on("shown.bs.collapse", "#response-sets", function() {
    $('.colorpicker-component').colorpicker();
  });
  
  /*
	  Autosize textareas
	*/
	autosize($('textarea.autosize'));
  
  
  /*
	  CANVAS
	*/
	
	// Sortable lists for items 
  $('.canvas-section-items').sortable();
	
	// Customer segments modal
	$(document).on("shown.bs.modal", ".modal", function() {
		// Colorpicker
    $('.colorpicker-component').colorpicker();
    // Autosize
    autosize($('textarea.autosize'));
  });
  
  
  
  /*
	  CUSTOMER SEGMENTS CHART
	*/
	
	$(document).on("click", "#customersegmentschart-pains", function() {
		$(this).closest(".customersegmentcanvas").removeClass("show-gains").removeClass("show-customerJobs").toggleClass("show-pains");
	});
	
	$(document).on("click", "#customersegmentschart-gains", function() {
		$(this).closest(".customersegmentcanvas").removeClass("show-pains").removeClass("show-customerJobs").toggleClass("show-gains");
	});
	
	$(document).on("click", "#customersegmentschart-customerJobs", function() {
		$(this).closest(".customersegmentcanvas").removeClass("show-pains").removeClass("show-gains").toggleClass("show-customerJobs");
	});
	
	/*
	  VALUE PROPOSITION CHART
	*/
	
	$(document).on("click", "#valuepropositionchart-painRelievers", function() {
		$(this).closest(".valuepropositioncanvas").removeClass("show-gainCreators").removeClass("show-productsAndServices").toggleClass("show-painRelievers");
	});
	
	$(document).on("click", "#valuepropositionchart-gainCreators", function() {
		$(this).closest(".valuepropositioncanvas").removeClass("show-painRelievers").removeClass("show-productsAndServices").toggleClass("show-gainCreators");
	});
	
	$(document).on("click", "#valuepropositionchart-productsAndServices", function() {
		$(this).closest(".valuepropositioncanvas").removeClass("show-painRelievers").removeClass("show-gaincCreators").toggleClass("show-productsAndServices");
	});
	
	// Switch views: Match/Canvas
	
	$(document).on("click", ".valuepropositioncanvas .btn-match", function(e) {
		e.preventDefault();
		$("#valueproposition-match-tab").tab('show');
	});
	$(document).on("click", ".valuepropositioncanvas .btn-canvas", function(e) {
		e.preventDefault();
		$("#valueproposition-canvas-tab").tab('show');
	});
	$(document).on("click", ".customersegmentcanvas .btn-match", function(e) {
		e.preventDefault();
		$("#customersegment-match-tab").tab('show');
	});
	$(document).on("click", ".customersegmentcanvas .btn-canvas", function(e) {
		e.preventDefault();
		$("#customersegment-canvas-tab").tab('show');
	});

});







