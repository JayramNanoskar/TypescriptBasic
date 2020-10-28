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
    function Person(firstname, lastname) {
        this.firstName = firstname;
        this.lastName = lastname;
    }
    Person.prototype.greet = function () {
        console.log("Hello...Person");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.greet = function () {
        console.log("Hello...Student");
    };
    Student.prototype.getGreeting = function () {
        _super.prototype.greet.call(this); //calling parent class method
        this.greet(); //calling child class method
    };
    return Student;
}(Person));
var aStudent = new Student("Mohan", "Rajput");
console.log(aStudent.firstName); //accessing member variable
aStudent.getGreeting();
aStudent.greet(); //calling overrided method/child method here
