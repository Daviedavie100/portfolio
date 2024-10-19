document.addEventListener('DOMContentLoaded', function () {
    // Get the canvas element by ID and set up the context for Chart.js
    var ctx = document.getElementById('myChart').getContext('2d');

    // Create a new bar chart
    var myChart = new Chart(ctx, {
        type: 'bar', // Define the chart type as 'bar'
        data: {

            // Define the labels for the x-axis
            labels: ['SQL', 'Excel', 'Python', 'Wrangling', 'Power BI', 'R'],
            datasets: [{
                label: 'Skill Level (%)', // Label for the dataset
                data: [85, 85, 80, 80, 75, 70], // Percentages 
                // 85% - highly proficient | 80% - skilled | 75% - solid grasp but still developing.
                // 70% - working knowledge but may not have extensive experience | 65% - familiar with R but primarily use other tools.
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1, // Set the border width of the bars
                barPercentage: 0.5, // Adjust the width of the bars (0.5 = 50% of default width)
                categoryPercentage: 0.6 // Reduce spacing between bars
            }]
        },
        options: {
            layout: {
                padding: {
                    top: 25, // Increase this value to add space at the top
                    bottom: 5 // Optionally add space at the bottom
                }
            },
            plugins: {
                legend: {
                    display: false // Hide the legend
                },
                tooltip: {
                    enabled: false // Disables the tooltip on hover
                },
                datalabels: {
                    display: true, // Enable data labels on the bars
                    anchor: 'end',
                    align: 'end', // Adjust the alignment
                    formatter: function (value) {
                        return value + '%'; // Add '%' symbol to the value
                    },
                    color: '#e0e3f0', // Set the color of the data labels
                    font: {
                        weight: 'regular', // Make the data labels bold
                        size: 14 // Set font size for better visibility
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false, // Ensure responsiveness
            scales: {
                x: {
                    grid: {
                        display: false // Remove the grid lines on the x-axis
                    },
                    ticks: {
                        padding: 10, // Increase padding between labels and bars
                        color: '#e0e3f0', // Set the color of the x-axis labels here
                        font: {
                            size: 14, // Set the font size of the x-axis labels
                            weight: 'regular', // Make the x-axis labels bold
                            family: 'Quicksand' //Arial, 'sans-serif'
                        }
                    },
                },
                y: {
                    beginAtZero: true,
                    display: false // Remove the y-axis itself
                }
            }
        },
        plugins: [ChartDataLabels] // Add this plugin to enable data labels
    });
});
