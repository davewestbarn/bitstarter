var express = require('express');
var fs = requre('fs');

var app = express.createServer(express.logger());
#var buffer = new Buffer(fs.readFileSync("index.html"));

app.get('/', function(request, response) {
  response.send("Hello World3!");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
