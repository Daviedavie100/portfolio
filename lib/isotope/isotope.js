//JavaScript to initialize Isotope -->

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Isotope
    var iso = new Isotope('.workfolio-container', {
        itemSelector: '.workfolio-item',
        layoutMode: 'fitRows',
        filter: '.filter-1' // Show only Python items (filter-4) by default
    });

    // Filter items on click
    var filtersElem = document.querySelector('#workfolio-filter');
    filtersElem.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            // Get filter value from clicked item
            var filterValue = event.target.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });

            // Remove 'filter-active' from all items, then add it to the clicked item
            document.querySelectorAll('#workfolio-filter li').forEach(function (item) {
                item.classList.remove('filter-active');
            });
            event.target.classList.add('filter-active');
        }
    });
});
