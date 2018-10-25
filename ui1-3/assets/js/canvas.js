$( document ).ready(function() {
  /*
	  CANVAS
	*/

	// Sortable lists for items
  $('.canvas-section-items.sortable').sortable({
	  handle: '.canvas-item-handle'
  });

	// Clicking on help text opens help modal
	$(document).on("click", ".canvas-section-help p", function(e) {
		e.preventDefault();
		e.stopPropagation();
	  $("#help-modal").modal("show");
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

	$(document).on("click", "#customersegmentschart-wants", function() {
		$(this).closest(".customersegmentcanvas").removeClass("show-needs").toggleClass("show-wants");
	});

	$(document).on("click", "#customersegmentschart-needs", function() {
		$(this).closest(".customersegmentcanvas").removeClass("show-wants").toggleClass("show-needs");
	});

	/*
	  VALUE PROPOSITION CHART
	*/

	$(document).on("click", "#valuepropositionchart-benefits", function() {
		$(this).closest(".valuepropositioncanvas").removeClass("show-features").toggleClass("show-benefits");
	});

	$(document).on("click", "#valuepropositionchart-features", function() {
		$(this).closest(".valuepropositioncanvas").removeClass("show-benefits").toggleClass("show-features");
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
          borderColor: "#F06292",
          backgroundColor: "#F06292",
          pointBackgroundColor: "#F06292",
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
          borderColor: "#9C27B0",
          backgroundColor: "#9C27B0",
          pointBackgroundColor: "#9C27B0",
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
          borderColor: "#673AB7",
          backgroundColor: "#673AB7",
          pointBackgroundColor: "#673AB7",
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
          borderColor: "#3F51B5",
          backgroundColor: "#3F51B5",
          pointBackgroundColor: "#3F51B5",
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
						"#F06292",
						"#9C27B0",
						"#673AB7",
						"#3F51B5"],
					borderColor: "transparent"
				}]
			},
			options: {
				title: {
			    display: true,
			    text: '% of total costs',
			    fontColor: "#373a3c",
			    fontFamily: '"Segoe UI Semibold WestEuropean", "Segoe UI Semibold", "Segoe WP Semibold", "Segoe UI", "Segoe WP", Tahoma, Arial, sans-serif',
			    fontSize: 20,
			    fontStyle: "normal",
		    },
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
		REVENUE STREAMS PIE CHART
	*/

	$(document).on("shown.bs.modal", "#revenue-streams-chart-modal", function() {
    showRevenueStreamsChart();
  });

	function showRevenueStreamsChart() {
		var ctx = $("#revenue-streams-chart-modal .chart-wrapper canvas");

		new Chart(ctx,{
			type:"doughnut",
			data:{
				labels:[
					"Diagnostic IP licensing fees (early stage)",
					"Drug target IP licensing fees (early stage)",
					"Compassionate use drug revenue (mid stage)",
					"Drug molecule IP licensing fees (later stage)",
					"Research grants"],
				datasets:[{
					label:"My First Dataset",
					data:[41,29,18,12,8],
					backgroundColor:[
						"#F06292",
						"#9C27B0",
						"#673AB7",
						"#3F51B5",
						"#2196F3"],
					borderColor: "transparent"
				}]
			},
			options: {
				/*
				title: {
			    display: true,
			    text: '% of total costs',
			    fontColor: "#373a3c",
			    fontFamily: '"Segoe UI Semibold WestEuropean", "Segoe UI Semibold", "Segoe WP Semibold", "Segoe UI", "Segoe WP", Tahoma, Arial, sans-serif',
			    fontSize: 20,
			    fontStyle: "normal",
		    },
		    */
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
    showCustomerSegmentsChart();
  });

	function showCustomerSegmentsChart() {
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
						"#F06292",
						"#9C27B0",
						"#673AB7",
						"#3F51B5"],
					borderColor: "transparent"
				}]
			},
			options: {
				title: {
			    display: true,
			    text: '% of market',
			    fontColor: "#373a3c",
			    fontFamily: '"Segoe UI Semibold WestEuropean", "Segoe UI Semibold", "Segoe WP Semibold", "Segoe UI", "Segoe WP", Tahoma, Arial, sans-serif',
			    fontSize: 20,
			    fontStyle: "normal",
		    },
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
