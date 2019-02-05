const boxes = document.querySelectorAll('.box');
const cats = document.querySelectorAll('.cat');
const time = document.querySelector('.header__time');


/* playbutton */

let leftdoor = document.querySelector(".leftdoor");
let rightdoor = document.querySelector(".rightdoor");
let playbutton = document.querySelector(".playbutton");
let underbutton = document.querySelector(".underbutton");
let header =  document.querySelector(".header");
let isOpen = false;



function sezamie() {
  if (isOpen === false) {
    leftdoor.style.left = -50 + "vw";
    rightdoor.style.left = 100 + "vw";
    playbutton.style.left = 93.8 + "vw";
    underbutton.style.left = -6.5 + "vw";
    isOpen = true;
    header.style.opacity = 2;
  } else {
    leftdoor.style.left = 0 + "vw";
    rightdoor.style.left = 50 + "vw";
    playbutton.style.left = 43.5 + "vw";
    underbutton.style.left = 43.5 + "vw";
    isOpen = false;
    header.style.opacity = 0;
  }
}


playbutton.addEventListener("click", sezamie);
underbutton.addEventListener("click", sezamie);
