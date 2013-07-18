var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fname=fs.readFileSync('index.html');
  response.send(JSON.stringify(fname));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
