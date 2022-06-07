// 'use strict';

// //функция вызывается 4 способами

// //1
// function showThis (a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// // если ф-ция вызывается то она ссылается на глобальный объект window
// // обычная ф-ция this = window, но если use sctrict - undefined

// //2

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj(sum);
// // контекст у методов объекта будет сам объект

// //3

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('ivan', 23);

// // this в конструкторах и классах это новый экземпляр объекта

// //4 

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
// const user = {
//     name: 'john'
// };

// sayName.call(user, 'smith'); //аргументы через запятую
// sayName.apply(user, ['smith']);// аргументы через массив

// //bind создает новую функцию и связывает с опред. контекстом

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2); // двойка переходит в this a num передается в ф-ция дабл
// console.log(double(3));
// console.log(double(13));

// // ручная привязка this: call apply bind.

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    this.style.backgroundColor = 'red';
});
// при обычном объявлении ф-ции имеем доступ к this
// при стрелочном контекст вызова теряется тогда пользоваться е таргет

btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
});


// у стрелочной ф-ции нету контекста вызова, она берет его у родителя

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };
        say()
    }
};
obj.sayNumber();
//берет контест вызова у родителя которым является метод saynumber,  а у метода
// контекст ссылается на объект (obj), соответственно this ссылает на объект\

const double = (a) => {
    return a * 2;
};
// если стрелочная ф-ция может вместитса на одну строку то делаем

const double = a => a * 2;
//ретурт подставляется автоматически
