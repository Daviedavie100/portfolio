//JavaScript to initialize Isotope -->

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Isotope
    var iso = new Isotope('.workfolio-container', {  // Corrected to match HTML class
        itemSelector: '.workfolio-item',
        layoutMode: 'fitRows'
    });

    // Filter items on click
    var filtersElem = document.querySelector('#workfolio-filter');
    filtersElem.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            // Get filter value from clicked item
            var filterValue = event.target.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });

            // Add 'filter-active' class to clicked item
            document.querySelectorAll('#workfolio-filter li').forEach(function (item) {
                item.classList.remove('filter-active');
            });
            event.target.classList.add('filter-active');
        }
    });
});
