'use strict';

const user = {
    name: "alex",
    surname: "Smith",
    birthday: "20/04/1993",
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};
const userMap = new Map(Object.entries(user));
    console.log(userMap); // создаем из объекта массив

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj); // из массивоподобного объекта создает объект



const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

console.log(map);
// console.log(map.get(shops[2])); // получение результата
// console.log(map.has(shops[2]));  // если ли что-то в массиве
// map.delete(key);
// map.clear();
// map.size
// map.keys() // получаем массив объектов


// for (let shop of map.keys()) { // вывод ключей
//     console.log(shop)
// }

// const gooods = [];
// for (let shop of map.keys()) { // превращаем карту в массив с объектами
//     gooods.push(Object.keys(shop)[0]);
// }
// console.log(gooods); // получаем массив  с товарами которые есть у нас в магазине

// for (let price of map.values()) { // получаем бюджеты магащина
//     console.log(price)
// }

// for (let [shop, price] of map.entries()) { // получаем массив с двумя элементами
//     console.log(price, shop);
// }

// map.forEach((value, key, map) => { // получение ключ значение
//     console.log(key, value);
// });

