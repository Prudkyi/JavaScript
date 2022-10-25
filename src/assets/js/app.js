import * as prdkFunctions from "./modules/functions.js";

/* Start */
prdkFunctions.isWebP();

/* go Work */

let main__text = document.querySelector('.main__text');
let h1 = document.querySelector('#main h1');

const dubleH1 = h1.cloneNode(true);

main__text.append(dubleH1)


console.log(getComputedStyle(h1).fontSize)













