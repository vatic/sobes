// Initially js engine creates a global execution context
// Keywords are: Global Object and this.
function printName() {
  return 'Andrei Neagoie';
}

function findName() {
  return printName();
}

function sayMyName() {
  return findName();
}

console.log(sayMyName());
console.log(this == globalThis);
console.dir(globalThis);


