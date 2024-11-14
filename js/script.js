let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick = () =>{
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
    },
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#book form");
    const nameInput = form.querySelector("input[type='text']");
    const emailInput = form.querySelector("input[type='email']");
    const phoneInput = form.querySelector("input[type='number']");
    const messageInput = form.querySelector("textarea");

    form.addEventListener("submit", function (event) {
        // Prevent form submission
        event.preventDefault();

        // Validation flags
        let isValid = true;

        // Name Validation
        const nameValue = nameInput.value.trim();
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (nameValue === "" || !nameRegex.test(nameValue)) {
            alert("Please enter a valid name (only letters and spaces).");
            isValid = false;
        }

        // Email Validation
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === "" || !emailRegex.test(emailValue)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Phone Number Validation
        const phoneValue = phoneInput.value.trim();
        const phoneRegex = /^[0-9]{10,}$/;
        if (phoneValue === "" || !phoneRegex.test(phoneValue)) {
            alert("Please enter a valid phone number with at least 10 digits.");
            isValid = false;
        }

        // Message Validation
        const messageValue = messageInput.value.trim();
        if (messageValue === "") {
            alert("Please enter a message.");
            isValid = false;
        }

        // If all validations pass, submit the form
        if (isValid) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });
});