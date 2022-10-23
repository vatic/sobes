import axios from "axios";
import { pipe } from 'fp-ts/lib/function'
import * as TE from 'fp-ts/lib/TaskEither'

;(async () => {
  const ok = await pipe(
    TE.tryCatch(
      () => axios.get('https://httpstat.us/200'),
      (reason) => new Error(`${reason}`),
    ),
    TE.map((resp) => resp.data),
  )()

  console.log(ok)
  // { _tag: 'Right', right: { code: 200, description: 'OK' } }
}
)()