'use strict!'
const box = document.querySelectorAll('.box');
const time = document.querySelector('.header__time');

function startGame() {
let distance = 20;
let level = 1;
let x = setInterval(function () {
    distance = distance - level;

    if (distance < 10) {
        document.body.classList.add('timeRunningOut');

    } else {
        document.body.classList.remove('timeRunningOut');
    }
    time.innerHTML = distance;
    if (distance < 0) {

        document.body.classList.add('gameOver');

        clearInterval(x);
        closeSesame();
        time.innerHTML = "Game over";
        

    }
    if (distance >= 65) {
        level += 1;
    }
}, 1000);

function addMoreTime(x) {
    distance += x;
}

let randomTime = function (min, max) {
    return (Math.random() * (max - min) + min);
}


const catShake = function (event) {
    if (event.target.children[0].classList.contains("badCat")){
        addMoreTime(-20);
        event.target.children[1].textContent = "-20";
    } else {
        addMoreTime(2);
    event.target.children[1].textContent = "+2";
    }
    
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
    
    
    cats.forEach(element => element.classList.remove('up', 'shake','badCat'));

    let cat = cats[catIndex];

    let random_boolean = Math.random() >= 0.5;

    if (random_boolean === true) {
        cat.classList.add('badCat');
        
    }
    
    cat.classList.add('up');
   // cat.classList.add('badCat');
    cat.parentElement.addEventListener('mouseup', catShake)

}

let showBadCat = function (event) {
   // event.target.classList.remove('cat');
    event.target.classList.add('badCat');
}

setInterval(randomCat, randomTime(1000, 3000));
}

/* Start game animation */
let leftdoor = document.querySelector(".leftdoor");
let rightdoor = document.querySelector(".rightdoor");
let playbutton = document.querySelector(".playbutton");
let header = document.querySelector(".header");
let isOpen = false;
let start = document.querySelector(".wrapper");


function openSesame() {
    if (isOpen === false) {
        startGame();
        document.body.classList.remove('gameOver');
        leftdoor.style.left = -50 + "vw";
        rightdoor.style.left = 100 + "vw";
        playbutton.style.left = 103.8 + "vw";
        isOpen = true;
    }
}


function closeSesame() {
    if (isOpen === true) {
        leftdoor.style.left = 0 + "vw";
        rightdoor.style.left = 50 + "vw";
        playbutton.style.left = 43.5 + "vw";
        isOpen = false;
    }
}




playbutton.addEventListener("click", openSesame);


