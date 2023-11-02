const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-mobile");

burger.addEventListener("click", function() {
    this.classList.toggle("active");
    nav.classList.toggle("active");
});

