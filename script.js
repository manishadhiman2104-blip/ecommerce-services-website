const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
const filterButtons = document.querySelectorAll(".filter");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        portfolioCards.forEach(card => {

            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const item = question.parentElement;

        item.classList.toggle("open");

        const icon = question.querySelector("span");

        icon.textContent = item.classList.contains("open") ? "−" : "+";

    });

});
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        document.querySelectorAll(".error").forEach(error => {
            error.textContent = "";
        });

        document.getElementById("formMessage").textContent = "";

        let valid = true;

        if (name.length < 2) {
            document.getElementById("nameError").textContent =
                "Please enter your name.";
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent =
                "Please enter a valid email.";
            valid = false;
        }

        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            document.getElementById("phoneError").textContent =
                "Enter a valid 10-digit phone number.";
            valid = false;
        }

        if (service === "") {
            document.getElementById("serviceError").textContent =
                "Please select a service.";
            valid = false;
        }

        if (message.length < 10) {
            document.getElementById("messageError").textContent =
                "Message should contain at least 10 characters.";
            valid = false;
        }

        if (valid) {

            document.getElementById("formMessage").textContent =
                "Thank you! Your message has been submitted successfully.";

            document.getElementById("formMessage").className =
                "success-message";

            contactForm.reset();
        }

    });

}