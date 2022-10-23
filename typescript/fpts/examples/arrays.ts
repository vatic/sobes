import * as A from 'fp-ts/lib/Array'
import * as NEA from 'fp-ts/lib/NonEmptyArray'
import { pipe } from 'fp-ts/lib/function'

const foo = [1, 2, 3, 4, 5]
const bar = ['a', 'b', 'c']

// for loop
let sum = 0
for (let i = 0; i < foo.length; i++) {
  sum += foo[i]
}
console.log(sum) // 15

// for-of loop
sum = 0
for (const x of foo) {
  sum += x
}
console.log(sum) // 15

// fancy functional map, reduce, filter syntax
const sum2 = foo
  .map((x) => x - 1)
  .filter((x) => x % 2 === 0)
  .reduce((prev, next) => prev + next, 0)
console.log(sum2) // 6

// fp-ts style
const sum3 = pipe(
  A.Functor.map(foo, (x) => x - 1),
  A.filter((x) => x % 2 === 0),
  A.reduce(0, (prev, next) => prev + next),
)
console.log(sum3) // 6

// zip
// The cool thing about this is that it preserves the type-safety of the elements
// in the array. The type of zipped is Array<[number, string]> rather than
// Array<Array<number | string>>. In other words, zipped is an array of tuples.
const zipped = pipe(foo, A.zip(bar)) // [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]
console.log(zipped)

// Array is not type-safe in Typescript
const fooArray = [1,2,3]
const x:number = fooArray[4]
fooArray[5] = 2
console.log(fooArray) // [1, 2, 3, undefined, undefined, 2]

// Lookup by index. Return an Option type.
console.log(pipe([1,2,3], A.lookup(1))) // { _tag: 'Some', value: 2 }
console.log(pipe([1,2,3], A.lookup(3))) // { _tag: 'None' }

console.log(A.head(foo)) // { _tag: 'Some', value: 1 }
if (A.isNonEmpty(foo)) {
  const firstElement = NEA.head(foo)
  console.log(firstElement) // 1
}

// Homogenous
const homoArray = [1, 2, 3] // number[]

// Non Homogenous
const nonHomoArray = [1, '2', 3] // (string | number)[]

type Foo = {
  readonly _tag: 'Foo'
  readonly f: () => number
}

type Bar = {
  readonly _tag: 'Bar'
  readonly g: () => number
}

declare const arr: Array<Foo | Bar>

// for (const a of arr) {
//   console.log(a._tag) // Ok
//   console.log(a.f()) // Error: not assignable to Bar
//   console.log(a.g()) // Error: not assignable to Foo
// }

function compute(arr:Array<Foo | Bar>) {
  let sum = 0
  let max = Number.NEGATIVE_INFINITY

  arr.forEach((a) => {
    switch (a._tag) {
      case 'Foo':
        sum += a.f()
        break;
      case 'Bar':
        max = Math.max(max, a.g())
        break;
    
      default:
        break;
    }
  })
  return sum * max
}

// const compute2 = (arr: Array<Foo | Bar>) =>
//   pipe(
//     A.partitionMap(arr, (a) =>
//       a._tag === 'Foo' ? E.left(a) : E.right(a),
//     ),
//     ({ left: foos, right: bars }) => {
//       const sum = A.reduce(foos, 0, (prev, foo) => prev + foo.f())
//       const max = A..reduce(bars, Number.NEGATIVE_INFINITY, (max, bar) =>
//         Math.max(max, bar.g()),
//       )

//       return sum * max
//     },
//   )