document.addEventListener("DOMContentLoaded", function() {
    // Initialize Isotope
    var iso = new Isotope('#workfolio', {
        // Options
        itemSelector: '.workfolio-item',
        layoutMode: 'fitRows',
        filter: '*', // Show all items initially
        percentPosition: true
    });

    // Filter items when filter link is clicked
    var filterButtons = document.querySelectorAll('#workfolio-filter li');

    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Remove the 'active' class from all buttons
            filterButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            // Add the 'active' class to the clicked button
            button.classList.add('active');

            // Get the filter value from the clicked button
            var filterValue = button.getAttribute('data-filter');

            // Use Isotope to filter items
            iso.arrange({
                filter: filterValue
            });
        });
    });

    // Load More functionality
    var loadMoreButton = document.getElementById("load-more");
    var hiddenItems = document.querySelectorAll(".workfolio-item.hidden");

    // Show hidden items on clicking Load More
    loadMoreButton.addEventListener("click", function() {
        hiddenItems.forEach(function(item) {
            item.classList.remove("hidden");
            iso.appended(item); // Append new items to Isotope
        });

        // Optionally, hide the "Load More" button after all items are shown
        loadMoreButton.style.display = "none";
    });
});
