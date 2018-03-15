var http = require('http');

var server = http.createServer();

server.on('request', function(request, response){
  console.log('request received.');
});
server.on('request', function(request, response){
  console.log(request.url);
  response.writeHead(403, {'Content-Type': 'text/plain'});
  response.end('<B>hello<B> ' + request.url);
});
server.on('request', function(request, response){
  console.log('response sent.');
});
server.listen(8080, 'localhost');
