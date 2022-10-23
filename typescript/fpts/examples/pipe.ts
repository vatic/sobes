import { pipe } from 'fp-ts/lib/function'

function add1(num: number): number {
  return num + 1
}

function multiply2(num: number): number {
  return num * 2
}

function toString(num: number): string {
  return `${num}`
}

const res = pipe(3, add1, multiply2)
console.log(res)

const res2 = pipe(3, add1, multiply2, toString)
console.log(res2)

