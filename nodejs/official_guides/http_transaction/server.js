// const http = require('http');
import { http } from 'node:http';
 
// server is an EventEmitter
// const server = http.createServer();
// server.on('request', (request, response) => {
// });

const server = http.createServer((request, response) => {
  const { method, url, headers } = request;
  console.dir(method);
  console.dir(url);
  console.dir(headers);
});

server.listen(3000);

