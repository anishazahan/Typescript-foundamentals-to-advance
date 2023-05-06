"use strict";
// null
const searchName = (value) => {
    if (value === "string") {
        console.log("searching");
    }
    else if (value === null) {
        console.log("coming null value");
    }
};
searchName(null);
// unKnown
const carSpeed = (speed) => {
    if (typeof speed === "number") {
        const km_converted = (speed * 100) / 3600;
        console.log(`my speed is ${km_converted}`);
    }
    if (typeof speed === "string") {
        const [value, unit] = speed.split(" "); // (10,10 km^-1)
        const km_converted = (parseFloat(value) * 100) / 3600;
        console.log(`my speed is ${km_converted}`);
    }
    else {
        console.log("wrong data type");
    }
};
carSpeed(10);
carSpeed("10km^-1");
carSpeed(null);
// never   = kokono kisui return korba na
const throwError = (message) => {
    throw new Error(message);
};
throwError("error hoyece");
