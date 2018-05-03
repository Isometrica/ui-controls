var app = angular.module('plio', []);

$( document ).ready(function() {

	/* 
		KEY PARTNERS CHART
	*/
		
	showKeyPartnersChart();
	function showKeyPartnersChart() {
		var ctx = $("#keyPartnersChart");
		var myChart = new Chart(ctx, {
	    type: 'scatter',
	    data: {
        datasets: [
        {
          label: 'Total Scientific Ltd',
          pointRadius: 8,
          pointHoverRadius: 8,
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
	        pointRadius: 8,
	        pointHoverRadius: 8,
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
	        pointRadius: 8,
	        pointHoverRadius: 8,
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
	        pointRadius: 8,
	        pointHoverRadius: 8,
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
	            fontFamily: "'Segoe UI Regular WestEuropean', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif",
	            fontSize: 14        
	          },
	          ticks: {
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
	            fontFamily: "'Segoe UI Regular WestEuropean', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif",
	            fontSize: 14          
	          },
	          ticks: {
		        	beginAtZero: true,
		        	min: 0,
		        	max: 100,
		        	maxTicksLimit: 4
		        },
          }]
        },
        legend: {
					display: false,
        },
        tooltips: {
	        enabled: false,
        },
	    }
		});
		$("#keyPartnersChartLegend").html(myChart.generateLegend());
	}
	

  
  
  /* 
		COST STRUCTURE CHART
	*/
	
  showCostStructureChart();
	function showCostStructureChart() {
		var ctx = $("#costStructureChart");

		var myChart = new Chart(ctx,{
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
				tooltips: {
	        enabled: false,
        },
				legend: {
					display: false,
        },
			}
		});	
		$("#costStructureChartLegend").html(myChart.generateLegend());
	}
	
	
  /* 
		REVENUE STREAMS PIE CHART
	*/
	
  showRevenueStreamsChart();
	function showRevenueStreamsChart() {
		var ctx = $("#revenueStreamsChart");

		var myChart = new Chart(ctx,{
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
				tooltips: {
	        enabled: false,
        },
				legend: {
					display: false,
        },
			}
		});	
		$("#revenueStreamsChartLegend").html(myChart.generateLegend());
	}	
	
	
	/* 
		PROFIT STREAMS PIE CHART
	*/
	
  showProfitStreamsChart();
	function showProfitStreamsChart() {
		var ctx = $("#profitStreamsChart");

		var myChart = new Chart(ctx,{
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
					data:[48,22,22,8,6],
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
				tooltips: {
	        enabled: false,
        },
				legend: {
					display: false,
        },
			}
		});	
		$("#profitStreamsChartLegend").html(myChart.generateLegend());
	}	
	
	
	
	/* 
		CUSTOMER SEGMENTS PIE CHART
	*/
	
	
  showCustomerSegmentsChart();
	function showCustomerSegmentsChart() {
		var ctx = $("#customerSegmentsChart");
		var myChart = new Chart(ctx,{
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
				tooltips: {
	        enabled: false,
        },
        legend: {
	        display: false,
        }
			}
		});			
		$("#customerSegmentsChartLegend").html(myChart.generateLegend());
	}


});







