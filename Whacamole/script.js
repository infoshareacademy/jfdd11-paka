'use strict!'
const box = document.querySelectorAll('.box');
const time = document.querySelector('.header__time');

// let startTime = Date.now();
// localStorage.startTime = startTime
// let endTime = Date.now();
// localStorage.endTime = endTime;
// let yourScore = startTime - endTime;
// console.log(yourScore);


function game() {
    let distance = 10;
    let level = 1;
    let x = setInterval(function () {
        distance = distance - level;

        if (distance < 10) {
            document.body.classList.add('timeRunningOut');

        } else {
            document.body.classList.remove('timeRunningOut');
        }
        time.innerHTML = distance;
        if (distance <= 0) {

            document.body.classList.add('gameOver');

            clearInterval(x);
            sesame();
            time.innerHTML = "Game over";
        }
        if (distance >= 65) {
            level += 1;
        }
    }, 1000);

    function addMoreTime() {
        distance += 2;
    }

    let randomTime = function (min, max) {
        return (Math.random() * (max - min) + min);
    }

    const catShake = function (event) {
        addMoreTime();
        event.target.children[0].classList.add('shake');
        event.target.children[0].classList.remove('up');
        event.target.removeEventListener('mouseup', catShake);
    }

    const randomCat = function () {

        const cats = Array.from(document.querySelectorAll('.cat'));


function addMoreTime(x) {
    distance += x;
}

        let catIndex = parseInt(Math.random() * (cats.length));


        cats.forEach(element => element.classList.remove('up', 'shake', 'badCat'));

        let cat = cats[catIndex];
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

        let randomBoolean = Math.random() >= 0.5;

        if (randomBoolean === true) {
            cat.classList.add('badCat');
        }

        cat.classList.add('up');


        cat.parentElement.addEventListener('mouseup', catShake)
    }

    let showBadCat = function (event) {
        event.target.classList.add('badCat');
    }


setInterval(randomCat, randomTime(1000, 3000));
}


/* Start game animation */
let leftdoor = document.querySelector(".leftdoor");
let rightdoor = document.querySelector(".rightdoor");
let playbutton = document.querySelector(".playbutton");
let underbutton = document.querySelector(".underbutton");
let header = document.querySelector(".header");
let isOpen = false;
let start = document.querySelector(".wrapper");


function sesame() {
    if (isOpen === false) {
        leftdoor.style.left = -50 + "vw";
        rightdoor.style.left = 100 + "vw";
        playbutton.style.left = 93.8 + "vw";
        underbutton.style.left = -6.5 + "vw";
        isOpen = true;
        header.style.opacity = 2;
        game();
    }
    else {
        leftdoor.style.left = 0 + "vw";
        rightdoor.style.left = 50 + "vw";
        playbutton.style.left = 43.5 + "vw";
        underbutton.style.left = 43.5 + "vw";
        isOpen = false;
        header.style.opacity = 0;
        
    }
}


playbutton.addEventListener("click", sesame);
underbutton.addEventListener("click", sesame);

setInterval(randomCat, randomTime(500, 1000));
