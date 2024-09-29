document.addEventListener('DOMContentLoaded', function () { 
    const loadMoreBtn = document.getElementById('load-more');
    const itemsPerLoad = 4; // Number of items to load per click
    let currentItems = 0;

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default anchor behavior

            // Get the active filter class from the filter menu
            const activeFilterItem = document.querySelector('#workfolio-filter li.active');
            const activeFilter = activeFilterItem ? activeFilterItem.getAttribute('data-filter') : '.filter-1'; // Default filter if none active

            // Select all hidden project divs that match the active filter
            const hiddenProjects = document.querySelectorAll(`.workfolio-item.hidden${activeFilter}`);

            // Show a specific number of hidden projects in each click (batch loading)
            const totalHidden = hiddenProjects.length;
            const itemsToLoad = Math.min(itemsPerLoad, totalHidden - currentItems); // Load either itemsPerLoad or remaining items

            for (let i = currentItems; i < currentItems + itemsToLoad; i++) {
                hiddenProjects[i].classList.remove('hidden');
                hiddenProjects[i].classList.add('animate-box'); // Optionally add animation
            }

            currentItems += itemsToLoad;

            // Hide the button if no more hidden projects exist
            if (currentItems >= totalHidden) {
                loadMoreBtn.style.display = 'none';
            }
        });

        // Filter menu functionality
        document.querySelectorAll("#workfolio-filter li").forEach(function (filterBtn) {
            filterBtn.addEventListener("click", function () {
                // Remove the 'active' class from all filters and add it to the clicked one
                const currentActive = document.querySelector("#workfolio-filter li.active");
                if (currentActive) {
                    currentActive.classList.remove("active");
                }
                this.classList.add("active");

                // Get the filter class for the clicked filter
                const filterClass = this.getAttribute('data-filter');

                // Show or hide projects based on the selected filter
                document.querySelectorAll(".workfolio-item").forEach(function (item) {
                    if (item.classList.contains(filterClass.replace(".", ""))) {
                        item.style.display = "block"; // Show matching items
                    } else {
                        item.style.display = "none"; // Hide non-matching items
                    }
                });

                // Hide hidden items again when a new filter is applied
                document.querySelectorAll('.workfolio-item.hidden').forEach(function (item) {
                    item.style.display = 'none';
                });

                // Reset Load More button visibility
                currentItems = 0; // Reset counter for load more
                const hiddenItemsCount = document.querySelectorAll(`.workfolio-item.hidden${filterClass}`).length;
                loadMoreBtn.style.display = hiddenItemsCount > 0 ? 'block' : 'none';
            });
        });
    }
});
