
// example test from uw bootcamp GitLab
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const {Circle, Triangle , Square} = require("./lib/shapes");


// refer to 10-OOP>01 activity>2-day> 11-setup

describe('Circle', () => {
    it('should create a square with user color inputs and shape selection', () => {
        const circle = new Circle();
        circle.setColor("green");
        expect(circle.render()).toEqual(
            '<circle cx="150" cy="100" r="80" fill="green" />');
    });
});


describe('Triangle', () => {
    it('should create a square with user color inputs and shape selection', () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        expect(triangle.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});


describe('Square', () => {
    it('should create a square with user color inputs and shape selection', () => {
        const square = new Square();
        square.setColor("blue");
        expect(square.render()).toEqual(
            '<rect width="200" height="200" fill="red" />');
    });
});