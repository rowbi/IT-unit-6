document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const applicationForm = document.getElementById("application-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    submitButton.addEventListener("click", function () {
        // Fade out the form
        applicationForm.classList.remove("show");
        setTimeout(() => {
            applicationForm.style.display = "none"; // Hide form after fade-out
            thankYouMessage.style.display = "block"; // Show thank you message
            thankYouMessage.classList.add("show");
        }, 500); // Match the transition duration
    });
});
