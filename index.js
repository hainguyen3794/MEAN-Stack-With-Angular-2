var express = require('express');
var app = express();
var mongoose= require('mongoose');
var config= require('./config/database');
var path = require('path');

mongoose.Promise= global.Promise;
mongoose.connect(config.uri, (err)=>{
  if(err){
    console.log('Could not connect');
  }else{
    console.log(config.secret);
    console.log('success connect to datatabase:'+ config.db);
  }
});
app.use(express.static(__dirname+ '/client/dist/'));
app.get('/', function(req, res){
    // truyen qua ben kia 1 function va ben kia goi lai function(req,res) với 2 tham số truyền vào đã được gán ở hàm get

    //console.log(res);
    //res.send('haha');
    res.sendFile(path.join(__dirname+'/client/dist/index.html'));
  });
  
app.listen(8080,()=>{
    console.log('Listening on port 8080');
  });