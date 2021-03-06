var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var filename = __dirname + '/index.html';

app.get('/', function(request, response) {
 var buffer = new Buffer(1000);
 var str = fs.readFileSync(filename,'utf8');
 buffer.write(str);   
response.send(buffer.toString('utf-8',0,str.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
