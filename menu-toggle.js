let menu = document.querySelector(".menu");
let ham = document.querySelector(".menu-button");
let bars = document.querySelector(".bars");
let xSymbol = document.querySelector(".xSymbol");
const menuItems = document.querySelector(".nav-link");

function toggleMenu(){
    menuItems.forEach(nav => nav.classList.toggle('nav-toggle-showing'));
}

ham.addEventListener('click', toggleMenu);