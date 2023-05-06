"use strict";
// default parameter always last a use korta hoba
function addDefault(num1, num2 = 10) {
    return num1 + num2;
}
addDefault(2, 2);
