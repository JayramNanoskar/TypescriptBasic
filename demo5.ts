class Person{
    firstName: string;//member variable bydefault public 
    lastName: string;

    constructor(firstname: string, lastname:string){//constructor
        this.firstName = firstname;
        this.lastName = lastname;
    }
    greet(){//method
        console.log("Hello...Person");
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
console.log(aStudent.firstName);//accessing member variable
aStudent.getGreeting();
aStudent.greet();//calling overrided method/child method here
