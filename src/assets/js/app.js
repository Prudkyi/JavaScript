import * as prdkFunctions from "./modules/functions.js";

/* Start */
prdkFunctions.isWebP();

/* go Work */

'use strict'

let myText = document.querySelector(".text");

let content = myText.innerHTML;

console.log(content)

myText.innerHTML = `${content} New text`;

let content2 = myText.innerHTML;
console.log(content2);







