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

                // Hide message after 3 seconds (3000ms)
                setTimeout(() => {
                    successMessage.style.display = "none";
                }, 3000);
            } else {
                successMessage.innerText = "Error sending message.\nPlease try again.";
                successMessage.style.color = "red";
                successMessage.style.display = "block";

                // Hide message after 3 seconds
                setTimeout(() => {
                    successMessage.style.display = "none";
                }, 3000);
            }
        } catch (error) {
            successMessage.innerText = "An error occurred.\nPlease try again later.";
            successMessage.style.color = "red";
            successMessage.style.display = "block";

            // Hide message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 3000);
        }
    });
});