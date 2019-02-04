'use strict!'
const box = document.querySelectorAll('.box');
const time = document.querySelector('.header__time');
const cats = Array.from(document.querySelectorAll('.cat'));


let lastCat;

let randomTime = function(min, max){
    console.log(Math.random() * (max - min) + min);
}

const randomCat = function(cats){

let catIndex = Math.floor(Math.random()) * (5);
 let cat = cats[catIndex];
    console.log(cat);
    if (cat === lastCat) {
        return randomCat(cats);
    }
     lastCat = cat;
     return cat;
};


const peep = function(cats){
    let frequency = randomTime(200, 2000);
    let cat = randomCat();
    cat.classList.add('up');
};