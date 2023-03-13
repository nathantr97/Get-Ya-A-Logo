class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor= textColor;
        this.shapeColor= shapeColor;
    }
}

// refer to this link for svg logo shape, size and color documentation and code
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    getHTML() {
        console.log("Generated in logo.svg");
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    getHTML() {
        console.log("Generated in logo.svg");
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.shapeColor}"/>
        <text x="105" y="125" font-size="60" text-anchor="middle"> fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    // https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_polygon

    getHTML() {
        console.log("Generated in logo.svg");
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points= 150, 20 244, 182 56, 182, 210" fill="${this.shapeColor}"/>
        <text x="140" y="135" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

module.exports = {Circle, Triangle, Square}

