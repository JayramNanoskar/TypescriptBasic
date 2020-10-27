class Person{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){// we cannot have overloaded constructor in ts, only one constructor is allowed
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
    
}

var aPerson: Person = new Person("Jayram", "Nanoskar");//type declaration for custom classes same as primitive 

console.log(aPerson.getFullName());
