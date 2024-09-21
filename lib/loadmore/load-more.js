document.getElementById('load-more-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Select all hidden project divs
    var hiddenProjects = document.querySelectorAll('.col-md-6.hidden');

    // Show each hidden project
    hiddenProjects.forEach(function(project) {
        project.classList.remove('hidden');
    });

    // Optionally, hide the button if all projects are shown
    this.style.display = 'none';
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