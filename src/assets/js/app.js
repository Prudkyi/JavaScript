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


function openNavMob (element) {
    navMob.classList.add("navMob-active");
    navMob__wrap.classList.add("navMenu__active__wrap");
    navMob__wallpaper.classList.add("navMob__wallpaper__active");
    document.body.classList.add("navMenu__main__active");
    stateOpenMobMenu = true;
}

function closeNavMob (element) {
    navMob__wrap.classList.remove("navMenu__active__wrap");
    navMob__wallpaper.classList.remove("navMob__wallpaper__active");
    document.body.classList.remove("navMenu__main__active");
    setTimeout(function (){navMob.classList.remove("navMob-active")}, speedOpenMobNav);
    stateOpenMobMenu = false;
}

btnOpen.addEventListener("click", function (){
    if (!stateOpenMobMenu) openNavMob();
    else closeNavMob();
});

navMob__close.addEventListener("click", closeNavMob);
navMob__wallpaper.addEventListener("click", closeNavMob);























