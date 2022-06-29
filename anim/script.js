'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

let phoneAnimation;
btnPhone.addEventListener('click', () => {
        if(!phoneAnimation) { // если не играет 
            phoneAnimation = images[0].animate([ // установка что будет происходить в аним
            {transform: 'translateY(0) rotate(0deg)',
            filter: 'opacity(100%)'
            },
            {transform: 'translateY(100px) rotate(180deg)',
            filter: 'opacity(50%)'
            },
            {transform: 'translateY(-100px) rotate(270deg)',
            filter: 'opacity(75%)'
            },
            {transform: 'translateY(0) rotate(360deg)',
            filter: 'opacity(100%)'}
        ], { // скорость и кол-во повторений
            duration: 3000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState === 'paused') { // если анимации на паузе играем
        phoneAnimation.play();
    } else {
        phoneAnimation.pause(); // если играет ставим на паузу
    }
});