"use strict";
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
exports.__esModule = true;
exports.Manager = exports.Admin = exports.Person = void 0;
//Generics - let us allow to parameterize the Types like we parameterize values in function
function echo(arg) {
    return arg;
}
var aMsg = echo(1); //here without generics, incomming value is of type any and get assign to aMsg of type any implicitely 
var bMsg = echo(2); //here without generics, we can assign incomming value(any) to var of type(string) also
console.log(aMsg);
console.log(bMsg);
function echoWithGeneric(arg) {
    return arg;
}
var cMsg = echoWithGeneric(3); //here with generics, incomming value is of type method calling parameter type(number here) and get assign to cMsg of type number implicitely
// var dMsg: string = echoWithGeneric(4);//here with generics, we cannot assign incomming value(number) to var of type(string)
console.log(cMsg);
// console.log(dMsg);
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
exports.Person = Person;
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(Person));
exports.Admin = Admin;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Person));
exports.Manager = Manager;
var admin = new Admin("Dean", "Trott");
var manager = new Manager("Suresh", "Deshpande");
function personEcho(person) {
    console.log(person.getFullName());
    return person;
}
function personEchoWithGenerics(person) {
    // console.log(person.getFullName());//not accessible as Property 'getFullName' does not exist on type 'T', we should have extend T with Person for access
    return person;
}
function personEchoWithGenericsExtended(person) {
    console.log(person.getFullName());
    return person;
}
var foo = personEcho(manager);
var bar = personEchoWithGenerics(admin);
// console.log(bar);
var mgr = personEchoWithGenericsExtended(manager);
