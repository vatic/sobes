import * as fs from 'node:fs';
import * as http from 'node:http';

const PORT = 3000;
const FILE_PATH = '/home/vatagin/code/js/sobes/nodejs/official_guides/stream_backpressuring/package.json';

const getFile = (req, res) => {
  const fileStream = fs.createReadStream(FILE_PATH);

  req.setEncoding('utf8');

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  fileStream.pipe(res);
}

const server = http.createServer(getFile)
server.listen(PORT);
console.log(`The http server is listening on port ${PORT}`);

