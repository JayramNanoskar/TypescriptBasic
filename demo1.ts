var func =  () =>  "ok"; 
console.log(func());

var a: number; //using primitive data type 

a = 10;
//a = true; 
// shows error in ts as Type 'boolean' is not assignable to type 'number' but still after compilation .js file get generated 
// because it works in .js as previously. Here typescipt adding development side advantages as we get to know about error at on/before compiletime

console.log(a);
