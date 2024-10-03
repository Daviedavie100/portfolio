// JavaScript for filtering the workfolio items
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Isotope
    var elem = document.querySelector('.workfolio-container');
    var iso = new Isotope(elem, {
        itemSelector: '.workfolio-item',
        layoutMode: 'fitRows'
    });

    // Filter buttons
    const filterButtons = document.querySelectorAll("#workfolio-filter li");
    
    // Set the initial filter (show all)
    let activeFilter = ".filter-1"; // Show all by default

    // Filter click event
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to the clicked button
            this.classList.add("active");

            // Get the filter class
            activeFilter = this.getAttribute("data-filter");
            
            // Use Isotope to filter items
            iso.arrange({ filter: activeFilter });
        });
    });

    // JavaScript for "Load More" button
    const loadMoreButton = document.getElementById("load-more");
    
    // Show more items on click
    loadMoreButton.addEventListener("click", function () {
        // Find all hidden workfolio items that match the active filter
        const hiddenItems = document.querySelectorAll(`.workfolio-item.hidden${activeFilter}`);
        
        if (hiddenItems.length > 0) {
            // Show the first hidden item that matches the filter
            hiddenItems[0].classList.remove('hidden'); // Remove hidden class
            hiddenItems[0].classList.add('visible'); // Add visible class for animation
            iso.appended(hiddenItems[0]); // Append to Isotope

            // Optionally hide the Load More button if no more hidden items remain
            if (hiddenItems.length === 1) {
                loadMoreButton.style.display = "none"; // Hide button if no more items
            }
        }
    });
});
