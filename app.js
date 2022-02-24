const http = require('http');

const fs=require('fs'); 
var message=fs.createWriteStream('message.txt');
const server=http.createServer((req, res) =>
{
  const url=req.url;
  const method=req.method; 
  if(url==='/')
{
  res.write('<html>');
  res.write('<head><title>Enter Message</title></head>');
  res.write(`<body><p>${fs.readFileSync('message.txt')}</p><form action ="/message" method ="POST"> <input type ="text" name ="message"> <button type="submit">Send</button></body>`);
  res.write('</html>');
  return res.end();
}
if(url === '/message' && method === 'POST')
{
    const body=[];
    req.on('data', (chunk) =>
    {
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end',() =>
    {
      parsedBody=Buffer.concat(body).toString();
        message.write(parsedBody.split('=')[1]);
       message.write('  ');
  });

  res.statusCode=302;
       res.setHeader('Location', '/');
       return res.end();
}
res.setHeader('Content-Type', 'text/html');
 res.write('<html>');
 res.write('<head><title>My First Page</title></head>');
 res.write('<body><h3>Hello from Node js</h3></body>'); 
 res.write('</html>');
 return res.end();
});
server.listen(4000);

