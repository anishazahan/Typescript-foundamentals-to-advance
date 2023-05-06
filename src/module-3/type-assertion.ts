
let anyData: any;

anyData = "hellow";

// anyData as string

<string>anyData;

console.log((anyData as string).length);


function kgToGram (param : string | number):string | Number |undefined {
    if(typeof param === "string" ){
        const value = parseFloat(param) * 1000
        return `the converted value is ${value} gram`
    }
    if(typeof param === "number"){
        const value =param * 1000
        return value

    }
}


// const result = kgToGram("4") as string;
const result =<string> kgToGram("7");
// const result2 = kgToGram(6) as number;
const result2 =<Number> kgToGram(6);
console.log({result},{result2});


//  custom error

 type CustomErrorType = {
    message : string;
 }
try {
    
} catch (error) {
    
}





