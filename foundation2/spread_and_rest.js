// rest property
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others);
const [head, ...tail] = [1,2,3];
console.log(tail);

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1,2,3];

console.log(sum(...numbers));

console.log(sum.apply(null, numbers));

