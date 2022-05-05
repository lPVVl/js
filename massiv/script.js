"use strict";

const arr = [1, 2, 3, 6, 7];

arr.forEach(function(tem, s, arr) { // перебор массива
    console.log(`${s}: ${tem} vnytri massiva ${arr}`); // 0: 1 vnytri massiva 1, 2, 3, 6, 7
                                                        // 1: 2 vnytri massiva 1, 2, 3, 6, 7
});

arr.pop(); // удаляет последний элемент из массива
arr.push(11); // добавляет элемент в массив

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); //1 2 3 6 7
}

for (let value of arr) {
    console.log(value); //1 2 3 6 7
}

const str = prompt("", "");
const products = str.split(', ');
console.log(products); // формирование массива на основании строк

const str = prompt("", "");
const products = str.split(', ');
products.sort(); //сортировка в алфавитном порядке как строки
console.log(products.join('; ')); // формирование массива в строку 

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr); // 10 13 2 26 8
function compareNum(a, b) { // 2 8 10 13 26
    return a - b;
}