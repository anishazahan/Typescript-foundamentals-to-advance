
//1. key of gourd 

type Alphaneumeric = string| Number;

function addType (num1:Alphaneumeric,num2:Alphaneumeric):Alphaneumeric{

     if (typeof num1 === "number" && typeof num2 === "number"){
        return num1+num2
     }
     else{
        return (num1.toString() + num2.toString());
     }
}

console.log(addType("2","3"));
console.log(addType(2,2));


//2. in gourd

type NormalUserType ={
    name:string;
}

type AdminUserType ={
    name:string;
    roll:string
}

const normalUser:NormalUserType = {name:"x"}
const adminlUser:AdminUserType = {name:"x",roll:"admin"}

function getUser(user:NormalUserType | AdminUserType):string{
    if("roll" in user){   // in gourd
        return `I am admin my roll is ${user.roll}`
    }else{
        return `I am normal user`
    }
}

console.log(getUser(normalUser));
console.log(getUser(adminlUser));



// 3. instance of gourd

class Animals {
    name:string;
    species:string;

    constructor(name:string,species:string){
        this.name=name;
        this.species=species;
    }

    makeSound (){
        console.log(`i am making sound`);
    }
}

class Dog extends Animals {
    constructor(name:string,species:string){
        super(name,species);
    }

    makeBark(){
        console.log(`I am barking from ${this.name}`);
    }
}

class Cat extends Animals {
    constructor(name:string,species:string){
        super(name,species);
    }

    makeMaw(){
        console.log(`I am Meawing from ${this.name}`);
    }
}

const dogInstance = new Dog("bangla dog","dog");
const catInstance = new Dog("bangla cat","cat");

function isCat (animal:Animals):animal is Cat {
    return animal instanceof Cat
}
function isDog (animal:Animals):animal is Dog {
    return animal instanceof Dog
}

function getAnimal(animal:Animals){

     if(isDog(animal)){
         animal.makeBark();
     }else if (isCat(animal)){
         animal.makeMaw();
     }else{
         animal.makeSound();
     }
}

// console.log(getAnimal(catInstance) + "jhjhkjhk");
// console.log(getAnimal(dogInstance) + "jhjhkjhk");

getAnimal(catInstance);