import * as prdkFunctions from "./modules/functions.js";
import MoreArray from "./modules/people.js";

/* Start */
prdkFunctions.isWebP();

/* lesson */

const myArr = new MoreArray(1,2,3,3,4);

var initialValue = 0;
var sum = [1,2,3].reduce(
    (accumulator, currentValue) => {
        console.log(`${accumulator} ${currentValue}`)
        return accumulator + currentValue
    },
    initialValue
);
console.log(sum)

console.log(' ')

myArr.checkAlike()

