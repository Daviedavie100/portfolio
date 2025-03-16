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
                successMessage.style.display = "block";
                successMessage.style.color = "green";
                form.reset(); // Clear form after successful submission

                // Hide message after 5 seconds (5000ms)
                setTimeout(() => {
                    successMessage.style.display = "none";
                }, 5000);
            } else {
                successMessage.innerText = "Error sending message.\nPlease try again.";
                successMessage.style.color = "red";
                successMessage.style.display = "block";

                // Hide message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = "none";
                }, 5000);
            }
        } catch (error) {
            successMessage.innerText = "An error occurred.\nPlease try again later.";
            successMessage.style.color = "red";
            successMessage.style.display = "block";

            // Hide message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 5000);
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