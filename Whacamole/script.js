'use strict!'
const box = document.querySelectorAll('.box');
const time = document.querySelector('.header__time');


let distance = 12;
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
let randomTime = function (min, max) {
    console.log(Math.random() * (max - min) + min);
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
