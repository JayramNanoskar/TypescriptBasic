"use strict";
//npm init -> to create node project file package.json
//tsc --init -> to create tsconfig.json file
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("./student");
var student = new student_1.Student("Vikas", "Rane");
console.log(student.getFullName());
