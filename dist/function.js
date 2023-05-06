"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
const addArr = (num1, num2) => {
    return num1 + num2;
};
addArr(3, 3);
// call back
const square = [2, 3, 4];
square.map((elem) => elem * elem);
const person = {
    balance: 5,
    getBalance(money) {
        return this.balance + money;
    }
};
