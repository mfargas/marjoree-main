let menu = document.querySelector(".menu");
let ham = document.querySelector(".menu-button");
let bars = document.querySelector(".bars");
let xSymbol = document.querySelector(".xSymbol");

ham.addEventListener("click", toggleMenu);

function toggleMenu(){
    if(ham.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
        bars.style.display = "none";
        xSymbol.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        bars.style.display = "block";
        xSymbol.style.display = "none";
    }
}

function showMenu(){
    if(menu.style.display == "none"){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
};

let menuLinks = document.querySelector(".nav-link");

menuLinks.forEach(
    function(menuLink){
        menuLink.addEventListener("click", toggleMenu);
    }
)