import * as prdkFunctions from "./modules/functions.js";

/* Start */
prdkFunctions.isWebP();

/* go Work */

const mainBlock = document.getElementById("main"),
    contextMenu = document.getElementById("contextMenu");
let idElement = "";

function clickMain (event) {
    event.preventDefault();
    let positionX = event.clientX + 10,
        positionY = event.clientY + 10;

    contextMenu.style.top = `${positionY}px`;
    contextMenu.style.left = `${positionX}px`;
    contextMenu.style.display = "inline-block";

    idElement = event.target.id;
}

function closeContextMenu (event) {
    contextMenu.style.display = "none";
    removeBorder();
}
function menuEvent (event) {

    event.target.closest("li").classList.forEach(thisClass => {

        if (thisClass === "contextMenu__redColor") {
            setColor(idElement, "red");
        }
        else if (thisClass === "contextMenu__greenColor") {
            setColor(idElement, "green");
        }
        else {
            setColor(idElement, "default");
        }
    })
}
function setColor (element, color) {
    let el = document.getElementById(element);
    el.classList = "";
    switch (color) {
        case 'red':
            el.classList = "redColor";
            break;
        case 'green':
            el.classList = "greenColor";
            break;
        case 'default':
            el.classList = "";
            break;
    }

}
function setBorder (event) {
    document.getElementById(idElement).classList.add("yellowBorder");
}
function removeBorder (event) {
    document.getElementById(idElement).classList.remove("yellowBorder");
}

mainBlock.addEventListener("contextmenu", clickMain, setBorder);
mainBlock.addEventListener("contextmenu", setBorder);
contextMenu.addEventListener('click', menuEvent);
document.addEventListener("click", closeContextMenu)




















