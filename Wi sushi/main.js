var logo = document.querySelector(".logo");
var menu = document.querySelector("ul");
logo.addEventListener("click", function(){
    menu.classList.toggle("active");
})
var string = document.querySelector(".first-price-display");
var matches = string.textContent.match(/(\d+)/);