//npm init -> to create node project file package.json
//tsc --init -> to create tsconfig.json file

import { Student } from "./student";

let student = new Student("Vikas", "Rane");
console.log(student.getFullName());
