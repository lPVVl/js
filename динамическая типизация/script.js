'use strict';
// конкретинация
console.log(typeof(null + ''));
const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// to number
//1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(+'4'));

//3)
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('hello', '');

// to boolean
//1)
0, '',  null, undefined, NaN; // постоянно превращается в false

let switcher = null;

if (switcher) {
    console.log('working..'); // не выполнится
}
switcher = 1;
if (switcher) {
    console.log('working..') //выполнится
}

//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!'4444'));