document.addEventListener("DOMContentLoaded", function () { 
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form field values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate form fields
        if (name.length < 3) {
            showMessage("Name must be at least 3 characters long!", "red");
            return;
        }
        if (!emailRegex.test(email)) {
            showMessage("Please enter a valid email address!", "red");
            return;
        }
        if (subject.length < 3) {
            showMessage("Subject must be at least 3 characters long!", "red");
            return;
        }
        if (!message) {
            showMessage("Message cannot be empty!", "red");
            return;
        }

        // Prepare form data
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
                showMessage("Thank you for contacting David.\nMessage sent successfully!", "#E0E0E0"); // Light gray
                form.reset(); // Clear form after successful submission
            } else {
                showMessage("Error sending message.\nPlease try again.", "#FFD700"); // Yellow
            }
        } catch (error) {
            showMessage("An error occurred.\nPlease try again later.", "#FFD700"); // Yellow
        }
    });

    // Function to display messages
    function showMessage(text, color) {
        successMessage.innerText = text;
        successMessage.style.color = color;
        successMessage.style.display = "block";

        // Hide message after 4 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 4000);
    }
});


/*document.addEventListener("DOMContentLoaded", function () { 
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
                successMessage.style.color = " #E0E0E0";
                form.reset(); // Clear form after successful submission

                // Hide message after 3 seconds (3000ms)
                setTimeout(() => {
                    successMessage.style.display = "none";
                }, 3000);
            } else {
                successMessage.innerText = "Error sending message.\nPlease try again.";
                successMessage.style.color = " #FFD700";
                successMessage.style.display = "block";

                // Hide message after 3 seconds
                setTimeout(() => {
                    successMessage.style.display = "none";
                }, 3000);
            }
        } catch (error) {
            successMessage.innerText = "An error occurred.\nPlease try again later.";
            successMessage.style.color = " #FFD700";
            successMessage.style.display = "block";

            // Hide message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 3000);
        }
    });
});*/