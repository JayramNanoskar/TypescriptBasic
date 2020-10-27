var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        console.log("inside parent");
        this.firstName = firstName,
            this.lastName = lastName;
    }
    Person.prototype.greet = function () {
        console.log("Person greeting -> Welcome " + this.firstName + " " + this.lastName);
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(firstName, lastName) {
        var _this = this;
        //if we don't specify child constructor it will get created internally and parent constructor get calls inside it
        //but if we create child constructor then we need to call parent constructor inside it
        console.log("inside child");
        _this = _super.call(this, firstName, lastName) || this;
        return _this;
    }
    Programmer.prototype.greet = function () {
        console.log("Programmer greeting..");
    };
    Programmer.prototype.allGreeting = function () {
        _super.prototype.greet.call(this); //calls method of super/parent class instance
        this.greet(); //calls method of current/child class instance
    };
    return Programmer;
}(Person));
var aProgrammer = new Programmer("Jayram", "Nanoskar"); //here constructor get called and type is of Programmer
var bProgrammer = new Programmer("John", "Menon"); //creating another instance programmer and now of type person
aProgrammer.allGreeting();
bProgrammer.greet(); //works like polymorphism, will have access to those child class methods which are defined inside parent class
//here greet() will be available but allGreeting() won't
