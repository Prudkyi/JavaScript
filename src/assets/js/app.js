import * as prdkFunctions from "./modules/functions.js";

/* Start */
prdkFunctions.isWebP();

/* go Work */



let blocks = document.querySelectorAll(".wrapBlock button");



for (let el of blocks) {
    el.addEventListener('click', function (event) {
        for (let allEl of blocks) {
            allEl.closest('.block').classList.remove('blockRed');
        }
        el.closest('.block').classList.add('blockRed');
    })
}














