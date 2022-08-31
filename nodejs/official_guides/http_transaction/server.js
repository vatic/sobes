// const http = require('http');
import * as http from 'node:http';

const PORT = 3000;
 
// server is an EventEmitter
// const server = http.createServer();
// server.on('request', (request, response) => {
// });

http.createServer((request, response) => {
  const { method, url, headers } = request;
  let body = [];

  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;

    const responseBody = { headers, method, url, body };
    response.end(JSON.stringify(responseBody));
  });




}).listen(PORT);

console.log(`Http Server is running on port ${PORT}...`);

