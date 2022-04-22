"use strict";

if (4) {
    console.log('nice!');
} else {
    console.log('error');
}

const num = 50;

if (num < 49) {
    console.log('err');
} else if (num > 100) {
    console.log('many');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('eror');

const num = '50';

switch (num) {
    case '49':
        console.log('no');
        break;
    case '100': 
        console.log('no');
        break;
    case '50':
        console.log('yes');
        break;
    default:
        console.log('davai potom');
        break;
}