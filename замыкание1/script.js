'use strict';

/* let number = 5; debugger

function logNumber() {
    let number = 4; debugger
    console.log(number);
}

number = 6;

logNumber(); debugger //каждый вызов ф-ции создает для себя их заново, лексическое значение */

function createCounter() { //создаем новуую переменную
    let counter = 0;
    
    const myFunction = function() {
        counter = counter + 1;
        return counter;
    };
    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

