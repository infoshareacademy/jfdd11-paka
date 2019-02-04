const boxes = document.querySelectorAll('.box');
const cats = document.querySelectorAll('.cat');
const time = document.querySelector('.header__time');


let distance = 60;
let x = setInterval(function () {
    distance = distance -1;
    if (distance < 10) 
    document.getElementById("header__time").innerHTML = distance ;
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("header__time").innerHTML = "Game over";

        }
}, 1000);

function addMoreTime() {
    distance += 5;
}

