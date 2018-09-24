/*
2. Create a GET path at `/question2` that returns whatever value
 is passed for the query parameter `content`.

 E.g. If I make a request that looks like this
`/question2?content=hello` , I want to see 'hello' in my return body.
*/

var express = require('express');

var app = express();

app.get('/question2', function(req, res){
  res.send(req.query.content);
});

app.listen(3000, () => {
  console.log('started on port 3000');
});
