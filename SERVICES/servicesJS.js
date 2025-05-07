const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelector(".slider-indicator");

// Update the indicator width and position
const updateIndicator = (tab) => {
  sliderIndicator.style.left = `${tab.offsetLeft}px`;
  sliderIndicator.style.width = `${tab.offsetWidth}px`;
};

// Initialize Swiper instance
const swiper = new Swiper(".slider-container", {
  effect: "fade",
  speed: 1300,
  autoplay: { delay: 4000 },
  fadeEffect: {
    crossFade: true, // Ensures a clean fade transition
  },
  on: {
    slideChange: () => {
      updateIndicator(sliderTabs[swiper.activeIndex]);
    },
  },
});

// Update the slide and pagination on tab click
sliderTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    swiper.slideTo(index);
    updateIndicator(tab);
  });
});

updateIndicator(sliderTabs[0]); // Initialize on load
window.addEventListener("resize", () =>
  updateIndicator(sliderTabs[swiper.activeIndex])
);

// hamburger menu for navbar
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// FOOTER POPUP
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const modal = document.getElementById("popup");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});