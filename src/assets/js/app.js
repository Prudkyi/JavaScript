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

        console.log(event.target.closest("li").classList)

        event.target.classList.forEach(thisClass => {

            if (thisClass === "contextMenu__redColor") {
                setColor(idElement, "red");
                return;
            }
            if (thisClass === "contextMenu__greenColor") {
                setColor(idElement, "green");

            }
        })
    }

    contextMenu.addEventListener('click', menuEvent);

}

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

mainBlock.addEventListener("contextmenu", clickMain);
document.addEventListener("click", closeContextMenu)




















