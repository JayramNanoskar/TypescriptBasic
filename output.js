var sum = function (a, b, c) {
    if (c === void 0) { c = 0; }
    return (a + b + c);
};
console.log(sum(5, 6));
console.log(sum(5, 6, 8));
//Some TypeScript compiler arguments we can use while compilling ts file
//tsc demo9.ts --outFile output.js - to redirect output into specific file, avoid default file generation with same name as source ts file
//tsc demo9.ts --outFile output.js --watch - compiler continuously watches changes if any and compiles on every save
