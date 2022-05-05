"use strict";
// объекты это структуры которые могут сохранять в себе абсолютно любые типы данных
// в формате ключ name значение test
// могут быть так же вложенными: объект в объект, массив в массив
// для перебора исп. for in

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('test');
    }
};

options.makeTest();


// деструктуризация
const {border, bg} = options.colors;
console.log(border); // test black

//console.log(Object.keys(options).length); // счетчик объектов!!!!!

//console.log(options.name);

//delete options.name; // удаление объекта
//console.log(options);


let counter = 0; //счетчик

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i}, имеет значение ${options[key][i]} `);

        }
    } else {
        console.log(`Свойство ${key}, имеет значение ${options[key]} `);
        counter++;
    }
}
console.log(counter); // счетчик объектов

