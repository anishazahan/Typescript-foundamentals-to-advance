

class Common {

    name:string;
    age:number;
    address:string;

    constructor(name:string, age:number, address:string){
        this.name = name;
        this.age= age;
        this.address =address;
    }

    makeSleep(hourse:number):string{
        return `this ${this.name} sleeping ${hourse}`
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

    constructor(name:string, age:number, address:string){
       super(name,age,address)
    }
}

const resultStudent = new Student("anisha",67,"dhaka")
resultStudent.makeSleep(10);


class Teacher extends Common {
    // name:string;
    // age:number;
    // address:string;
    designation:string;  // different

    constructor(name: string, age: number, address: string, designation: string){
       super(name,age,address);
        this.designation=designation;
    }
    // makeSleep(hourse:number):string{
    //     return `this ${this.name} sleeping ${hourse}`
    // }

    // different
    takeClass(numOfClass:number):string{
        return `this ${this.name} take ${numOfClass} class`
    }
}