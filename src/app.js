var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000);

console.log('Server running at http://localhost:3000/');

var ary1 = ['Sato', 'Take', 'Osada', 'Hio', 'Saitoh', 'Sato'];
var ary2 = ['Yabuki', 'Aoki', 'Moriyama', 'Yamada'];

console.log(ary1.length);
console.log(Array.isArray(ary1));