import { Readable } from 'node:stream';

class Counter extends Readable {
  #max = 0;
  constructor(opt) {
    super(opt);

    this._max = 5;
    this._index = 0;
  }

  _read() {
    this._index += 1;

    if (this._index > this._max) {
      this.push(null);
    } else {
      const buf = Buffer.from(`${this._index}`, 'utf8');

      console.log(`Added: ${this._index}. Could be added? `, this.push(buf));
    }
  }
}

const counter = new Counter({ highWaterMark: 2 });

// this read() method is public and it's not that private _read as in class
// console.log(`Received: ${counter.read().toString()}`);

counter.on('data', chunk => {
  console.log(`Received: ${chunk.toString()}`);
});

