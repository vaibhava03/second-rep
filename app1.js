const http = require('http');
const routes=require('./routes');
const server=http.createServer(routes)


server.listen(4000);

//routes.js

const fs=require('fs');

const requestHandler =(req, res) =>
{
  const url=req.url;
  const method=req.method; 
  if(url==='/')
{
  res.write('<html>');
  res.write('<head><title>Enter Message</title></head>');
  res.write(`<body><form action ="/message" method ="POST"> <input type ="text" name ="message"> <button type="submit">Send</button></body>`);
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
       const message=(parsedBody.split('=')[1]);
       fs.writeFileSync('message.txt', message, err =>
       {
         
  res.statusCode=302;
  res.setHeader('Location', '/');
  return res.end();
       });
  });
  }

  res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head><title>My First Page</title></head>');
   res.write('<body><h3>Hello from Node js</h3></body>'); 
   res.write('</html>');
   return res.end();
};
module.exports=requestHandler;
