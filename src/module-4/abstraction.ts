
// interface 

// interface Ivehicle {
//     name:string;
//     modal:number
// }

// const vehicleCar : Ivehicle = {
//     name:"car",
//     modal:200
// }

interface Ivehicle {
    startEngine():void;
    stopEngine():void;
    move():void;
}

//  Ivehicle er moto sob method aiter vitora likta hoba

class Vehicle implements Ivehicle {

    constructor(
      public name:string,
       public modal:number
    ){ }


    startEngine():void{
        console.log(`starting engine`);
    }
    stopEngine():void{
        console.log(`stop engine`);
    }
    move():void{
        console.log(`moving car`); 
    }

    // extra method use kora zete pare
   test():void{
    console.log(`i am for testing purpose`);
   }
}

const vehicle1 = new Vehicle("hero Hunda",2000)

console.log(vehicle1.move());




// abstract

abstract class Vehicle2 {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  abstract startEngine(): void 
  abstract stopEngine(): void 
  move(): void {
    console.log(" I am syopping engine");
  }
 
}

class Car extends Vehicle2{
  startEngine(): void   {
    console.log(" I am starting engine... ");
  }
  stopEngine(): void {
    console.log(" I am stopping engine... ");
  }
  
}

const car1= new Car('Car','Honda',2015)

