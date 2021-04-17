var menu = document.querySelector(".menu");
var ham = document.querySelector(".menu-button");
var bars = document.querySelector(".bars");
var xSymbol = document.querySelector(".xSymbol");

ham.addEventListener("click", toggleMenu);

function toggleMenu(){
    if(ham.classList.contains("showMenu")){
        menu.classList.remove("showMe");
        bars.style.display = "none";
        xSymbol.style.display = "block";
    } else {
        menu.classList.add("showMe");
        bars.style.display = "block";
        xSymbol.style.display = "none";
    }
}

var menuLinks = document.querySelector(".nav-link");

menuLinks.forEach(
    function(menuLink){
        menuLink.addEventListener("click", toggleMenu);
    }
)