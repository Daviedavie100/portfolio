document.addEventListener("DOMContentLoaded", function () {
    const inputs = ["name", "email", "subject", "message"];

    inputs.forEach(id => {
        const inputElement = document.getElementById(id);

        if (inputElement) {
            inputElement.addEventListener("focus", function () {
                inputElement.style.backgroundColor = "white";
                inputElement.style.color = "black";
            });

            inputElement.addEventListener("input", function () {
                inputElement.style.backgroundColor = "white";
                inputElement.style.color = "black";
            });

            inputElement.addEventListener("blur", function () {
                inputElement.style.backgroundColor = "";
                inputElement.style.color = "";
            });
        }
    });
});