"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num); // когда очередь доходить до этой ф-ци, то внутри себя не находит переменную, поэтому иидет выше а уровенб
    //ЗАМЫКАНИЕ ф-ции сама ф-ния со всеми внешними переменными которые ей доступны
}
showFirstMessage('hello world');
console.log(num);

function calc(a, b) {
    return (a + b);
}
// return позволяет вернуть значение ф-ции во внешний мир
// после return никакой код работать не может
console.log(calc(4, 3)); //5
console.log(calc(5, 7)); //13

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);  // 50 

// FUNTION explpration - создается только тогда, когда до ее доходит потом кода
// можно вызвать только после объявления переменной
const logger = function() {
    console.log('hello');
};

logger();

// стрелочные ф-ции
const calc = (a, b) => {
     return a + b 
  };


  
const usdCurr = 28;
const uerCurr = 32;

function convert (amount, curr) {
   console.log(curr * amount); 
}

function promotion(result) {
    console.log(result * discount);
}
convert(500, usdCurr);
convert(500, uerCurr);

//функция не зависящая от конкретных значений



// ИСПОЛЬЗОВАНИЕ RETURN
const usdCurr = 28;
const uerCurr = 32;
const discount = 0.9;

function convert (amount, curr) {
   return curr * amount; // возвращает результат работы и может передать его
}

function promotion(result) {
    console.log(result * discount);
}
promotion(convert(500, usdCurr));

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('done');
}
test();//0 1 2 3

function doNothing() {}
console.log(doNothing() === undefined); 
// console.log - это ф-ция, т.к это ф-ция она должна что-то возвращать, поэтому и возвращает undefined

function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Alex');

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}
returnNeighboringNumbers(5);



function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(3, 10));