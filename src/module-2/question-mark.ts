
// ternary operator

const age : number = 50;

if(age <= 35){
    console.log("young");
}else{
    console.log("older");

}

const isYoung = age <=35 ? "yes":"no"

// nullis coalesance operator
// null and undefine  ai 2 tar ketre kaz korbe

const isAuthenticate = null;

const authenticUser = isAuthenticate ?? "Guest"

const authenticUser2= isAuthenticate ? isAuthenticate : "guest";

console.log({authenticUser},{authenticUser2});


type ManType = {
    name: string;
    age: number;
    addres: {
        city: string;
        village: string;
        home?: string;
    };
}

const man : ManType = {
    name:"man",
    age:10,
    addres:{
        city:"no city",
        village:"hhh",
     
    }
}

 const findHome = man?.addres?.home ?? "No home"
 console.log(findHome);


