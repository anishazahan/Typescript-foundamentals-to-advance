"use strict";
let anyData;
anyData = "hellow";
// anyData as string
anyData;
console.log(anyData.length);
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `the converted value is ${value} gram`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}
// const result = kgToGram("4") as string;
const result = kgToGram("7");
// const result2 = kgToGram(6) as number;
const result2 = kgToGram(6);
console.log({ result }, { result2 });
try {
}
catch (error) {
}
