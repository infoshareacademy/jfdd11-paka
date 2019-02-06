'use strict!'
const box = document.querySelectorAll('.box');
const time = document.querySelector('.header__time');


let distance = 10;
let x = setInterval(function () {
    distance = distance -1;
    if (distance < 10) {
        document.body.classList.add('timeRunningOut');

    } else {
        document.body.classList.remove('timeRunningOut');
    }
    time.innerHTML = distance ;
        if (distance < 0) {
            
           document.body.classList.add('gameOver');
        
            clearInterval(x);
            sesame();
            time.innerHTML = "Game over";

        }
}, 1000);

function addMoreTime() {
    distance += 2;
}
let randomTime = function (min, max) {
    return (Math.random() * (max - min) + min);
}



const catShake = function (event) {
    console.log('shake') 
    addMoreTime();
    event.target.children[1].textContent = "+2";
    setTimeout(function(){
        event.target.children[1].textContent = "";
    },500)
    event.target.children[0].classList.add('shake');
    event.target.children[0].classList.remove('up');
    event.target.removeEventListener('mouseup', catShake);
}

const randomCat = function () {
    const cats = Array.from(document.querySelectorAll('.cat'));

    let catIndex = parseInt(Math.random() * (cats.length));
    cats.forEach(element => element.classList.remove('up', 'shake'));

    let cat = cats[catIndex];
    console.log(cat);

    // console.log(catIndex);
    cat.classList.add('up');
    cat.parentElement.addEventListener('mouseup', catShake)


};

setInterval(randomCat, 1000);



/* Start game animation */
let leftdoor = document.querySelector(".leftdoor");
let rightdoor = document.querySelector(".rightdoor");
let playbutton = document.querySelector(".playbutton");
let underbutton = document.querySelector(".underbutton");
let header =  document.querySelector(".header");
let isOpen = false;
let start = document.querySelector(".wrapper")

function sesame() {
  if (isOpen === false) {
    leftdoor.style.left = -50 + "vw";
    rightdoor.style.left = 100 + "vw";
    playbutton.style.left = 93.8 + "vw";
    underbutton.style.left = -6.5 + "vw";
    isOpen = true;
    header.style.opacity = 2; }
  else {
    leftdoor.style.left = 0 + "vw";
    rightdoor.style.left = 50 + "vw";
    playbutton.style.left = 43.5 + "vw";
    underbutton.style.left = 43.5 + "vw";
    isOpen = false;
    header.style.opacity = 0;
  } }



playbutton.addEventListener("click", sesame);
underbutton.addEventListener("click", sesame);

setInterval(randomCat, randomTime(200, 1000));
