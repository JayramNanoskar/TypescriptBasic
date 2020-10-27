var Foo = /** @class */ (function () {
    function Foo() {
        this.firstName = "Ulhas";
        this.lastName = "Marathe";
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Foo;
}());
var aPerson = new Foo(); //Polymorphism - here Foo is implementing interface so instance of class Foo can be allocated to the variable of type of interface
console.log(aPerson.getFullName());
var someObj = {
    firstName: 'Ajay',
    lastName: 'Vohra',
    address: 'Mumbai',
    getFullName: function () { return "Ajay Vohra"; }
};
var bPerson;
bPerson = someObj; // Duck/Structure based typing- just matches the exact interface with object structure, need not to have instance of a class implementing interface 
console.log(bPerson.getFullName());
console.log(bPerson.firstName); //will allow as property is exist in interface
//console.log(bPerson.address);//won't allow as property is not exist in interface
