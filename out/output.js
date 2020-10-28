"use strict";
var sum = function (a, b, c) {
    if (c === void 0) { c = 0; }
    return (a + b + c);
};
console.log(sum(5, 6));
console.log(sum(5, 6, 8));
