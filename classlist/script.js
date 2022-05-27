const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length); // у данной первой кнопки есть 2 класса
// console.log(btns[0].classList.item(0));// получаем первый класс
// console.log(btns[1].classList.add('red')); // добавляет класс и окрашивает в цвет
// console.log(btns[0].classList.remove('blue'));// удаляет класс
// console.log(btns[0].classList.toggle('blue'));//если класс на элементе есть то он будет удален, если нету то добавлен

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red'); // тоже самое что и выше только через тогл
});

                            //ДЕЛИГИРОВАНИЕ СОБЫТИЙ\\\

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')) {
        console.log('hello');
    }
});

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('hello');
//     });
// }); // так себе

const btn = document.createElement('button'); // создает кнопу
btn.classList.add('red'); // добавляет класс для кнопки
wrapper.append(btn); // помещает кнопку в обертку