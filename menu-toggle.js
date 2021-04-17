let menu = document.querySelector(".menu-right");
let ham = document.querySelector(".menu-button");
let bars = document.querySelector(".bars");
let xSymbol = document.querySelector(".xSymbol");
const menuItems = document.querySelector(".nav-link");

function toggleMenu() {
    (menu.classList.contains('active')) ? menu.classList.remove('active') : menu.classLIst.add('active');
}

ham.addEventListener('click', function (e) {
    e.preventDefault();
});

for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function () {
        toggleMenu();
    });
}