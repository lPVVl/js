// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10);

//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// rekursivni vizov

// let id = setTimeout(function log(){
//     console.log('hello');
//     id = setTimeout(log, 500);
// });

                // ДАТЫ


// const now = new Date ('2022-05-31');// выводится только дата

// console.log(now);

// const now = new Date(0);
// console.log(now);
// все даты создаются в милисикундах

// получение компонентов даоы
// const now = new Date();
// console.log(now.getFullYear()); //2022 год
// console.log(now.getMonth); //5 месяц
// console.log(now.getDate());// 31 день
// console.log(now.getDay());//получение дня недели, нач с ВС(0 )
// console.log(now.getUTCHours());// получение часа ютс
// console.log(now.getTimezoneOffset()); // разница между часовым и ютс
// console.log(now.getTime());// число в милисек

// сетеры
// const now = new Date();
// console.log(now.setHours(18));
// console.log(now);

// const now = new Date('2022-05-31');
//  new Date.parse('2022-05-01'); // выдает точно так же как и выше, только другой метод

let start = new Date();

for (let i = 0; i < 1000000; i++) {
    let some = i **  3;
}

let end = new Date();

alert(`цикл отработал за ${end - start} миллисекунд`)