"use strict";
exports.__esModule = true;
exports.addNumber = void 0;
function addNumber(num) {
    return num;
}
exports.addNumber = addNumber;
function addUser(user) {
    console.log(user.length);
    return user;
}
addNumber("admin");
addNumber(120);
addUser(["test", {
        name: 'admin'
    }]);
