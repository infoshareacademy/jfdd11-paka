'use strict!'
const box = document.querySelectorAll('.box');
const time = document.querySelector('.header__time');
const cats = Array.from(document.querySelectorAll('.cat'));


let randomTime = function(min, max){
    console.log(Math.random() * (max - min) + min);
}

const randomCat = function(cats){

let catIndex = parseInt(Math.random() * (cats.length));
 let cat = cats[catIndex];
    console.log(catIndex);
    cat.classList.remove('up');
    cat.classList.add('up');
};


const peep = function(cats){
    let frequency = randomTime(20, 2000);
    let cat = randomCat();
    cat.classList.add('up');
};