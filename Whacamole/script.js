'use strict!'
const box = document.querySelectorAll('.box');
const time = document.querySelector('.header__time');


function game() {
    let distance = 8;
    let x = setInterval(function () {
        distance = distance - 1;
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
        else if (distance > 0) {

            document.body.classList.remove('gameOver');
           
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
}



/* Start game animation */
let leftdoor = document.querySelector(".leftdoor");
let rightdoor = document.querySelector(".rightdoor");
let playbutton = document.querySelector(".playbutton");
let header = document.querySelector(".header");
let start = document.querySelector(".wrapper");
let isOpen = false;


function openSesame() {
    if (isOpen === false) {
        leftdoor.style.left = -50 + "vw";
        rightdoor.style.left = 100 + "vw";
        playbutton.style.left = 93.8 + "vw";
        isOpen = true;
        header.style.opacity = 2;
        game()
    }
}

function closeSesame() {
    if (isOpen === true) {
        leftdoor.style.left = 0 + "vw";
        rightdoor.style.left = 50 + "vw";
        playbutton.style.left = 43.5 + "vw";
        isOpen = false;
        header.style.opacity = 0;

    } 
}


playbutton.addEventListener("click", openSesame);
underbutton.addEventListener("click", openSesame);

setInterval(randomCat, randomTime(200, 1000));
