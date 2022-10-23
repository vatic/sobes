import * as O from 'fp-ts/Option'
import { flow, pipe } from 'fp-ts/lib/function'

interface Fizz {
  buzz: string
}

interface Foo {
  bar: string
}

interface Foo2 {
  bar?: Fizz
}

const foo = {
  bar: 'hello',
} as Foo | undefined

const foo2 = { bar: undefined } as Foo2 | undefined

const res1 = pipe(foo, (f) => f?.bar) // hello
// const res3 = pipe(foo, ({ bar }) => bar) // error TS2339: Property 'bar' does not exist on type 'Foo | undefined'.
const res2 = pipe(foo, O.fromNullable, O.map(({ bar }) => bar)) // { _tag: 'Some', value: 'hello' }
const res3 = pipe(undefined, O.fromNullable, O.map(({ bar }) => bar)) // { _tag: 'None' }
const res4 = pipe(
  foo2,
  O.fromNullable,
  O.map(({ bar }) =>
    pipe(
      bar,
      O.fromNullable,
      O.map(({ buzz }) => buzz)
    ),
  ),
) // { _tag: 'Some', value: { _tag: 'None' } }

const res5 = pipe(
  foo2,
  O.fromNullable,
  O.map(({ bar }) =>
    pipe(
      bar,
      O.fromNullable,
      O.map(({ buzz }) => buzz)
    ),
  ),
  O.flatten
) // { _tag: 'None' }

// chain - это flatmap
const res6 = pipe(
  foo2,
  O.fromNullable,
  O.map(({ bar }) => bar),
  O.chain(
    flow(
      O.fromNullable,
      O.map(({ buzz }) => buzz),
    ),
  ),
)

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)
console.log(res6)
