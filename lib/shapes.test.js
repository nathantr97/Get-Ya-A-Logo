
// example test from uw bootcamp GitLab
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const {Circle, Triangle , Square} = require("./shapes");


// refer to 10-OOP>01 activity>2-day> 11-setup

describe('Circle', () => {
    it('should create a square with user color inputs and shape selection', () => {
        const circle = new Circle("black");
        expect(circle.text).toEqual(
            'black');
    });
});


describe('Triangle', () => {
    it('should create a square with user color inputs and shape selection', () => {
        const triangle = new Triangle("blue");
        expect(triangle.text).toEqual(
            'blue');
    });
});


describe('Square', () => {
    it('should create a square with user color inputs and shape selection', () => {
        const square = new Square("red");
        expect(square.text).toEqual(
            'red');
    });
});