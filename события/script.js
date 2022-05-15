//дом дерево

const btns = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

/* btn.onclick = function() {
    alert('fff');
};  //так себе код, можно забыть и использовать повторно, соответсвенно теряется функционал */


// всплытие событий это когда обработчик событий срабатывает сразу на самом вложенном, а затем на родителе
let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    /* i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);

    } */
};

//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once:true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});