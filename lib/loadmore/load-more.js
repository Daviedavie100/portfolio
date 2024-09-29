document.getElementById('load-more-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the active filter class from the filter menu
    var activeFilter = document.querySelector('#workfolio-filter li.active').getAttribute('data-filter');

    // Select all hidden project divs that match the active filter
    var hiddenProjects = document.querySelectorAll(`.col-md-6.workfolio-item.hidden${activeFilter}`);

    // Show each hidden project that belongs to the active filter
    hiddenProjects.forEach(function(project) {
        project.classList.remove('hidden');
        project.classList.add('animate-box'); // Optionally re-add animation
    });

    // Optionally, hide the button if no more hidden projects exist
    if (document.querySelectorAll('.col-md-6.workfolio-item.hidden').length === 0) {
        this.style.display = 'none';
    }
});

// Filter menu functionality update to work with hidden items
document.querySelectorAll("#workfolio-filter li").forEach(function(filterBtn) {
    filterBtn.addEventListener("click", function() {
        // Remove the 'active' class from all filters and add it to the clicked one
        document.querySelector("#workfolio-filter li.active").classList.remove("active");
        this.classList.add("active");

        // Get the filter class for the clicked filter
        var filterClass = this.getAttribute('data-filter');

        // Show or hide projects based on the selected filter
        document.querySelectorAll(".workfolio-item").forEach(function(item) {
            if (item.classList.contains(filterClass.replace(".", ""))) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

        // Ensure hidden items are hidden again when filters are applied
        document.querySelectorAll(`.workfolio-item.hidden`).forEach(function(item) {
            item.style.display = "none";
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var currentLocation = window.location.href;
    var menuItems = document.querySelectorAll('#colorlib-main-menu ul li a');

    menuItems.forEach(function(item) {
        if (currentLocation.includes(item.getAttribute('href'))) {
            document.querySelector('#colorlib-main-menu ul li.active').classList.remove('active');
            item.parentElement.classList.add('active');
        }
    });
});


