"use strict";
class Common {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hourse) {
        return `this ${this.name} sleeping ${hourse}`;
    }
}
class Student extends Common {
    // name:string;
    // age:number;
    // address:string;
    // constructor(name:string, age:number, address:string){
    //     this.name = name;
    //     this.age= age;
    //     this.address =address;
    // }
    // makeSleep(hourse:number):string{
    //     return `this ${this.name} sleeping ${hourse}`
    // }
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const resultStudent = new Student("anisha", 67, "dhaka");
resultStudent.makeSleep(10);
class Teacher extends Common {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    // makeSleep(hourse:number):string{
    //     return `this ${this.name} sleeping ${hourse}`
    // }
    // different
    takeClass(numOfClass) {
        return `this ${this.name} take ${numOfClass} class`;
    }
}
