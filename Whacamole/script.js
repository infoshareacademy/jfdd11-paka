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
let sortedScores;
let myPosition;
const letsCheck = document.querySelector('.letsCheck');
const nameButton = document.querySelector('nameButton');
const userInput = document.querySelector('.userInput');
let yourPosition = document.createElement('p');


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
    yourPosition.innerHTML = ''
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
            userName.style.display = 'block';

            document.body.classList.add('gameOver');
            endTime = Date.now();
            time.innerHTML = "Game over";
            leaderboardTAble.classList.add('rankingVisible');
            myScore = Math.round((endTime - startTime) / 1000);
            scoreA.innerHTML = 'The cat got away... You lasted ' + myScore + ' seconds.';
            updateScores();
            scoreA.style.color = 'white'
            closeButton.addEventListener("click", function () {
                closeSesame();
                leaderboardTAble.classList.remove('rankingVisible');
            })
            clearInterval(x);

        }
        if (distance >= 40) {
            level += 1;
        }
    }, 1000);

    let randomTime = function (min, max) {
        return (Math.random() * (max - min) + min);
    }


    const catShake = function (event) {
        if (event.target.children[0].classList.contains("badCat")) {
            distance -= 20;
            event.target.children[1].textContent = "-20";
            badSound.play();
        } else {
            distance += 2;
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
        cat.parentElement.addEventListener('mouseup', catShake)

    }

    setInterval(randomCat, randomTime(500, 1500));
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
        time.innerHTML = "";
        document.body.classList.remove('timeRunningOut')
        leaderboardTAble.classList.remove('rankingVisible')
        
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

userName.addEventListener('submit', event => {
    event.preventDefault();
    const inputValue = event.target.name.value;
    addNewScore(inputValue);
    userName.classList.add('clicked');
    return inputValue;
})

function addNewScore(name) {
    fetch('https://catchacat-32a97.firebaseio.com/catchacat-32a97.json', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            score: myScore
        })
    })
        .then(() => updateScores())
}


function updateScores() {
    fetch('https://catchacat-32a97.firebaseio.com/catchacat-32a97.json')
        .then(res => res.json())
        .then(objects => {
            let sortedObjects = Object.entries(objects).map(object => ({ name: object[1].name, score: object[1].score })).sort((a, b) => b.score - a.score);
            let sortedPlayers = sortedObjects.map(objects => objects.name);
            sortedScores = sortedObjects.map(objects => objects.score);

            console.log(sortedPlayers);
            console.log(sortedScores);

            let firstScore = document.querySelector('.firstScore');
            firstScore.textContent = sortedScores[0];
            let firstPlayer = document.querySelector('.firstPlace');
            firstPlayer.textContent = sortedPlayers[0];

            let secondScore = document.querySelector('.secondScore');
            secondScore.textContent = sortedScores[1];
            let secondPlayer = document.querySelector('.secondPlace');
            secondPlayer.textContent = sortedPlayers[1];

            let thirdScore = document.querySelector('.thirdScore');
            thirdScore.textContent = sortedScores[2];
            let thirdPlayer = document.querySelector('.thirdPlace');
            thirdPlayer.textContent = sortedPlayers[2];

            myPosition = sortedScores.findIndex(score => score === myScore) + 1;

            if (userName.classList.contains('clicked') === true) {
                userName.style.display = 'none';
                yourPosition.style.display = 'block'
                yourPosition.style.fontSize = 40 + 'px'
                yourPosition.innerHTML =  'But thanks for playing! <br> Your position in the ranking: ' + myPosition + '<br><br>';
                userInput.appendChild(yourPosition)
                userName.classList.remove('clicked')
            }

            return myPosition;


        })
}