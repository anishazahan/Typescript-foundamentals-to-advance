"use strict";
// key of gourd 
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else {
        return (num1.toString() + num2.toString());
    }
}
add("2", "3");
add(2, 2);
// in gourd
