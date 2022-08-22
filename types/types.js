var num = 12 // number
var b = true // boolean
var str = 'To be or not to be'; // string
var und = undefined; // undefined
var n = null // null
var sym = Symbol('just me');
var o = {};

/*
 *    Object
 *    |     |
 *  Array  Function
*/
var a = [];
function fn() { return 0; }


console.log(typeof num);
console.log(typeof b);
console.log(typeof str);
console.dir(typeof und);
console.log(typeof n); //  null is an Object
console.log(typeof sym);
console.log(typeof o);

console.log(typeof a);
console.log(typeof fn);

a.hi = 'hihihi';
console.log(a.hi); // 'hihihi'

const obj = {
  a: 1
}

// Built-it objects
// Wrappers
console.log(true.toString());
console.log(Boolean(true).toString());

var array1 = ['1', '2', '3'];
var array2 = {
  0: '1',
  1: '2',
  2: '3'
};

console.log(Array.isArray(array1));
console.log(Array.isArray(array2));
console.log(array1 instanceof Array);
console.log(array2 instanceof Array);

var a = 5;
var b = a; // pass by value, just copy value
b++;
console.log(a, b)

let obj1 = { name: 'Yao', password: '123' }; 
let obj2 = obj1;

obj2.password = 'easypeasy';
console.log(obj1, obj2); // pass by reference, we change obj1 password

var c = [1,2,3,4,5];
var d = c;
var e = [].concat(c);
d.push(12345); // c Array modified
console.log(c); 
console.log(e);

let obj3 = {a: 'a', b: 'b', c: { deep: 'try and copy me' }};
let clonedObject = Object.assign({}, obj3); 
let clone2 = {...obj3};
// how we do deep clonning
let superClone = JSON.parse(JSON.stringify(obj3));

obj3.c.deep = 'hahaha';
console.log(obj3, clonedObject);
console.log(clone2);
console.log(superClone);

for(s in obj3) {
  console.log(s);
}

// [1,2,3].reduce()
