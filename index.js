var express = require('express')
var app = express()


app.get('/', function(req, res){
  res.send('hi james')

})

app.listen(5000)