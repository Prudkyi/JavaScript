import * as prdkFunctions from "./modules/functions.js";

/* Start */
prdkFunctions.isWebP();

/* go Work */
const mainBlock = document.getElementById("main"),
    contextMenu = document.getElementById("contextMenu");

function clickMain (event) {
    event.preventDefault();
    let positionX = event.clientX + 10,
        positionY = event.clientY + 10;

    contextMenu.style.top = `${positionY}px`;
    contextMenu.style.left = `${positionX}px`;
    contextMenu.style.display = "inline-block";

    let idElement = "";
    idElement = event.target.id;

    function menuEvent (event) {
        /* ----> !!! Here the event executes all previous clicks */
        console.log(idElement)

        event.target.closest("li").classList.forEach(thisClass => {

            if (thisClass === "contextMenu__redColor") {
                console.log("red")
            }
            if (thisClass === "contextMenu__greenColor") {
                console.log("green")
            }
        })
    }

    contextMenu.addEventListener('click', menuEvent);

}

mainBlock.addEventListener("contextmenu", clickMain);

function closeContextMenu (event) {
    contextMenu.style.display = "none";
}

function setColor (element, color) {
    let el = document.getElementById(element);
    el.classList = " ";
    switch (color) {
        case 'red':
            el.classList = "redColor";
            break;
        case 'green':
            el.classList = "greenColor";
            break;
    }

}


document.addEventListener("click", closeContextMenu, {capture: true})




















