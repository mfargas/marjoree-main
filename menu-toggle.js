let menu = document.getElementsByClassName("menu-right");
let ham = document.getElementsByClassName("menu-button");
let bars = document.getElementsByClassName("bars");
let xSymbol = document.getElementsByClassName("xSymbol");
const menuItems = document.getElementsByClassName("nav-link");

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