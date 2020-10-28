export class Student{
    constructor(protected firstName: string, protected lastName: string){
    }

    public getFullName(){
        return this.firstName + " " + this.lastName;
    }
}
