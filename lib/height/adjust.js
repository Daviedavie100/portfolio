
	// Ensure the DOM is fully loaded
	window.addEventListener('DOMContentLoaded', function () {
		// Get all filter buttons and the "Load More" button
		const filterButtons = document.querySelectorAll("#workfolio-filter li");

		// Function to adjust height between work-box and finsights-desc for the current filter
		function adjustHeights() {
			// Get the active filter
			const activeFilter = document.querySelector("#workfolio-filter li.active").getAttribute('data-filter');

			// Get the filtered elements that are visible
			const workBox = document.querySelector(`.workfolio-item${activeFilter} .work-box`);
			const finsightsDesc = document.querySelector(`.workfolio-item${activeFilter} .finsights-desc`);

			// Ensure both elements are found for the active filter
			if (workBox && finsightsDesc) {
				// Reset heights before recalculating
				workBox.style.height = 'auto';
				finsightsDesc.style.height = 'auto';

				// Get their heights
				const workBoxHeight = workBox.offsetHeight;
				const finsightsDescHeight = finsightsDesc.offsetHeight;

				// Find the larger height
				const maxHeight = Math.max(workBoxHeight, finsightsDescHeight);

				// Apply the max height to both elements
				workBox.style.height = maxHeight + 'px';
				finsightsDesc.style.height = maxHeight + 'px';
			}
		}

		// Event listener for filter buttons
		filterButtons.forEach(button => {
			button.addEventListener("click", function () {
				// Remove active class from all buttons
				filterButtons.forEach(btn => btn.classList.remove("active"));
				// Add active class to the clicked button
				this.classList.add("active");

				// Adjust the heights based on the active filter
				adjustHeights();
			});
		});

		// Adjust heights when the page initially loads
		adjustHeights();
	});