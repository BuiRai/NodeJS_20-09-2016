'use stric';

var express = require('express');
var app = express();

app.use('/', function(req, res){
	res.send('Hello World Express');
});

app.listen(3000);
console.log('Express server running in port 3000');
module.exports = app;