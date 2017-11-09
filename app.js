const http = require('http');

http.createServer((req, res) => {
  res.end('')
}).listen(1212, () => {
  console.log('alioss image server');
});
