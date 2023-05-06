"use strict";
const restPara = (...friends) => {
    console.log(friends.map(friend => friend));
};
console.log(restPara("mina", "rina", "tina", "bina"));
