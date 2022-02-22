const http = require('http');

const server=http.createServer((req, res) =>
{
   
   res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head><title>My First Page</title></head>');
   res.write('<body><h3>Hello from Node js</h3></body>');
   if(req.url==='/home')
  {
      res.write('<p>Welcome Home</p>');
  }
  if(req.url==='/about')
  {
      res.write('<p>Welcome to About Us page</p>');
  }
  if(req.url==='/node')
  {
      res.write('<p>Welcome to my Node js project</p>');
  }
  
   res.write('</html>');
  
});
server.listen(4000);
