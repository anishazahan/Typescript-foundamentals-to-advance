

type personType = {
    name:string;
    age:number;
    roll:number
}

type keyOfType = "name" | "age" |"roll";  //  same kaz korba
type newKeyOfType = keyof keyOfType;

// const person5:keyOfType ="name";

// const person6:newKeyOfType ="kk"


function getProperty<x,y extends keyof x>(obj:x,key:y){
    obj[key]
}


const propertyObj = getProperty({name:"anisha",age:78},"age")