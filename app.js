const express = require('express');
const app = express();
const PORT = 5000;

const pgp = require('pg-promise')();
const connection = {
    database: 'ping_pong',
    user: 'James'
};
const db = pgp(connection);

app.get('/', function(req, res) {
  const test = {
    'init': 'hello world'
  }
  res.json(test)
});

app.get('/api/players', (req, res) => {
  db.any('SELECT * FROM players')
    .then(data => {
      console.log(data); // print data;
      res.json(data)
    }).catch(error => {
      console.log('ERROR:', error); // print the error;
    })
})


app.listen(PORT, function() {
	console.log(`listening on port ${PORT}`);
});