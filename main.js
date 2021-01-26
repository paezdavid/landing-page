
let openBtn = document.querySelector(".open-btn");
let closeBtn = document.querySelector(".close-btn");
let menu = document.querySelector(".mobile-menu");

openBtn.addEventListener("click", () => {
    menu.classList.add("open-menu");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("open-menu");
});