var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var aPerson = new Person("Jayram", "Nanoskar"); //type declaration for custom classes same as primitive 
console.log(aPerson.getFullName());
