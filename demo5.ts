class Person{

    constructor(private firstName: string, private lastName:string){//just need to specify access modifier, so parameters treats as a member variable + take the incomming value + assign it to member varibles
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

var aStudent = new Student("Mohan", "Rajput");
// console.log(aStudent.firstName);//accessing public member variable, private/protected variables cannot be access
console.log(aStudent.getFirstName());//accessing private variables through getter
aStudent.getGreeting();
aStudent.greet();//calling overrided method/child method here
