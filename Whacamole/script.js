const boxes = document.querySelectorAll('.box');
const cats = document.querySelectorAll('.cat');
const time = document.querySelector('.header__time');


let distance = 15;
let x = setInterval(function () {
    distance = distance -1;
    if (distance < 10) {
        document.body.classList.add('timeRunningOut');

    } else {
        document.body.classList.remove('timeRunningOut');
    }
    time.innerHTML = distance ;
        if (distance < 0) {
            
        
            clearInterval(x);
            time.innerHTML = "Game over";

        }
}, 1000);

function addMoreTime() {
    distance += 5;
}
