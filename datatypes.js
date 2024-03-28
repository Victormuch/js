//

//1. Strings
const firstName = "Jane";
const lastName = "Doe";
const fullName = `Jane Doe`;

// strings using + operator
console.log(firstName + lastName);

//curly brackets {}
//paranthesis ()
//square brackets []

// string interpolation
console.log(`${firstName} ${lastName}, age is ${100 - 45}`);

//2. Numbers
console.log(typeof 3);

//3. Boolean
console.log(typeof true);
console.log(typeof false);

//4. Objects- collection of data cosisting of key values
const student = {
  firstName: "Jane",
  lastName: "Doe",
  cohort: "SDF_FT09",
  studentEmail: "jane.doe@student.moringaschool.com",
  age: 23,
};
console.log(typeof student);

// Arrays -list of values enclosed using square brackets[]
const Name = ["John", "Brian", "Victor"];
const scores = [23, 45, 34, 34];
console.log(typeof Name);

//5. Null- represents an intentionally absent value
const newStudent = null;
console.log(newStudent);

//6. Undefined
let age;
console.log(typeof age)

