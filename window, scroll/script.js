'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth; //400. 350 
// const height = box.offsetHeight;//400.350 получаем только видимую часть
const width = box.scrollWidth; //383
const height = box.scrollHeight; //1352 высота с учетом всей прокрутки

console.log(width, height);

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + "px";
});

const style = window.getComputedStyle(box);//получение всех свойств объекта
// можем получить стили псевдоэлементов

console.log(style);

console.log(document.documentElement.scrollTop
    );//получение сколько пикселей пролистали
