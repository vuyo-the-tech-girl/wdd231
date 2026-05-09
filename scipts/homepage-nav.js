const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav-menu");

menu.addEventListener("click", () => {
nav.classList.toggle("open");
menu.textContent = nav.classList.contains("open") ? "X" : "☰";
});