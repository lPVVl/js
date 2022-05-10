'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
} */

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

//основыне методы для работы с страницей.

const div = document.createElement('div'); //создание элементов CreateElement
/* const text = document.createTextNode('Тут бы он');// текст которых хотим поместить в ноду */ // мало использ
 
//cтилизация элемента.

div.classList.add('black');
document.body.append(div); //append - добавляет элемент на страницу ПОСЛЕ указанного dom-узла


document.querySelector('.wrapper').append(div) //добавление в обертку блока див

wrapper.prepend(div); // .prepend - добавляет элемент на страницу ПЕРЕД указанным dom-узлом.

//hearts[0].before(div);  добавление элемента перед 
// wrapper.insertBefore(div, hearts[0]); 1 блок который вставляем 2 блок перед которым вставляем

//hearts[0].after(div); добавляет после

//circles[0].remove(); удаляет элемент
// wrapper.removeChild(hearts[1]);  

//hearts[0].replaceWith(circles[0]); замена одного элемента другим 
//wrapper.replaceChild(circles[0], hearts[0])// 1 на которых хотим поменять 2 на который меняем


//редактирование созданного дива div.innerHTML = '<h1>hello world</h1>';  можно создавать хтмл структуры
div.textContent = "hello"; //работает только с текстом

//комбинация
div.insertAdjacentHTML('beforebegin', '<h2>hello</h2>'); 
//beforebegin вставка кода перед элементом
//afterbegin вставка в начало кода
// beforeend перед концом
// afterend после элемента


// еще получение элемента