

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var http = require('http');
var read =  require('fs').readFileSync;

http.createServer((req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.end(new String(read('./header.html')).replace('<my-content></my-content>',read('./index.html')));
}).listen(4000)

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/blog',function(req,res){
  res.sendFile(path.join(__dirname+'/blog.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');