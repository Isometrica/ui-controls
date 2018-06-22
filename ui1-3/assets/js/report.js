var app = angular.module('plio', []);

$( document ).ready(function() {

	function addCommas(nStr) {
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	}


	/*
		SHARED CHART SETTINGS
	*/
	
	Chart.defaults.global.legend.display = false;
	Chart.defaults.global.tooltips.enabled = false;


	Chart.defaults.scale.ticks.fontColor = "#818a91";
	Chart.defaults.scale.scaleLabel.fontColor = "#818a91";

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
		        	maxTicksLimit: 4,
		        	callback: function(label, index, labels) {
			        	return '$'+addCommas(label);
			        }
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
		        	maxTicksLimit: 4,
		        	callback: function(label, index, labels) {
				        switch (label) {
			            case 0:
			                return 'None';
			            case 50:
			                return 'Low';
			            case 100:
			                return 'High';
				        }
					    }
		        },
          }]
        },
        legendCallback: function(chart) {
			    var text = [];
			    text.push('<ul>');
			    for (var i=0; i<chart.data.datasets.length; i++) {
			      console.log(chart.data.datasets[i]); // see what's inside the obj.
			      text.push('<li>');
			      text.push('<i class="dot" style="background-color:' + chart.data.datasets[i].backgroundColor + '"></i>');
			      var criticality = chart.data.datasets[i].data[0].y;
			      if (criticality < 50) {
				      criticalityString = "LOW";
			      } else {
				      criticalityString = "HIGH";
			      }
			      text.push('<span class="value">'+ criticalityString + "</span>");
			      text.push('<span class="value">$'+ addCommas(chart.data.datasets[i].data[0].x) + "</span>");
			      text.push(chart.data.datasets[i].label);
			      text.push('</li>');
			    }
			    text.push('</ul>');
			    return text.join("");
        }
        
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
        legendCallback: function(chart) {
			    var text = [];
			    text.push('<ul>');
			    for (var i=0; i<chart.data.labels.length; i++) {
			      console.log(chart.data.datasets[i]); // see what's inside the obj.
			      text.push('<li>');
			      text.push('<i class="dot" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></i>');
			      text.push('<span class="value">'+chart.data.datasets[0].data[i] + "%</span>");
			      text.push(chart.data.labels[i]);
			      text.push('</li>');
			    }
			    text.push('</ul>');
			    return text.join("");
        }
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
        legendCallback: function(chart) {
			    var text = [];
			    text.push('<ul>');
			    for (var i=0; i<chart.data.labels.length; i++) {
			      text.push('<li>');
			      text.push('<i class="dot" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></i>');
			      text.push('<span class="value">'+chart.data.datasets[0].data[i] + "%</span>");
			      text.push(chart.data.labels[i]);
			      text.push('</li>');
			    }
			    text.push('</ul>');
			    return text.join("");
        }
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
        legendCallback: function(chart) {
			    var text = [];
			    text.push('<ul>');
			    for (var i=0; i<chart.data.labels.length; i++) {
			      text.push('<li>');
			      text.push('<i class="dot" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></i>');
			      text.push('<span class="value">'+chart.data.datasets[0].data[i] + "%</span>");
			      text.push(chart.data.labels[i]);
			      text.push('</li>');
			    }
			    text.push('</ul>');
			    return text.join("");
        }
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
        legendCallback: function(chart) {
			    var text = [];
			    text.push('<ul>');
			    for (var i=0; i<chart.data.labels.length; i++) {
			      text.push('<li>');
			      text.push('<i class="dot" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></i>');
			      text.push('<span class="value">'+chart.data.datasets[0].data[i] + "%</span>");
			      text.push(chart.data.labels[i]);
			      text.push('</li>');
			    }
			    text.push('</ul>');
			    return text.join("");
        }
    	}
			
		});			
		$("#customerSegmentsChartLegend").html(myChart.generateLegend());
	}


});







