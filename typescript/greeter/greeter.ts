class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleName + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };
let user2 = new Student("Jane", "M.", "User");
// let user = "Jane User";
// Argument of type 'number[]' is not assignable to parameter of type 'string'.
// let user = [1,2,3];
console.log(greeter(user));

