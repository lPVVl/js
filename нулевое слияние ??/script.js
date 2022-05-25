'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200} px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200); //если существует высота то умножаем на существующиу ширину, если нет берем 200

}

changeParams(box, newHeight, newWidth);

let userName;
let userKey;
console.log(userName ?? userKey ?? "user");

// оператор нулевого слияния реагирует не на все фалс а только на нулл или андефаинд