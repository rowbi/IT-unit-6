document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const applicationForm = document.getElementById("application-form");
    const thankYouMessage = document.getElementById("thank-you-message");
    const specialAccessDropdown = document.getElementById("special-access");
    const extraInfoContainer = document.getElementById("extra-info-container");

    submitButton.addEventListener("click", function () {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scroll
        });

        applicationForm.classList.remove("show");
        setTimeout(() => {
            applicationForm.style.display = "none";
            thankYouMessage.style.display = "block";
            thankYouMessage.classList.add("show");
        }, 500);
    });

    specialAccessDropdown.addEventListener("change", function () {
        if (specialAccessDropdown.value === "yes") {
            extraInfoContainer.style.display = "block";
        } else {
            extraInfoContainer.style.display = "none";
        }
    });
});
