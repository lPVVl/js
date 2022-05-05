"use strict";

let a = 5;
    b = a;
b = b + 5;
console.log(b); //10

const obj = {
    a: 5,
    b: 1
};

/* const copy = obj; // передает ссылку 
copy.a = 10; // изменяется оригинальный объект
console.log(copy); // a:10 b:1
console.log(obj);// a:10 b:1 */

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj [key];
    }
    return objCopy;
}
const  numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10; // заменяет переменную а в копии
newNumbers.c.x = 10; // меняется и в копии и в оригинале

console.log(newNumbers);
cosole.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign({}, add)); // доавляет значения в numbers

const clone = Object.assign({}, add); 

clone.d = 20;

console.log (add); // d:17 e:20
console.log (clone); //d:20 e20 // поверхностная копия предд объекта

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asd'
console.log(newArray); //[ 'a', 'asd', 'c' ]
console.log(oldArray); // [ 'a', 'b', 'c' ]

const video = ['youtybe', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet); // 

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};