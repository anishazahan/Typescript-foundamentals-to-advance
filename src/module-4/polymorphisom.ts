
/*
poly => onk gula
morphism => rup

polymorphism = bohurupi

*/


class Parent {
    sleepTime():void{
        console.log("I am slepping 8 hours per day");
    }
}

class Students extends Parent {
    sleepTime():void{
        console.log("I am student, slepping 10 hours per day");
    }
}

class Developer extends Parent {
    sleepTime():void{
        console.log("I am developer, slepping 5 hours per day");
    }
}


function getSleep(param: Parent) {
    param.sleepTime();
  }

const person1 = new Parent();
const person2 = new Students();
const person3 = new Developer();

console.log(getSleep(person1));
console.log(getSleep(person2));
console.log(getSleep(person3));



class Shape {
    getArea(): number {
      return 0;
    }
  }
  
  // area -> pi *r *r
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  function getAreaOfShape(param: Shape) {
    console.log(param.getArea());
  }
  
  getAreaOfShape(new Circle(10));
  getAreaOfShape(new Rectangle(10, 12));