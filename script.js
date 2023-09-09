const mainMenu = document.querySelector(".mainMenu")
const closeMenu = document.querySelector(".closeMenu")
const openMenu = document.querySelector(".openMenu")
const body = document.querySelector("body")



openMenu.addEventListener("click", show);
closeMenu.addEventListener("click" ,close);


function show(){
    mainMenu.style.display ="flex";
    mainMenu.style.top ="0";
    body.style.backgroundColor = "rgb(193, 193, 197)"
    body.style.transition = ".3s"
}
function close(){
    mainMenu.style.top = "-200%"
    body.style.backgroundColor = "white"
    body.style.transition = ".3s"
}