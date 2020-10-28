//npm init -> to create node project file package.json
//tsc --init -> to create tsconfig.json file

import { Student } from "./student";
import * as _ from "lodash";

let student = new Student("Vikas", "Rane");
console.log(student.getFullName());

var arr = [1, 2, 3, 4, 5];
console.log(arr);
_.reverse(arr);
console.log(arr);
