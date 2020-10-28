class Person{

    readonly hasBrain: boolean = true;//readonly modifier- we can assign value once and cannot change further, just we can access it
    //we can assign value to readonly member in constructor also
    constructor(readonly hasHobby: boolean, private firstName: string, private lastName:string){//just need to specify access modifier, so parameters treats as a member variable + take the incomming value + assign it to member varibles
    }
    greet(){//method
        console.log("Hello...Person");
    }
    getFirstName(){
        return this.firstName;
    }
}

class Student extends Person{
    greet(){
        console.log("Hello...Student");
    }
    getGreeting(){
        super.greet();//calling parent class method
        this.greet();//calling child class method
    }
}

var aStudent = new Student(true, "Mohan", "Rajput");
// console.log(aStudent.firstName);//accessing public member variable, private/protected variables cannot be access
console.log(aStudent.getFirstName());//accessing private variables through getter
aStudent.getGreeting();
aStudent.greet();//calling overrided method/child method here
console.log(aStudent.hasBrain);
console.log(aStudent.hasHobby);
