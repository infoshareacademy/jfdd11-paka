'use strict!'
const box = document.querySelectorAll('.box');
const time = document.querySelector('.header__time');
const goodSound = document.getElementById('goodSound');
const badSound = document.getElementById('badSound');
const rules = document.querySelector('.rules');
const rulesButton = document.querySelector('.instructionsGameRules');
let startTime;
let endTime;
const leaderboardTAble = document.querySelector('.rankingWrapper');
const userName = document.querySelector('.userName');
const closeButton = document.querySelector('.close');
const scoreA = document.querySelector('.yourScore');
let myScore = 0;



const hideRules = function () {
    rules.classList.remove('rulesVisible');
    if (rules.classList.contains('rulesVisible') === false) {
        rulesButton.removeEventListener("click", hideRules);
        rulesButton.addEventListener("click", showRules);
    }
}

const showRules = function () {
    rules.classList.add('rulesVisible');

    if (rules.classList.contains('rulesVisible')) {
        rules.addEventListener("click", hideRules);
        rulesButton.addEventListener("click", hideRules);
    }
}

rulesButton.addEventListener("click", showRules);

function startGame() {
    let distance = 20;
    let level = 1;
    startTime = Date.now();
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
            endTime = Date.now();
            clearInterval(x);
            time.innerHTML = "Game over";
            leaderboardTAble.classList.add('rankingVisible');
            myScore = Math.round((endTime - startTime) / 1000);
            scoreA.innerHTML = 'The cat got away. You lasted ' + myScore +  ' seconds.'
            scoreA.style.color = 'white'
            closeButton.addEventListener("click", function () {
                closeSesame();
                leaderboardTAble.style.display = 'none';
            })

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
        if (event.target.children[0].classList.contains("badCat")) {
            addMoreTime(-20);
            event.target.children[1].textContent = "-20";
            badSound.play();
        } else {
            addMoreTime(2);
            event.target.children[1].textContent = "+2";
            goodSound.play();
        }

        setTimeout(function () {
            event.target.children[1].textContent = "";
        }, 500)
        event.target.children[0].classList.add('shake');
        event.target.children[0].classList.remove('up');
        event.target.removeEventListener('mouseup', catShake);
    }

    const randomCat = function () {

        const cats = Array.from(document.querySelectorAll('.cat'));



        let catIndex = parseInt(Math.random() * (cats.length));


        cats.forEach(element => element.classList.remove('up', 'shake', 'badCat'));

        let cat = cats[catIndex];

        let random_boolean = Math.random() >= 0.5;

        if (random_boolean === true) {
            cat.classList.add('badCat');

        }


        cat.classList.add('up');
        // cat.classList.add('badCat');
        cat.parentElement.addEventListener('mouseup', catShake)

    }

    setInterval(randomCat, randomTime(700, 2000));
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
        playbutton.style.left = 32.5 + "vw";
        isOpen = false;
        endTime = Date.now();
    }
}


playbutton.addEventListener("click", openSesame);

// LEADERBOARD

function leaderboard() {

    let players = [
        { name: "Ania", score: 201 },
        { name: "Zupa", score: 943 },
        { name: "Grzyb", score: 79 }
    ]

    let playersSorted = players.sort(function (a, b) {
        if (Number(a.score) < Number(b.score)) return -1;
        if (Number(a.score) > Number(b.score)) return 1;
        return 0;
    });

}

//userName.addEventListener('submit', event => { 
//    event.preventDefault();
//    const inputValue = event.target.name.value;
//    addNewScore(inputValue);
// })

//  function addNewScore(name) {
//    fetch('https://catchacat-32a97.firebaseio.com/catchacat-32a97.json', {
//      method: 'POST', 
//      body: JSON.stringify({ 
//        name: name,
//        score: myScore
//      }) 
//      } )
//      .then(() => window.location = 'index.html')
//  }
//  
//  function getUserScores(){
//    fetch('https://catchacat-32a97.firebaseio.com/catchacat-32a97.json', {
//
//    method: 'GET',
//    body: 
//    })
//  }
  