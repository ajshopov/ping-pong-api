const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', function(req, res) {
  const test = {
    'init': 'hello world'
  }
  res.json(test)
});

app.listen(PORT, function() {
	console.log(`listening on port ${PORT}`);
});