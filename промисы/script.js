// 'use strict';

// console.log('запрос данных...');

// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Подготовка...');
    
//         const product = {
//             name: "Tv",
//             price: 2000
//         };
    
//        resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// });

// req.then ((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then ((data) => {
//     console.log(data);
// }).catch(() =>{
//     console.error('O oy');
// }).finally(() => {
//     console.log('finally');
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000ms'));
// test(2000).then(() => console.log('2000ms'));

Promise.all([test(1000), test(2000)]).then(() =>{
    console.log('all');
});
// ждет выполнение всех промисов и потом что-то выовдит

Promise.race([test(1000), test(2000)]).then(() =>{
    console.log('all');
});
// выполняет дейтсвие когда первый промис отработал