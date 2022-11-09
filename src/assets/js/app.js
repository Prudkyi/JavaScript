import Form from "./modules/people.js";
import getData from "./modules/ajax.js";

new Form("contactForm", "nameUser", "emailUser", "phoneUser");

const url = "https://jsonplaceholder.typicode.com/users";

const TEST = "test";

getData(url)
    .then(data => console.log(data))
    .catch(error => console.log(error.message()))

const data = getData(url);
console.log(data)






