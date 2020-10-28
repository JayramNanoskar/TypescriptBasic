class Person{
    private firstName: string;//member variable bydefault public 
    private lastName: string;

    constructor(firstname: string, lastname:string){//constructor
        this.firstName = firstname;
        this.lastName = lastname;
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
// console.log(aStudent.firstName);//accessing public member variable, private variables cannot be access
console.log(aStudent.getFirstName());//accessing private variables through getter
aStudent.getGreeting();
aStudent.greet();//calling overrided method/child method here
