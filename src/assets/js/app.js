import * as prdkFunctions from "./modules/functions.js";

/* Start */
prdkFunctions.isWebP();

/* go Work */

'use strict'

let myNum = 1.005 + Number.EPSILON;
let numOne = Math.round(myNum * 100) / 100;
console.log(numOne);

let value = "140.58px";
console.log(parseFloat(value))

let value2 = 58 + "Frylancer";

if (isNaN(value2)) {
    console.log("RES NaN")
}

let x = Math.max(10, 20, 30, -5, 1000, 40, 43);
console.log(x);

let y = 12.575;

console.log(Math.floor(y))


