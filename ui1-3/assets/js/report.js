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
          borderColor: "#446EC2",
          backgroundColor: "#446EC2",
          pointBackgroundColor: "#446EC2",
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
	            labelString: 'Low      SPEND      High',
	            fontFamily: "'Segoe UI Regular WestEuropean', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif",
	            fontSize: 14
	          },
	          ticks: {
		          display: false,
		        	beginAtZero: true,
		        	min:0,
		        	max: 1000000,
		        	maxTicksLimit: 4,
		        	callback: function(label, index, labels) {
				        switch (label) {
			            case 500000:
			                return 'Low';
			            case 1000000:
			                return 'High';
				        }
					    }
		        }
          }],
          yAxes: [{

	          type: 'linear',
	          scaleLabel: {
		          display: true,
	            labelString: 'Low    CRITICALITY    High',
	            fontFamily: "'Segoe UI Regular WestEuropean', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif",
	            fontSize: 14
	          },
	          ticks: {
		          display: false,
		        	beginAtZero: true,
		        	min: 0,
		        	max: 100,
		        	maxTicksLimit: 4,
		        	callback: function(label, index, labels) {
				        switch (label) {
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
/*
			    text.push('<ul>');
			    for (var i=0; i<chart.data.datasets.length; i++) {
			      console.log(chart.data.datasets[i]); // see what's inside the obj.
			      text.push('<li>');
			      text.push('<i class="dot" style="background-color:' + chart.data.datasets[i].backgroundColor + '"></i>');
			      var criticality = chart.data.datasets[i].data[0].y;
			      if (criticality < 35) {
				      criticalityString = "Low criticality";
			      } else if (criticality < 65) {
				      criticalityString = "Medium criticality";
			      } else {
				      criticalityString = "High criticality";
			      }
			      var spend = chart.data.datasets[i].data[0].x;
			      if (spend < 250000) {
				      spendString = "Low spend";
			      } else if (spend < 650000) {
				      spendString = "Medium spend";
			      } else {
				      spendString = "High spend";
			      }
			      text.push('<span class="key">'+ chart.data.datasets[i].label+ "</span>");
			      text.push('<span class="value">'+ criticalityString + ', '+ spendString + "</span>");
			      text.push('</li>');
			    }
			    text.push('</ul>');
*/
			    text.push('<table>');
			    text.push('<tr>');
			    text.push('<th></th>');
			    text.push('<th></th>');
			    text.push('<th class="value">CRITICALITY</th>');
			    text.push('<th class="value">SPEND</th>');
			    text.push('</tr>');
			    for (var i=0; i<chart.data.datasets.length; i++) {
			      console.log(chart.data.datasets[i]); // see what's inside the obj.
			      text.push('<tr>');
			      text.push('<td><i class="dot" style="background-color:' + chart.data.datasets[i].backgroundColor + '"></i></td>');
			      var criticality = chart.data.datasets[i].data[0].y;
			      if (criticality < 35) {
				      criticalityString = "Low";
			      } else if (criticality < 65) {
				      criticalityString = "Medium";
			      } else {
				      criticalityString = "High";
			      }
			      var spend = chart.data.datasets[i].data[0].x;
			      if (spend < 250000) {
				      spendString = "Low";
			      } else if (spend < 650000) {
				      spendString = "Medium";
			      } else {
				      spendString = "High";
			      }
			      text.push('<td class="key">'+ chart.data.datasets[i].label+ "</td>");
			      text.push('<td class="value">'+ criticalityString + '</td>');
			      text.push('<td class="value">'+ spendString + '</td>');
			      text.push('</tr>');
			    }
			    text.push('</table>');
			    return text.join("");
        },
        plugins: [{
				  beforeDraw: function(chart) {
				      // hide original tick
				      chart.scales['y-axis-0'].options.ticks.fontColor = 'transparent';
				  },
				  afterDraw: function(chart) {
			      var ctx = chart.ctx;
			      var yAxis = chart.scales['y-axis-0'];
			      var tickGap = yAxis.getPixelForTick(1) - yAxis.getPixelForTick(0);
			      // loop through ticks array
			      Chart.helpers.each(yAxis.ticks, function(tick, index) {
							if (index === yAxis.ticks.length - 1) return;
							var xPos = yAxis.right;
							var yPos = yAxis.getPixelForTick(index);
							var xPadding = 10;
							// draw tick
							ctx.save();
							ctx.textBaseline = 'middle';
							ctx.textAlign = 'right';
							ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
							ctx.fillText(tick, xPos - xPadding, yPos + tickGap / 2);
							ctx.restore();
			      });
				   }
				}],
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
						"#446EC2"],
					borderColor: "transparent"
				}]
			},
			options: {
        legendCallback: function(chart) {
			    var text = [];
/*
			    text.push('<ul>');
			    for (var i=0; i<chart.data.labels.length; i++) {
			      console.log(chart.data.datasets[i]); // see what's inside the obj.
			      text.push('<li>');
			      text.push('<i class="dot" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></i>');
			      text.push('<span class="key">'+chart.data.labels[i]+ "</span>");
			      text.push('<span class="value">'+chart.data.datasets[0].data[i] + "%</span>");
			      text.push('</li>');
			    }
			    text.push('</ul>');
*/
					text.push('<table>');
			    for (var i=0; i<chart.data.labels.length; i++) {
			      console.log(chart.data.datasets[i]); // see what's inside the obj.
			      text.push('<tr>');
			      text.push('<td><i class="dot" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></i></td>');
			      text.push('<td class="key">'+chart.data.labels[i]+ "</td>");
			      text.push('<td class="value">'+chart.data.datasets[0].data[i] + "%</td>");
			      text.push('</tr>');
			    }
			    text.push('</table>');
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
						"#446EC2",
						"#2196F3"],
					borderColor: "transparent"
				}]
			},
			options: {
        legendCallback: function(chart) {
			    var text = [];
/*
			    text.push('<ul>');
			    for (var i=0; i<chart.data.labels.length; i++) {
			      console.log(chart.data.datasets[i]); // see what's inside the obj.
			      text.push('<li>');
			      text.push('<i class="dot" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></i>');
			      text.push('<span class="key">'+chart.data.labels[i]+ "</span>");
			      text.push('<span class="value">'+chart.data.datasets[0].data[i] + "%</span>");
			      text.push('</li>');
			    }
			    text.push('</ul>');
*/
					text.push('<table>');
			    for (var i=0; i<chart.data.labels.length; i++) {
			      console.log(chart.data.datasets[i]); // see what's inside the obj.
			      text.push('<tr>');
			      text.push('<td><i class="dot" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></i></td>');
			      text.push('<td class="key">'+chart.data.labels[i]+ "</td>");
			      text.push('<td class="value">'+chart.data.datasets[0].data[i] + "%</td>");
			      text.push('</tr>');
			    }
			    text.push('</table>');
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
						"#446EC2",
						"#2196F3"],
					borderColor: "transparent"
				}]
			},
			options: {
        legendCallback: function(chart) {
			    var text = [];
/*
			    text.push('<ul>');
			    for (var i=0; i<chart.data.labels.length; i++) {
			      console.log(chart.data.datasets[i]); // see what's inside the obj.
			      text.push('<li>');
			      text.push('<i class="dot" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></i>');
			      text.push('<span class="key">'+chart.data.labels[i]+ "</span>");
			      text.push('<span class="value">'+chart.data.datasets[0].data[i] + "%</span>");
			      text.push('</li>');
			    }
			    text.push('</ul>');
*/
					text.push('<table>');
			    for (var i=0; i<chart.data.labels.length; i++) {
			      console.log(chart.data.datasets[i]); // see what's inside the obj.
			      text.push('<tr>');
			      text.push('<td><i class="dot" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></i></td>');
			      text.push('<td class="key">'+chart.data.labels[i]+ "</td>");
			      text.push('<td class="value">'+chart.data.datasets[0].data[i] + "%</td>");
			      text.push('</tr>');
			    }
			    text.push('</table>');
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
						"#446EC2"],
					borderColor: "transparent"
				}]
			},
			options: {
        legendCallback: function(chart) {
			    var text = [];
/*
			    text.push('<ul>');
			    for (var i=0; i<chart.data.labels.length; i++) {
			      console.log(chart.data.datasets[i]); // see what's inside the obj.
			      text.push('<li>');
			      text.push('<i class="dot" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></i>');
			      text.push('<span class="key">'+chart.data.labels[i]+ "</span>");
			      text.push('<span class="value">'+chart.data.datasets[0].data[i] + "%</span>");
			      text.push('</li>');
			    }
			    text.push('</ul>');
*/
					text.push('<table>');
			    for (var i=0; i<chart.data.labels.length; i++) {
			      console.log(chart.data.datasets[i]); // see what's inside the obj.
			      text.push('<tr>');
			      text.push('<td><i class="dot" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></i></td>');
			      text.push('<td class="key">'+chart.data.labels[i]+ "</td>");
			      text.push('<td class="value">'+chart.data.datasets[0].data[i] + "%</td>");
			      text.push('</tr>');
			    }
			    text.push('</table>');
			    return text.join("");
        }
    	}

		});
		$("#customerSegmentsChartLegend").html(myChart.generateLegend());
	}


});
