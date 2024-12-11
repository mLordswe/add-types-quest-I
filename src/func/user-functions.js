"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostHobbies = exports.oldestPerson = exports.oldestUser = exports.averageNumberOfHobbies = exports.averageAge = void 0;
var averageAge = function (allUsers) {
    var allAges = 0;
    allUsers.forEach(function (u) {
        allAges += u.age;
    });
    return allAges / allUsers.length;
};
exports.averageAge = averageAge;
var averageNumberOfHobbies = function (allUsers) {
    var AllHobbies = 0;
    allUsers.forEach(function (u) {
        AllHobbies += u.hobby.length;
    });
    return AllHobbies / allUsers.length;
};
exports.averageNumberOfHobbies = averageNumberOfHobbies;
var oldestUser = function (allUsers) {
    var oldest;
    var ages = [];
    allUsers.forEach(function (u) {
        ages.push(u.age);
    });
    oldest = ages.sort(Math.max).reverse().pop();
    return oldest;
};
exports.oldestUser = oldestUser;
var oldestPerson = function (allUsers) {
    var oldest;
    var ages = [];
    allUsers.forEach(function (u) {
        ages.push(u);
    });
    oldest = ages.sort().reverse().pop();
    return console.log("den \u00E4ldsta anv\u00E4ndaren heter ".concat(oldest === null || oldest === void 0 ? void 0 : oldest.name, " och \u00E4r ").concat(oldest === null || oldest === void 0 ? void 0 : oldest.age, " \u00E5r gammal"));
};
exports.oldestPerson = oldestPerson;
//*************TODO få denna att fungera***************
//*****************************************************
var mostHobbies = function (allUsers) {
    var hobbies;
    var hobbyamount = [];
    allUsers.forEach(function (u) {
        hobbyamount.push(u.hobby.length);
    });
    hobbies = hobbyamount.sort(function (a, b) { return b - a; }).splice(1, hobbyamount.length);
    return console.log(hobbyamount);
};
exports.mostHobbies = mostHobbies;
