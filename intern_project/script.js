const body_dark = document.querySelector(".body_dark");
const body_doc = document.querySelector(".body_doc");

body_dark.addEventListener("click", function () {
  body_doc.classList.toggle("dark_mode");
});
