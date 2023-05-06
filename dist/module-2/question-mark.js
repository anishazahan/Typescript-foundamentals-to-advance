"use strict";
// ternary operator
var _a, _b;
const age = 50;
if (age <= 35) {
    console.log("young");
}
else {
    console.log("older");
}
const isYoung = age <= 35 ? "yes" : "no";
// nullis coalesance operator
// null and undefine  ai 2 tar ketre kaz korbe
const isAuthenticate = null;
const authenticUser = isAuthenticate !== null && isAuthenticate !== void 0 ? isAuthenticate : "Guest";
const authenticUser2 = isAuthenticate ? isAuthenticate : "guest";
console.log({ authenticUser }, { authenticUser2 });
const man = {
    name: "man",
    age: 10,
    addres: {
        city: "no city",
        village: "hhh",
    }
};
const findHome = (_b = (_a = man === null || man === void 0 ? void 0 : man.addres) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "No home";
console.log(findHome);
