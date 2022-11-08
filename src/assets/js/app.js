import Form from "./modules/people.js";
import FetchAjax from "./modules/ajax.js";

new Form("contactForm", "nameUser", "emailUser", "phoneUser");

const ajaxForm = new FetchAjax("https://jsonplaceholder.typicode.com/users");

console.log(ajaxForm.getData())


