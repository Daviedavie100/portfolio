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
