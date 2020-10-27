var func = function () { return "ok"; };
console.log(func());
var a; //using primitive data type
var b; // postfix type declaration in ts, some other languages like java follows prefix type declaration
a = 10;
//a = true; 
// shows error in ts as Type 'boolean' is not assignable to type 'number' but still after compilation .js file get generated 
// because it works in .js as previously. Here typescipt adding development side advantages as we get to know about error at on/before compiletime
b = true;
console.log(a);
console.log(b);
var myArr; // it will store numbers value only, not flexible as js array for flexibility we can use tuple in ts
myArr = [2, 4, 1, 9];
myArr.pop();
myArr.push(11);
console.log(myArr);
var myTuple;
myTuple = [1, false];
console.log(myTuple);
