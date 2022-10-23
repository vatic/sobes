import * as T from 'fp-ts/lib/Task'

async function someTask(id: string) {
  if (id.length > 36) {
    throw new Error('id must have length greater than 36')
  }
}

const id = 'abc'
const task: T.Task<void> = () => someTask(id)
