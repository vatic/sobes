// const http = require('http');
import * as http from 'node:http';

const PORT = 3000;
 
// server is an EventEmitter
// const server = http.createServer();
// server.on('request', (request, response) => {
// request is ReadableStream
// response is WritebleStream
// });

http.createServer((request, response) => {
  const { method, url, headers } = request;
  let body = [];
  let responseBody = {};

  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    if(method === 'POST' && url === '/ping') {
      body = Buffer.concat(body).toString();
      responseBody = { headers, method, url, body };
      response.setHeader('Content-Type', 'application/json');
      response.statusCode = 200;
      response.end(JSON.stringify(responseBody));
    } else if(method === 'POST' && url === '/echo') {
      request.pipe(response);
    } else {
      response.statusCode = 404;
      response.end();
    }
  });

}).listen(PORT);

console.log(`Http Server is running on port ${PORT}...`);

