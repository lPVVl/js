'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользовател ${this.name}ушел`)
}

ivan.hello(); //ivan hello

const ivan = new User('ivan', 28); // в этой функции будет объект а не ф-ция
const alex = new User('alex', 20);