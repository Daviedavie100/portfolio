document.addEventListener("DOMContentLoaded", function () {
  // Filter buttons
  const filterButtons = document.querySelectorAll("#workfolio-filter li");
  const workfolioItems = document.querySelectorAll(
    ".daviefolio-narrow-content .workfolio-item",
    ".daviefolio-project-narrow-content .workfolio-item"
  );
  const loadMoreButton = document.getElementById("load-more");

  // Set the initial filter to '.filter-1'
  let activeFilter = ".filter-1";
  let visibleItems = 0; // Keep track of visible items
  const itemsToShow = 2; // Number of items to show at a time

  // Function to filter and display items based on active filter
  function filterItems() {
    visibleItems = 0;
    // Hide all items initially
    workfolioItems.forEach((item) => {
      item.classList.add("hidden"); // Initially hide all items
      item.style.display = "none"; // Also set display to none
    });

    // Show items matching the active filter
    const filteredItems = Array.from(workfolioItems).filter((item) =>
      item.classList.contains(activeFilter.substring(1))
    );

    showNextItems(filteredItems); // Show the next set of items
  }

  // Function to show the next set of items
  function showNextItems(items) {
    const totalItems = items.length;
    const nextItemsToShow = visibleItems + itemsToShow;

    // Loop to reveal the next hidden items
    for (let i = visibleItems; i < nextItemsToShow && i < totalItems; i++) {
      items[i].classList.remove("hidden"); // Remove the hidden class
      items[i].style.display = "block"; // Display the item
    }

    visibleItems += itemsToShow;

    // Hide the "Load More" button if all items are shown
    if (visibleItems >= totalItems) {
      loadMoreButton.style.display = "none";
    } else {
      loadMoreButton.style.display = "block"; // Show the button if more items are available
    }
  }

  // Event listener for filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
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
    const filteredItems = Array.from(workfolioItems).filter((item) =>
      item.classList.contains(activeFilter.substring(1))
    );
    showNextItems(filteredItems);
  });

  // Initial display with the default filter
  filterItems();
});