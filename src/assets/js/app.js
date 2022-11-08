import Form from "./modules/people.js";
import FetchAjax from "./modules/ajax.js";

new Form("contactForm", "nameUser", "emailUser", "phoneUser");

const ajaxForm = new FetchAjax("https://jsonplaceholder.typicode.com/users");

function getLongestString(strings) {
    return strings
        .reduce(
            function (longest, word) {
                return word.length > longest.length
                    ? word
                    : longest;
            },
            ''
        );
}

console.log(getLongestString(['One', 'two', 'three', 'four']))
console.log(getLongestString(['One', 'two', 'six']))







