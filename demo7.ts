//Generics - let us allow to parameterize the Types like we parameterize values in function
function echo(arg: any): any{
    return arg;
}

var aMsg = echo(1);//here without generics, incomming value is of type any and get assign to aMsg of type any implicitely 
var bMsg: string = echo(2);//here without generics, we can assign incomming value(any) to var of type(string) also
console.log(aMsg);
console.log(bMsg);

function echoWithGeneric<T>(arg: T): T{
    return arg;
}

var cMsg = echoWithGeneric(3);//here with generics, incomming value is of type method calling parameter type(number here) and get assign to cMsg of type number implicitely
// var dMsg: string = echoWithGeneric(4);//here with generics, we cannot assign incomming value(number) to var of type(string)
console.log(cMsg);
// console.log(dMsg);

class Person{

    constructor(public firstName: string, public lastName: string){
    }

    getFullName(){
        return this.firstName +" "+ this.lastName;
    }
}

class Admin extends Person{
}

class Manager extends Person{
}

let admin = new Admin("Dean", "Trott");
let manager = new Manager("Suresh", "Deshpande");

function personEcho(person: Person): Person{//polymorphism implementation
    console.log(person.getFullName());
    return person;
}

function personEchoWithGenerics<T>(person: T): T{//generics implementation
    // console.log(person.getFullName());//not accessible as Property 'getFullName' does not exist on type 'T', we should have extend T with Person for access
    return person;
}

function personEchoWithGenericsExtended<T extends Person>(person: T): T{//generics implementation + here tsc compiler checks if incomming value is extending Person
    console.log(person.getFullName());
    return person;
}

var foo = personEcho(manager);
var bar = personEchoWithGenerics(admin);
// console.log(bar);
var mgr = personEchoWithGenericsExtended(manager);
