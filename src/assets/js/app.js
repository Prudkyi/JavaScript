import * as prdkFunctions from "./modules/functions.js";

/* Start */
prdkFunctions.isWebP();

/* go Work */

'use strict'

function createLid (country) {
    return function lid (name) {
        console.log(`${name} - ${country}`)
    }
}

let ukr = createLid('Ukraine');
ukr('Petro');
ukr('Vasiliy');

console.log(' ')

let pl = createLid('Poland');
pl('Robert');
pl('Tomek');

console.log(' ')

let bl = createLid('Belarus');
bl('Andriy');
bl('Sergey');



