const express = require('express');
const app = express();
const PORT = 5000;

// const initOptions = {
//     // pg-promise initialization options...
//     connect(client, dc, isFresh) {
//         const cp = client.connectionParameters;
//         console.log('Connected to database:', cp.database);
//     }
// };
const pgp = require('pg-promise')();
const cn = 'postgres://username:password@host:port/database';
const connection = {
    database: 'ping_pong',
    user: 'ajshopov'
};
const db = pgp(connection);




app.get('/', function(req, res) {
  const test = {
    'init': 'hello world'
  }
  res.json(test)
});


app.get('/api/players', (req, res) => {
  // db.any('SELECT * FROM users')
  //   .then(function(data) {
  //       console.log(data);
  //   })
  db.any('select * from players')
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