var express = require('express')
var app=express();
var path = require('path');
var bp=require('body-parser');
var port=8000;
var session=require('express-session');

app.use(session({secret:'itsasecret',resave:true, saveUninitialized:true}));
app.use(express.static(path.join(__dirname,'./client/dist')));
app.use(bp.json());

require('./server/config/mongoose');		
require('./server/config/routes')(app);

app.listen(port,function(){
	console.log(`We are listening on port ${port}`);
})