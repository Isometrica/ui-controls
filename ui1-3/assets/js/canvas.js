$( document ).ready(function() {
  /*
	  CANVAS
	*/
	
	// Sortable lists for items 
  $('.canvas-section-items').sortable();
	
	$(document).on("show.bs.modal", ".modal", function() {
		// Colorpicker
		$('select[name="colorpicker"]').simplecolorpicker({picker: true, theme: 'fontawesome'});
		// Old colorpicker
    $('.colorpicker-component').colorpicker();
    // Autosize
    autosize($('.autosize'));
  });
  
	$(document).on("shown.bs.collapse", ".collapse", function() {
    // Autosize
    autosize($('.autosize'));
    autosize.update($('.autosize'));
  });
  
  // Clicking canvas section Add button launches modal
  
  $(document).on("click", ".canvas-section .btn-add", function() {
	  var target = $(this).closest(".canvas-section").data("target");
	  $(target).modal("show");
	});
	
	// Clicking anywhere in *empty* canvas section launches modal
  
  $(document).on("click", ".canvas-section.empty", function() {
	  var target = $(this).data("target");
	  $(target).modal("show");
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
		$(this).closest(".valuepropositioncanvas").removeClass("show-painRelievers").removeClass("show-gainCreators").toggleClass("show-productsAndServices");
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




	/* 
		KEY PARTNERS CHART
	*/
	
	$(document).on("shown.bs.modal", "#key-partners-chart-modal", function() { 
    showKeyPartnersChart();
  });
	
	function showKeyPartnersChart() {
		var ctx = $(".chart-wrapper canvas");
		var scatterChart = new Chart(ctx, {
	    type: 'scatter',
	    data: {
        datasets: [
        {
          label: 'Total Scientific Ltd',
          pointRadius: 10,
          pointHoverRadius: 12,
          pointBorderWidth: 0,
          borderColor: "#F0889C",
          backgroundColor: "#F0889C",
          pointBackgroundColor: "#F0889C",
          data: [{
            x: 900000,
            y: 60
          }]
        },
        {
	        label: 'Jackson Laboratory',
	        pointRadius: 10,
	        pointHoverRadius: 12,
          pointBorderWidth: 0,
          borderColor: "#FCCF31",
          backgroundColor: "#FCCF31",
          pointBackgroundColor: "#FCCF31",
          data: [{
            x: 600000,
            y: 75
          }]
        },
        {
	        label: 'Boult',
	        pointRadius: 10,
	        pointHoverRadius: 12,
          pointBorderWidth: 0,
          borderColor: "#94135E",
          backgroundColor: "#94135E",
          pointBackgroundColor: "#94135E",
          data: [{
            x: 400000,
            y: 25
          }]
        },
        {
	        label: 'Clinical & research collaborators',
	        pointRadius: 10,
	        pointHoverRadius: 12,
          pointBorderWidth: 0,
          borderColor: "#00BCF2",
          backgroundColor: "#00BCF2",
          pointBackgroundColor: "#00BCF2",
          data: [{
            x: 100000,
            y: 10
          }]
        }
        ]
	    },
	    options: {
        scales: {
          xAxes: [{
	          type: 'linear',
	          scaleLabel: {
		          display: true,
	            labelString: 'Spend',
	            fontFamily: '"Segoe UI Semibold WestEuropean", "Segoe UI Semibold", "Segoe WP Semibold", "Segoe UI", "Segoe WP", Tahoma, Arial, sans-serif',
	            fontSize: 16        
	          },
	          ticks: {
		        	//display: false,
		        	beginAtZero: true,
		        	min:0,
		        	max: 1000000,
		        	maxTicksLimit: 4
		        }
          }],
          yAxes: [{
	          type: 'linear',
	          scaleLabel: {
		          display: true,
	            labelString: 'Criticality',
	            fontFamily: '"Segoe UI Semibold WestEuropean", "Segoe UI Semibold", "Segoe WP Semibold", "Segoe UI", "Segoe WP", Tahoma, Arial, sans-serif',
	            fontSize: 16           
	          },
	          ticks: {
		        	//display: false,
		        	beginAtZero: true,
		        	min: 0,
		        	max: 100,
		        	maxTicksLimit: 4
		        }
          }]
        },
        legend: {
	        position: 'bottom',
	        display: true,
	        labels: {
		        fontFamily: '"Segoe UI Regular WestEuropean", "Segoe UI", "Segoe WP", Tahoma, Arial, sans-serif',
		        padding: 20,
		        usePointStyle: true
	        }
        },
        tooltips: {
	        custom: function(tooltip) {
		        if (!tooltip) return;
		        // disable displaying the color box;
		        tooltip.displayColors = false;
		      },
	        callbacks: {
            title: function(tooltipItem, data) {
	            var index = tooltipItem[0].datasetIndex;
	            var title = data.datasets[index].label;
              return title;
            },
            label: function(tooltipItem, data) {
	            return "Criticality: " + tooltipItem.yLabel;
            },
            afterLabel: function(tooltipItem, data) {
				      return "Spend: $" + tooltipItem.xLabel;
				    }
	        }
        }
	    }
		});
	}
	

  
  
  /* 
		COST STRUCTURE CHART
	*/
	
	$(document).on("shown.bs.modal", "#cost-structure-chart-modal", function() { 
    showCostStructureChart();
  });
	
	function showCostStructureChart() {
		var ctx = $("#cost-structure-chart-modal .chart-wrapper canvas");

		new Chart(ctx,{
			type:"doughnut",
			data:{
				labels:[
					"Staff costs (R&D, operational)",
					"Outsourced contract research",
					"Outsourced DNA sequencing",
					"Patenting costs"],
				datasets:[{
					label:"My First Dataset",
					data:[41,29,18,12],
					backgroundColor:[
						"#F0889C",
						"#FCCF31",
						"#94135E",
						"#00BCF2"],
					borderColor: "transparent"
				}]
			},
			options: {
				tooltips: {
	        custom: function(tooltip) {
		        if (!tooltip) return;
		        // disable displaying the color box;
		        tooltip.displayColors = false;
		      },
	        callbacks: {
            title: function(tooltipItem, data) {
	            var index = tooltipItem[0].index;
	            var title = data.labels[index];
              return title;
            },
            label: function(tooltipItem, data) {
	            var index = tooltipItem.index;
	            return data.datasets[0].data[index] + "% of total costs";
            },
            afterLabel: function(tooltipItem, data) {
				      //return "Spend: $" + tooltipItem.xLabel;
				    }
	        }
        },
				legend: {
	        position: 'bottom',
	        display: true,
	        labels: {
		        fontFamily: '"Segoe UI Regular WestEuropean", "Segoe UI", "Segoe WP", Tahoma, Arial, sans-serif',
		        padding: 20,
		        usePointStyle: true
	        }
        },
			}
		});	
	}
	
	
	
	/* 
		CUSTOMER SEGMENTS PIE CHART
	*/
	
	$(document).on("shown.bs.modal", "#customer-segments-chart-modal", function() { 
    showCostStructureChart();
  });
	
	function showCostStructureChart() {
		var ctx = $("#customer-segments-chart-modal .chart-wrapper canvas");

		new Chart(ctx,{
			type:"doughnut",
			data:{
				labels:[
					"Pharmaceutical firms",
					"Biotechnology firms",
					"Genome diagnostic firms (23andme - licensing)",
					"Mitochondrial disease clinicians"],
				datasets:[{
					label:"My First Dataset",
					data:[41,29,18,12],
					backgroundColor:[
						"#F0889C",
						"#FCCF31",
						"#94135E",
						"#00BCF2"],
					borderColor: "transparent"
				}]
			},
			options: {
				tooltips: {
	        custom: function(tooltip) {
		        if (!tooltip) return;
		        // disable displaying the color box;
		        tooltip.displayColors = false;
		      },
	        callbacks: {
            title: function(tooltipItem, data) {
	            var index = tooltipItem[0].index;
	            var title = data.labels[index];
              return title;
            },
            label: function(tooltipItem, data) {
	            var index = tooltipItem.index;
	            return data.datasets[0].data[index] + "% market size";
            },
            afterLabel: function(tooltipItem, data) {
				      //return "Spend: $" + tooltipItem.xLabel;
				    }
	        }
        },
				legend: {
	        position: 'bottom',
	        display: true,
	        labels: {
		        fontFamily: '"Segoe UI Regular WestEuropean", "Segoe UI", "Segoe WP", Tahoma, Arial, sans-serif',
		        padding: 20,
		        usePointStyle: true
	        }
        },
			}
		});	
	}
	
	
});