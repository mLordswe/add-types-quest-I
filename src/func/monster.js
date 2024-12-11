"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNoWingedMonster = exports.numberOfMonstersWithWings = exports.averageNumberOfTentacles = exports.averageMonsterAge = exports.prettyPrintMonster = void 0;
var prettyPrintMonster = function (m) {
    m.forEach(function (monsters) {
        console.log("Monster: ".concat(monsters.name));
    });
};
exports.prettyPrintMonster = prettyPrintMonster;
var averageMonsterAge = function (m) {
    var allAges = 0;
    m.forEach(function (ages) {
        allAges += ages.age;
    });
    return Math.ceil(allAges / m.length);
};
exports.averageMonsterAge = averageMonsterAge;
var averageNumberOfTentacles = function (m) {
    var allTentacles = 0;
    m.forEach(function (tentacles) {
        allTentacles += tentacles.tentacles;
    });
    return Math.ceil(allTentacles / m.length);
};
exports.averageNumberOfTentacles = averageNumberOfTentacles;
var numberOfMonstersWithWings = function (m) {
    var allWings = 0;
    m.forEach(function (wing) {
        if (wing.hasWings === true) {
            allWings++;
        }
    });
    return allWings;
};
exports.numberOfMonstersWithWings = numberOfMonstersWithWings;
var getAllNoWingedMonster = function (m) {
    var wingedMonsters = [];
    m.forEach(function (hasWings) {
        if (hasWings.hasWings === false) {
            wingedMonsters.push(hasWings);
        }
    });
    return wingedMonsters.toString;
};
exports.getAllNoWingedMonster = getAllNoWingedMonster;
