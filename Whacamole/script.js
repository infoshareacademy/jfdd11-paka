'use strict!'
const box = document.querySelectorAll('.box');
const time = document.querySelector('.header__time');


let randomTime = function (min, max) {
    return (Math.random() * (max - min) + min);
}

const catShake = function (event) {
    console.log('shake')
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

setInterval(randomCat, randomTime(500, 1000));