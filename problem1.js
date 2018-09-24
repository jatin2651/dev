//1. Create a GET path at `/hello` that returns "hello world".

var express = require('express');

var app = express();

app.get('/hello', (req,res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('started on port 3000');
});
