import { pipe } from 'fp-ts/lib/function';

// declare function write(key: string, value: string, flush: boolean): unknown

function write(key: string, value: string, flush: boolean): unknown {
  console.log(`key: ${key}; value: ${value}, flush: ${flush}`);
  return { key, value, flush };
}

const writeC = (key: string) => (value: string) => (flush: boolean) =>
  write(key, value, flush);

// ❌ Wrong
// pipe(true, 'value', 'key', writeC)

// ✅ Correct
const result = pipe(true, pipe('value', pipe('key', writeC)));

console.log(result);
