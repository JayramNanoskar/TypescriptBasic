var func =  () =>  "ok"; 
console.log(func());

var a: number; //using primitive data type
var b: boolean; // postfix type declaration in ts, some other languages like java follows prefix type declaration

a = 10;
//a = true; 
// shows error in ts as Type 'boolean' is not assignable to type 'number' but still after compilation .js file get generated 
// because it works in .js as previously. Here typescipt adding development side advantages as we get to know about error at on/before compiletime
b = true;

console.log(a);
console.log(b);

var myArr: number[];// it will store numbers value only, not flexible as js array for flexibility we can use tuple in ts
myArr = [2, 4, 1, 9];

myArr.pop();
myArr.push(11);
console.log(myArr);

var myTuple: [number, boolean];
myTuple = [1, false];

console.log(myTuple);

function add(a: number, b: number, c: number = 0): number{//we can pass default value with optional parameter
    return a + b + c;
}

console.log(add(4, 5));
console.log(add(4, 5, 7));

var myNum: number = 120;

var d = myNum;//here with implicit typing, var 'd' will be of type number because assignment is on same line as declaration
var e;
e = myNum;//here with implicit typing, var 'e' will be of type any because assignment is not on same line as declaration

console.log(d);
console.log(e);

var val: string | boolean; //union types to have multiple type values, means to loosen some type checking 
//we can use type 'any' to have loosely type checking
//we know typescript is tightly coupled with types, not loosely coupled as javascript

val = "true";
val = true;
console.log(val);
