//JavaScript to initialize Isotope -->

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Isotope
    var iso = new Isotope('.portfolio-items', {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    // Filter items on click
    var filtersElem = document.querySelector('#portfolio-filter');
    filtersElem.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            // Get filter value from clicked item
            var filterValue = event.target.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });

            // Add 'filter-active' class to clicked item
            document.querySelectorAll('#portfolio-filter li').forEach(function (item) {
                item.classList.remove('filter-active');
            });
            event.target.classList.add('filter-active');
        }
    });
});
