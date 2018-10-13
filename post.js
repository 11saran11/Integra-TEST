var express = require('express');
var app = express();
var http =require('http');
var path=require('path');
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/input', function(req,res){
    
    console.log("Username:" +req.query.user);
    console.log("Password:" +req.query.pass);
    res.writeHead(200, { 'Content-Type': 'html' });
    res.write("Username:" +req.query.user + "   Password:" +req.query.pass);
    res.end();
})

app.post('/string', function(req,res){

    var str= req.body.user;
    var revr = str.split("");
    var sas= revr.reverse().join("");
    res.write(sas);
    res.end();
    console.log(sas);
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
  
  })