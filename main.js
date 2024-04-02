//sudo su
//curl -fsSL http://deb.nodesource.com/setup_17.x | bash -
//sudo apt install nodejs
//npm --version
//node --version
//node

var http = require("http");  
  
http.createServer(function (request, response) {  
// Send the HTTP header  
// HTTP Status: 200 : OK  
// Content Type: text/plain  
response.writeHead(200, {'Content-Type': 'text/plain'});  
  
// Send the response body as "Hello World"  
response.end('Hello World\n');  
}).listen(8081);  
// Console will print the message  
console.log('Server running at http://127.0.0.1:8081/'); 
