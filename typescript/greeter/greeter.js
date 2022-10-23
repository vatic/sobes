var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
var user2 = new Student("Jane", "M.", "User");
// let user = "Jane User";
// Argument of type 'number[]' is not assignable to parameter of type 'string'.
// let user = [1,2,3];
console.log(greeter(user));
