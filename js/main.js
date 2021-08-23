document.querySelector("#mobile-bar-cta").addEventListener("click", function() {
    document.querySelector(".mobile-menu-container").style.display = "block";
    document.querySelector(".mobile-menu").classList.toggle("show-menu", true);
    document.querySelector(".mobile-menu").classList.toggle("hide-menu", false);
})

document.querySelector("#close_btn").addEventListener("click", function() {
    document.querySelector(".mobile-menu").classList.toggle("show-menu", true);
    document.querySelector(".mobile-menu").classList.toggle("hide-menu", false);
    document.querySelector(".mobile-menu-container").style.display = "none";
})