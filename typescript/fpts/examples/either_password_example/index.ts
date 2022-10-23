import { flow, identity, pipe } from 'fp-ts/lib/function'
import * as Password from './password'
import crypto from 'crypto'
import * as E from 'fp-ts/lib/Either'

const pipeline = flow(
  Password.of,
  Password.validate({ minLength: 8, capitalLetterRequired: true }),
  E.map(
    Password.hash((value) =>
      crypto.createHash('md5').update(value).digest('hex'),
    ),
  ),
)

// with chainW if the hash2 function with Either too
const pipeline2 = flow(
  Password.of,
  Password.validate({ minLength: 8, capitalLetterRequired: true }),
  E.chainW(
    Password.hash2((value) =>
      E.right(crypto.createHash('md5').update(value).digest('hex')),
    ),
  ),
)

console.log(pipe('pw123', pipeline)) // min length error
console.log(pipe('pw123456', pipeline)) // capital letter error
console.log(pipe('pW123456', pipeline)) // Right password
console.log(pipe('pW123456', pipeline2)) // Right password
