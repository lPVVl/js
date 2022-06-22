'use strict';

                //filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) { // name каждый отдельный элемент в массиве
//     return name.length < 5;
// });

                  // map повзоляет взять исходный массив и изменить каждый элемент внутри его

// const answers = ['IvAn', "anNA", "Hello"];

// const result = answers.map(item => item.toLowerCase()); // перевод в нижний регистр


                // every/some 
//some - если хотябы 1 элемент подходит по условию в таком случае вернет true 
//every - если все элементы подходит по условию в таком случае вернет true 

// const some = [4, 'qwerty', 'qweasd'];

// // console.log(some.some(item => typeof(item) === 'number')); //true

// console.log(some.every(item => typeof(item) === 'number')); //false


                    // reduce

// const arr = [4, 5, 1, 3, 2, 6];
//                         // 0       4
//                         // 4       5
//                         // 9       1
//                         // 10      3
// const res = arr.reduce((sum, current) => sum + current);
// console.lor(res); //21

// const arr = ['apple', 'peae', 'plum'];
//                         // 0       4
//                         // 4       5
//                         // 9       1
//                         // 10      3
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res); //apple, peae, plum

// const arr = [4, 5, 1, 3, 2, 6];
//                         // 3       4
//                         // 4       5
//                         // 9       1
//                         // 10      3
// const res = arr.reduce((sum, current) => sum + current, 3); // добавляем начальное значение 3
// console.lor(res); //24

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)//получение массива из объекта
// .filter(item => item[1] === 'persone') //[ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]
// .map(item => item[0]);//[ 'ivan', 'ann' ]
// console.log(newArr);


const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);
    
}

function showListOfFilms(arr) {
    
}

function setFilmsIds(arr) {

}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    
}