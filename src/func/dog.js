"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonColor = exports.numberOfColors = void 0;
var numberOfColors = function (d) {
    // => d.length;
    var colors = [];
    var uniqueColor;
    d.forEach(function (color) {
        colors.push(color.color);
    });
    uniqueColor = new Set(colors);
    var a = __spreadArray([], uniqueColor, true);
    return a.length;
};
exports.numberOfColors = numberOfColors;
var commonColor = function (d) {
    //nedbrytning av problem
    //få en lista av färgerna
    //sök igenom listan och få fram färgen
    var colors = [];
    var dupes;
    d.forEach(function (color) {
        colors.push(color.color);
        // console.log(colors);
    });
    dupes = colors.filter(function (item, index) { return colors.indexOf(item) !== index; });
    dupes
        .sort(function (a, b) { return a - b; })
        .reverse()
        .splice(1);
    // console.log(dupes);
    return dupes;
};
exports.commonColor = commonColor;
