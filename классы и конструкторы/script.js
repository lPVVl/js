'use strict';
// классы служат для создания новых объектов
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, bgColor) {
        super(height, width);// перенос строк у родителя. должна быть на первом месте
        this.text = text;
        this.bgColor = bgColor;
    }  

    showMyProps() {
        console.log(`текст : ${this.text}, цвет : ${this.bgColor}`);
    }
}

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);
// console.log(square.calcArea());
// console.log(long.calcArea());

const div = new ColoredRectangleWithText(25, 10, 'hello', 'blue')
