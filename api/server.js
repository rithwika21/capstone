//express server on port 3000
const express = require('express');
const app = express();
const port = 3000;


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Server is running on port', port);
});