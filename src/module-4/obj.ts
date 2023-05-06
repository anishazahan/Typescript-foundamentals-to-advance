

class Animal {
//    public name:string;
//    public species:string;
//    public sound:string;

   // parameter properties=> type initialize aksata hocce public dewar karone
    constructor ( public name:string, public species:string,public sound:string,){
        // this.name=name;
        // this.sound=sound;
        // this.species = species;
    }

    //  arrow function a this property kaz kore na, variable opora ota but func opora zaina

    makeSound() {
        console.log(`the ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal ("bangla dog","dog","gaw gaw");
const cat = new Animal ("bangla Cat","cat","maw maw");
dog.makeSound();
cat.makeSound();