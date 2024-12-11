"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dogs = void 0;
require("./styles.css");
var user_functions_1 = require("./func/user-functions");
var monster_1 = require("./func/monster");
var dog_1 = require("./func/dog");
// Fixa så funktionen gör det den ska
var printSum = function (a, b) {
    console.log(a + b);
};
printSum(1, 2);
printSum(5, 12);
var arr = [
    {
        name: "Stina",
        hobby: ["läsa böcker"],
        age: 67,
    },
    {
        name: "Lisa",
        hobby: ["åka skidor"],
        age: 26,
    },
    {
        name: "Mio",
        hobby: ["spela rollspel", "spela brädspel"],
        age: 22,
    },
    {
        name: "Olle",
        hobby: ["sportklättring", "vandra", "sticka", "virka"],
        age: 38,
    },
    {
        name: "Leo",
        hobby: ["matlagning", "bakning"],
        age: 17,
    },
];
console.log("Vi har ".concat(arr.length, " stycken anv\u00E4ndare."));
console.log("Medel\u00E5ldern p\u00E5 alla anv\u00E4ndare \u00E4r ".concat((0, user_functions_1.averageAge)(arr)));
console.log("Medelantalet hobbies per anv\u00E4ndare \u00E4r ".concat((0, user_functions_1.averageNumberOfHobbies)(arr)));
console.log(" most hobbies".concat((0, user_functions_1.mostHobbies)(arr)));
(0, user_functions_1.oldestPerson)(arr);
// skriv ut "Den personen med flest hobbies har Y stycken hobbies". Byt ut Y mot ett funktionsanrop. Skapa den funktionen.
// skriv ut "Den äldsta personen är A och den yngsta är B". Byt ut A och B mot funktionsanrop. Ska de två funktionerna
exports.dogs = [
    { name: "Nisse", color: "brown" },
    { name: "Fiffi", color: "white" },
    { name: "Fluffe", color: "black" },
    { name: "Hoppe", color: "beige" },
    { name: "Pluto", color: "gray" },
    { name: "Winter", color: "gray" },
    { name: "Rolf", color: "brown" },
    { name: "Benny", color: "brown" },
    { name: "Krister", color: "gray" },
    { name: "Krister", color: "gray" },
    { name: "Krister", color: "green" },
    { name: "Krister", color: "blue" },
];
console.log("Vi har ".concat(exports.dogs.length, " stycken hundar."));
console.log("Hundarna har ".concat((0, dog_1.numberOfColors)(exports.dogs), " antal unika f\u00E4rger."));
console.log("Den vanligaste f\u00E4rgen bland alla hundar \u00E4r: ".concat((0, dog_1.commonColor)(exports.dogs), "."));
// vi vill ha en pretty print som skriver ut alla färger som hundarna har och hur många hundar det finns av varje färg
var monsters = [
    { name: "Florg", age: 1266, tentacles: 29, eyes: 666, hasWings: true },
    { name: "Smirch", age: 78, tentacles: 68, eyes: 2, hasWings: false },
    { name: "Gorge", age: 25, tentacles: 2, eyes: 2, hasWings: false },
    { name: "Fioliviargh", age: 478, tentacles: 6, eyes: 1, hasWings: true },
    { name: "Snorla", age: 42, tentacles: 9, eyes: 9456, hasWings: false },
    {
        name: "Oligarnaclech",
        age: 36,
        tentacles: 675,
        eyes: 148,
        hasWings: true,
    },
    { name: "Milowarg", age: 78, tentacles: 2, eyes: 12, hasWings: false },
    { name: "Znawrl", age: 456, tentacles: 8, eyes: 6, hasWings: true },
    { name: "Welff", age: 6548, tentacles: 34, eyes: 4, hasWings: true },
    { name: "Ulf", age: 56, tentacles: 4, eyes: 2, hasWings: false },
    { name: "Ellorn", age: 423, tentacles: 2, eyes: 2, hasWings: false },
];
console.log("Vi har ".concat(monsters.length, " stycken monster."));
console.log("Medel\u00E5ldern p\u00E5 alla monster \u00E4r ".concat((0, monster_1.averageMonsterAge)(monsters)));
console.log("Medelantalet tentakler f\u00F6r alla monster \u00E4r ".concat((0, monster_1.averageNumberOfTentacles)(monsters)));
// loopa igenom alla monster och skriv ut dem med prettyPrintMonster
(0, monster_1.prettyPrintMonster)(monsters);
console.log("Antalet monster som har vingar \u00E4r ".concat((0, monster_1.numberOfMonstersWithWings)(monsters)));
var noWingedMonster = (0, monster_1.getAllNoWingedMonster)(monsters);
console.log(noWingedMonster);
