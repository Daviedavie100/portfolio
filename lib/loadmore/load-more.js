document.addEventListener("DOMContentLoaded", function () {
    // Filter buttons
    const filterButtons = document.querySelectorAll("#workfolio-filter li");
    const workfolioItems = document.querySelectorAll(".workfolio-container .workfolio-item");
    const loadMoreButton = document.getElementById("load-more");
    const allDavieFolioItems = document.querySelectorAll(".daviefolio-narrow-content .workfolio-item.hidden");

    // Set the initial filter to '.filter-1'
    let activeFilter = ".filter-1";
    let visibleItems = 0;
    const itemsToShow = 2; // Number of items to show at a time

    // Initially show only .filter-1 items in the main workfolio and hide others
    function applyInitialFilter() {
        workfolioItems.forEach(item => {
            if (item.classList.contains(activeFilter.substring(1))) {
                item.style.display = "block"; // Show items with .filter-1
            } else {
                item.style.display = "none"; // Hide non-.filter-1 items
            }
        });
    }

    // Function to filter and display items based on the active filter for the hidden items
    function filterHiddenItems() {
        visibleItems = 0;
        allDavieFolioItems.forEach(item => {
            item.classList.add("hidden"); // Hide all hidden items initially
        });

        const filteredItems = document.querySelectorAll(`.daviefolio-narrow-content ${activeFilter}.hidden`);
        showNextHiddenItems(filteredItems);
    }

    // Function to show the next set of hidden items
    function showNextHiddenItems(items) {
        const totalItems = items.length;
        const nextItemsToShow = visibleItems + itemsToShow;

        // Reveal the next hidden items
        for (let i = visibleItems; i < nextItemsToShow && i < totalItems; i++) {
            items[i].classList.remove("hidden");
        }

        visibleItems += itemsToShow;

        // Hide the "Load More" button if all items are shown
        if (visibleItems >= totalItems) {
            loadMoreButton.style.display = "none";
        } else {
            loadMoreButton.style.display = "block";
        }
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

            // Filter and display items for both the main and hidden workfolios
            applyInitialFilter();
            filterHiddenItems();
        });
    });

    // Event listener for "Load More" button (for hidden items)
    loadMoreButton.addEventListener("click", function () {
        const filteredItems = document.querySelectorAll(`.daviefolio-narrow-content ${activeFilter}.hidden`);
        showNextHiddenItems(filteredItems);
    });

    // Initial display with the default filter
    applyInitialFilter();
    filterHiddenItems();
});



/////////////////



document.addEventListener("DOMContentLoaded", function () {
    // Filter buttons
    const filterButtons = document.querySelectorAll("#workfolio-filter li");
    const workfolioItems = document.querySelectorAll(".workfolio-container .workfolio-item");
  
    // Set the initial filter to '.filter-1'
    let activeFilter = ".filter-1";
  
    // Initially show only .filter-1 items and hide others
    workfolioItems.forEach(item => {
      if (item.classList.contains(activeFilter.substring(1))) {
        item.style.display = "block"; // Show items with .filter-1
      } else {
        item.style.display = "none"; // Hide non-.filter-1 items
      }
    });
  
    // Filter click event
    filterButtons.forEach(button => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Add active class to the clicked button
        this.classList.add("active");
  
        // Get the filter class
        activeFilter = this.getAttribute("data-filter");
  
        // Filter the items based on the active filter
        workfolioItems.forEach(item => {
          if (activeFilter === "*" || item.classList.contains(activeFilter.substring(1))) {
            item.style.display = "block"; // Show matching items
          } else {
            item.style.display = "none"; // Hide non-matching items
          }
        });
      });
    });
  });
  
  
  
  
  //LOAD MORE OUTSIDE 
  document.addEventListener("DOMContentLoaded", function () { 
    const loadMoreButton = document.getElementById("load-more");
    
    // Select hidden items outside the .workfolio-container only
    const hiddenItems = document.querySelectorAll(".daviefolio-narrow-content .workfolio-item.hidden");
    
    let visibleItems = 0;
    const itemsToShow = 2; // Number of items to show at a time
  
    loadMoreButton.addEventListener("click", function () {
      // Calculate how many items to display
      const totalItems = hiddenItems.length;
      const nextItemsToShow = visibleItems + itemsToShow;
  
      // Loop to reveal the next two hidden items
      for (let i = visibleItems; i < nextItemsToShow && i < totalItems; i++) {
        hiddenItems[i].classList.remove("hidden");
      }
  
      visibleItems += itemsToShow;
  
      // Hide the "Load More" button if all items are shown
      if (visibleItems >= totalItems) {
        loadMoreButton.style.display = "none";
      }
    });
  });
  
  
//CHECK ACTIVE MENU

  document.addEventListener("DOMContentLoaded", function () { 
    const filterButtons = document.querySelectorAll("#workfolio-filter li");
    const allWorkfolioItems = document.querySelectorAll(".daviefolio-narrow-content .workfolio-item");
    const loadMoreButton = document.getElementById("load-more");
    let activeFilter = ".filter-1"; // Default active filter
    let visibleItems = 0;
    const itemsToShow = 2; // Number of items to show at a time

    // Function to filter and display items based on active filter
    function filterItems() {
        visibleItems = 0;
        // Hide all items initially
        allWorkfolioItems.forEach(item => {
            item.classList.add("hidden");
        });

        // Show items matching the active filter
        const filteredItems = document.querySelectorAll(`.daviefolio-narrow-content ${activeFilter}.hidden`);
        showNextItems(filteredItems);
    }

    // Function to show the next set of items
    function showNextItems(items) {
        const totalItems = items.length;
        const nextItemsToShow = visibleItems + itemsToShow;

        // Loop to reveal the next hidden items
        for (let i = visibleItems; i < nextItemsToShow && i < totalItems; i++) {
            items[i].classList.remove("hidden");
        }

        visibleItems += itemsToShow;

        // Hide the "Load More" button if all items are shown
        if (visibleItems >= totalItems) {
            loadMoreButton.style.display = "none";
        } else {
            loadMoreButton.style.display = "block";
        }
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
        const filteredItems = document.querySelectorAll(`.daviefolio-narrow-content ${activeFilter}.hidden`);
        showNextItems(filteredItems);
    });

    // Initial display with the default filter
    filterItems();
});
