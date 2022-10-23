let buffer = new ArrayBuffer(16)

let view = new Uint32Array(buffer)

console.log(Uint32Array.BYTES_PER_ELEMENT)

console.log(view.length)
console.log(view.byteLength)

view[0] = 123456

for(let num of view) {
  console.log(num)
}

