// hamburger menu for navbar
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// FOOTER POPUP - SPECIFICALLY TARGET NEWSLETTER FORM ONLY
const closeBtn = document.getElementById("closePopup");
const modal = document.getElementById("popup");
const newsletterForm = document.getElementById("newsLetterForm");

// Only handle newsletter form
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    modal.classList.add("open");
    // Optional: Clear the form after submission
    newsletterForm.reset();
  });
}

// Handle contact form separately
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Handle contact form submission (AJAX, etc.)
    console.log("Contact form submitted");
    // Optional: Clear the form after submission
    contactForm.reset();
    alert("Thank you! We'll get back to you as soon as we can.");
  });
}

// Close popup handler
if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    modal.classList.remove("open");
  });
}
