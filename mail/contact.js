$(function () {
    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitSuccess: function ($form, event) {
            event.preventDefault();

            var form = document.getElementById('contactForm');
            var formData = new FormData(form);

            fetch('contact.php', { // Ensure this matches your PHP file
                method: 'POST',
                body: formData
            })
            .then(response => response.json()) // Convert response to JSON
            .then(data => {
                console.log("Server Response:", data); // Debugging in console

                if (data.status === "success") {
                    $('#success').html("<div class='alert alert-success'>")
                        .append("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                        .append("<strong>" + data.message + "</strong>")
                        .append('</div>');
                    form.reset(); // Clear the form
                } else {
                    $('#success').html("<div class='alert alert-danger'>")
                        .append("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                        .append("<strong>" + data.message + "</strong>")
                        .append('</div>');
                }
            })
            .catch(error => {
                console.error("Error:", error);
                $('#success').html("<div class='alert alert-danger'>")
                    .append("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                    .append("<strong>An error occurred. Please try again later.</strong>")
                    .append('</div>');
            })
            .finally(() => {
                $('#sendMessageButton').prop("disabled", false);
            });
        }
    });

    $('#name').focus(function () {
        $('#success').html(''); // Clear success message when name field is focused
    });
});

/*$(function () {
    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // Optional: You can log the errors here if needed
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();

            var form = document.getElementById('contactForm');
            var formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                        .append("<strong>Your message has been sent. </strong>")
                        .append('</div>');
                    form.reset(); // Clear the form
                } else {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                        .append($("<strong>").text("Sorry, there was a problem with your submission. Please try again later."));
                    $('#success > .alert-danger').append('</div>');
                }
            }).catch(error => {
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                    .append($("<strong>").text("An error occurred. Please try again later."));
                $('#success > .alert-danger').append('</div>');
            }).finally(() => {
                $('#sendMessageButton').prop("disabled", false);
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html(''); // Clear the success message when the name field is focused
})*/