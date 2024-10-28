document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#booking-form form");
    const ageLicenseCheckbox = document.getElementById("age-license");

    // Function to validate form
    function validateForm(event) {
        if (!ageLicenseCheckbox.checked) {
            event.preventDefault(); // Prevent form submission
            showError("You must confirm that you are over 24 years old and possess a valid driving license.");
        } else {
            clearError(); // Clear any previous error message
        }
    }

    // Function to show error message
    function showError(message) {
        let errorContainer = document.querySelector(".error-message");
        if (!errorContainer) {
            errorContainer = document.createElement("div");
            errorContainer.className = "error-message";
            errorContainer.style.color = "red"; // You can style it as needed
            errorContainer.style.marginBottom = "10px";
            form.insertBefore(errorContainer, form.firstChild);
        }
        errorContainer.textContent = message;
    }

    // Function to clear error message
    function clearError() {
        const errorContainer = document.querySelector(".error-message");
        if (errorContainer) {
            errorContainer.remove();
        }
    }

    form.addEventListener("submit", validateForm);
});