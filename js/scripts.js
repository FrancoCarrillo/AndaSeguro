const navtoggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav");

navtoggle.addEventListener("click", function () {
    navMenu.classList.toggle("nav-menu_visible");
})
