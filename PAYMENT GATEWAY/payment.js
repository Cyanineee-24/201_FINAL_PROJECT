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
