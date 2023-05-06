"use strict";
const calculate = (num1, num2, operation) => {
    return operation(num1, num2);
};
calculate(3, 3, (x, y) => x + y);
calculate(3, 3, (x, y) => x - y);
calculate(3, 3, (x, y) => x * y);
