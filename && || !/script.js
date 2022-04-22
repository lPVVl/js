"use strict";

const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola && fries); //выводит первое ложно значение, в данном случае кола 0

if (hamburger === 3 && cola === 1 && fries) {
    console.log('vse sity!');
} else {
    console.log('we go away');
}

// операто  или || запинается на первом правдивом значение, если все не правда, возвращается последнее ложное значение
const hamburger = 3;
const fries = 3;
const nuggets = 2;
const cola = 0;

if (hamburger === 3 && cola ===2 || fries === 3 && nuggets) {
    console.log('vse radi');
} else {
    console.log('we go away');
}

console.log(hamburger || cola || fries);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);


console.log( NaN || 2 || undefined ); //2
console.log( NaN && 2 && undefined ); //nan
console.log( 1 && 2 && 3 ); //3
console.log( !1 && 2 || !3 ); //false
console.log( 25 || null && !3 ); //25
console.log( NaN || null || !3 || undefined || 5); //5
console.log( NaN || null && !3 && undefined || 5); //5
console.log( 5 === 5 && 3 > 1 || 5); // true


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!');
} // условие выполняется

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!');
} // условие выполнится

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
} // условие не выполнится