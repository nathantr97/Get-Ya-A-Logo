const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle , Square} = require("./lib/shapes");

inquirer
.prompt([
    {
        type: "input",
        message: "What text would you like to put in your logo?",
        name: "text",
    },
    {
        type: "input",
        message: "What color would you like your text to be?",
        name: "textColor",
    },
    {
        type: "list",
        message: "Please select the shape you would like your logo to be",
        name: "shape",
        choices: ['triangle', 'circle', 'square'],
        
        
    },
    {
        type: "input",
        message: "What color would you like your logo background to be? (color keyword or hexadecimal number)",
        name: "shapeColor",
    },
])

.then((data) => {
    const {text, textColor, shape, shapeColor}= data;

    var newLogo;

    switch (shape) {
        case "triangle":
            newLogo = new Triangle(text, textColor, shapeColor);
            break;
        case "square":
            newLogo = new Square(text, textColor, shapeColor);
            break;
        case "circle":
            newLogo = new Circle(text, textColor, shapeColor);
            break;
    }

fs.writeFileSync("./examples/logo.svg", newLogo.getSVGlogo())
});
