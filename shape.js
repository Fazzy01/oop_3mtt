
class Shape {
    area() {
     console.log("Calculating area");
     }

}

class Circle extends Shape {
     constructor(radius) {
     super();
     this.radius = radius;
     }

    area() {
    console.log(`Circle area: ${Math.PI * this.radius ** 2}`);
     }

    }

class Rectangle extends Shape {
    constructor(width, height) {
    super();
    this.width = width;
    this.height = height;

    }

    area() {
     console.log(`Rectangle area: ${this.width * this.height}`);
    }


}

    const shapes = new Circle(5)
    console.log(shapes.area());