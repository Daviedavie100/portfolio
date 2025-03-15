document.addEventListener("DOMContentLoaded", function () {
    // Filter buttons
    const filterButtons = document.querySelectorAll("#workfolio-filter li");
    const workfolioItems = document.querySelectorAll(".daviefolio-narrow-content .workfolio-item");
    const loadMoreButton = document.getElementById("load-more");

    // Initialize Isotope on the container
    const iso = new Isotope('.workfolio-container', {
        itemSelector: '.workfolio-item',
        layoutMode: 'fitRows'
    });

    // Set the initial filter to '.filter-1'
    let activeFilter = ".filter-1";
    let visibleItems = 0; // Keep track of visible items
    const itemsToShow = 2; // Number of items to show at a time

    // Function to filter and display items based on active filter
    function filterItems() {
        visibleItems = 0;
        
        // Use Isotope's arrange method to filter items
        iso.arrange({
            filter: activeFilter === "*" ? '*' : activeFilter
        });

        // Get the filtered items (ones currently shown by Isotope)
        const filteredItems = Array.from(workfolioItems).filter(item =>
            item.classList.contains(activeFilter.substring(1))
        );

        // Initially hide all filtered items
        filteredItems.forEach(item => {
            item.style.display = "none";
            item.classList.add("hidden");
        });

        showNextItems(filteredItems); // Show the next set of items
    }

    // Function to show the next set of items
    function showNextItems(items) {
        const totalItems = items.length;
        const nextItemsToShow = visibleItems + itemsToShow;

        // Loop to reveal the next hidden items
        for (let i = visibleItems; i < nextItemsToShow && i < totalItems; i++) {
            items[i].style.display = "block"; // Display the item
            items[i].classList.remove("hidden"); // Remove the hidden class
        }

        visibleItems += itemsToShow;

        // Hide the "Load More" button if all items are shown
        if (visibleItems >= totalItems) {
            loadMoreButton.style.display = "none";
        } else {
            loadMoreButton.style.display = "block"; // Show the button if more items are available
        }

        // Re-layout Isotope to accommodate shown items
        iso.layout();
    }

    // Event listener for filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to the clicked button
            this.classList.add("active");

            // Update active filter
            activeFilter = this.getAttribute("data-filter");

            // Filter and display items
            filterItems();
        });
    });

    // Event listener for "Load More" button
    loadMoreButton.addEventListener("click", function () {
        const filteredItems = Array.from(workfolioItems).filter(item =>
            item.classList.contains(activeFilter.substring(1))
        );
        showNextItems(filteredItems);
    });

    // Initial display with the default filter
    filterItems();
});