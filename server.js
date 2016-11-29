const express = require('express');
const app = express();
var path = require('path');

const port = 3000;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/static', express.static(__dirname + '/css'));
app.use('/static', express.static(__dirname + '/js'));

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
