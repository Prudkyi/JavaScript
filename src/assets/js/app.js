import * as prdkFunctions from "./modules/functions.js";

/* Start */
prdkFunctions.isWebP();

/* go Work */

/* mob Menu */
let stateOpenMobMenu = false;

const btnOpen = document.querySelector(".header__mobicon i"),
    navMob__wrap = document.querySelector(".navMob__wrap"),
    navMob__wallpaper = document.querySelector(".navMob__wallpaper"),
    navMob = document.querySelector(".navMob"),
    navMob__close = document.querySelector(".navMob__close"),
    mainContent = document.getElementById("main"),
    speedOpenMobNav = 400;


function openNavMob(element) {
    navMob.classList.add("navMob-active");
    navMob__wrap.classList.add("navMenu__active__wrap");
    navMob__wallpaper.classList.add("navMob__wallpaper__active");
    document.body.classList.add("navMenu__main__active");
    stateOpenMobMenu = true;
}
function closeNavMob(element) {
    navMob__wrap.classList.remove("navMenu__active__wrap");
    navMob__wallpaper.classList.remove("navMob__wallpaper__active");
    document.body.classList.remove("navMenu__main__active");
    setTimeout(function () {
        navMob.classList.remove("navMob-active");
    }, speedOpenMobNav);
    stateOpenMobMenu = false;
}

btnOpen.addEventListener("click", function () {
    if (!stateOpenMobMenu) openNavMob();
    else closeNavMob();
});
navMob__close.addEventListener("click", closeNavMob);
navMob__wallpaper.addEventListener("click", closeNavMob);

/************* Block Search  *****************/
const inputSearch = document.querySelector(".header__search__input"),
    searchBlock = document.querySelector(".header__search"),
    btnSearch = document.querySelector(".btn-search"),
    header__search__wrap = document.querySelector(".header__search__wrap");

function formSearch_placeholder_focus() {
    document.querySelector(".header__search__placeholder").classList.add("header__search__placeholder-active");
}
function formSearch_placeholder_not_focus() {
    if (inputSearch.value.length < 1) document.querySelector(".header__search__placeholder").classList.remove("header__search__placeholder-active");
}
function formSearch_btn() {
    searchBlock.classList.toggle("header__search-active");
    header__search__wrap.classList.toggle("header__search__wrap-active");
    btnSearch.classList.toggle("btn-search-active");
}

inputSearch.addEventListener("focus", formSearch_placeholder_focus);
inputSearch.addEventListener("blur", formSearch_placeholder_not_focus);
btnSearch.addEventListener("click", formSearch_btn);
document.addEventListener('click', (e) => {
    const searchBlockElement = e.composedPath().includes(searchBlock);
    if (!searchBlockElement && e.target.classList[1] !== "btn-search") {
        if (!btnSearch.classList.contains("btn-search-active")) return;
        formSearch_btn();
    }
});
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) formSearch_btn();
});


/* lesson */

const myObj = {
    name: "Serhii",
    age: 35,
    position: "Web Developer"
}

myObj.age = 34;

const { name, age } = myObj;

const myArray = [1, 2, 3];
const [one, twu] = myArray;

const myFn = ({name, age}) => {
    if (age) {
        return `${name} have ${age} year`;
    }
    return  `I don't know how old ${name} is`;
}

const newArray = myArray.map(element => {
    return element * 3;
})

const a = 5;
const b = 10;

function OK () {
    console.log("ok")
}
function  NOT () {
    console.log("not")
}

const test = (a < b && a === 5)
? OK()
    : NOT();

console.log(test)