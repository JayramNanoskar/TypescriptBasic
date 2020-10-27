class Person{
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string){//parent constructor
        console.log("inside parent");
        this.firstName = firstName,
        this.lastName = lastName;
    }
    greet(){
        console.log("Person greeting -> Welcome "+this.firstName+" "+this.lastName);
    }
}

class Programmer extends Person{
    constructor(firstName: string, lastName: string){//child constructor
        //if we don't specify child constructor it will get created internally and parent constructor get calls inside it
        //but if we create child constructor then we need to call parent constructor inside it
        console.log("inside child");
        super(firstName, lastName);
    }
    greet(){ //overriding parent method
        console.log("Programmer greeting..");
    }
    allGreeting(){
        super.greet();//calls method of super/parent class instance
        this.greet();//calls method of current/child class instance
    }
}

var aProgrammer = new Programmer("Jayram", "Nanoskar");//here constructor get called
aProgrammer.allGreeting();
