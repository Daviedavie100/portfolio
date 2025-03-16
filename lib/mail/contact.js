document.addEventListener("DOMContentLoaded", function () { 
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                successMessage.innerText = "Thank you for contacting David.\nMessage sent successfully!";
                //successMessage.innerHTML = "Thank you for contacting David.<br>Message sent successfully!";
                successMessage.style.display = "block";
                successMessage.style.color = "green"; // Ensure text is visible
                form.reset(); // Clear form after successful submission
            } else {
                successMessage.innerHTML = "Error sending message.<br>Please try again.";
                successMessage.style.color = "red";
                successMessage.style.display = "block";
            }
        } catch (error) {
            successMessage.innerHTML = "An error occurred.<br>Please try again later.";
            successMessage.style.color = "red";
            successMessage.style.display = "block";
        }
    });
});



/*
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
});*/