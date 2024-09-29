document.addEventListener('DOMContentLoaded', function () {
    // Ensure the Load More button logic is set after the DOM is loaded
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Get the active filter class from the filter menu
            var activeFilterItem = document.querySelector('#workfolio-filter li.active');
            var activeFilter = activeFilterItem ? activeFilterItem.getAttribute('data-filter') : '.filter-1'; // Set a default if none active

            // Select all hidden project divs that match the active filter
            var hiddenProjects = document.querySelectorAll(`.col-md-6.workfolio-item.hidden${activeFilter}`);

            // Show each hidden project that belongs to the active filter
            hiddenProjects.forEach(function (project) {
                project.classList.remove('hidden');
                project.classList.add('animate-box'); // Optionally re-add animation
            });

            // Optionally, hide the button if no more hidden projects exist
            if (document.querySelectorAll('.col-md-6.workfolio-item.hidden').length === 0) {
                this.style.display = 'none';
            }
        });

        // Filter menu functionality update to work with hidden items
        document.querySelectorAll("#workfolio-filter li").forEach(function (filterBtn) {
            filterBtn.addEventListener("click", function () {
                // Remove the 'active' class from all filters and add it to the clicked one
                var currentActive = document.querySelector("#workfolio-filter li.active");
                if (currentActive) {
                    currentActive.classList.remove("active");
                }
                this.classList.add("active");

                // Get the filter class for the clicked filter
                var filterClass = this.getAttribute('data-filter');

                // Show or hide projects based on the selected filter
                document.querySelectorAll(".workfolio-item").forEach(function (item) {
                    if (item.classList.contains(filterClass.replace(".", ""))) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                });

                // Ensure hidden items are hidden again when filters are applied
                document.querySelectorAll(`.workfolio-item.hidden`).forEach(function (item) {
                    item.style.display = "none";
                });
            });
        });
    }
});