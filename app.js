const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const pgp = require('pg-promise')();
const connection = {
    database: 'ping_pong',
    user: 'James'
};
const db = pgp(connection);
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


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
});

app.get('/api/matches', (req, res) => {
  db.any('SELECT * FROM matches')
  .then(data => {
    res.json(data)
  }).catch(error => {
    console.log('ERROR:', error)
  })
});

app.post('/api/players', (req, res) => {
  console.log(req.body)
  db.none('INSERT INTO players(name, score) VALUES($1, $2)', [req.body.userName, req.body.userScore])
    .then(() => {
        console.log('success');
    })
    .catch(error => {
        console.log('error');
    });

})



app.listen(PORT, function() {
	console.log(`listening on port ${PORT}`);
});