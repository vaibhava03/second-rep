const http = require('http');

const server=http.createServer((req, res) =>
{
    res.write('vaibhava')
  
    res.end()
});
server.listen(4000);
