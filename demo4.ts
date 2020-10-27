interface Person{//interfaces defines the structure
    firstName: string;
    lastName: string;
    getFullName(): string;//here method signature only, class implementing this interface need to have method implementation
}

class Foo implements Person{
    firstName: string = "Ulhas";
    lastName: string = "Marathe";
    getFullName(): string {
        return this.firstName +" "+ this.lastName;
    }
    
}

let aPerson: Person = new Foo();//Polymorphism - here Foo is implementing interface so instance of class Foo can be allocated to the variable of type of interface
console.log(aPerson.getFullName());

let someObj = { //inline object
    firstName: 'Ajay',
    lastName: 'Vohra',
    address: 'Mumbai',
    getFullName: () => "Ajay Vohra"
};

let bPerson: Person;
bPerson = someObj; // Duck/Structure based typing- just matches the exact interface with object structure, need not to have instance of a class implementing interface 
console.log(bPerson.getFullName());
console.log(bPerson.firstName);//will allow as property is exist in interface
//console.log(bPerson.address);//won't allow as property is not exist in interface
