var express = require('express');
var cors = require('cors');

require('dotenv').config();
var app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami',(req, res)=>{
  let ip = req.ip;
  let prefferedLang = req.headers['accept-language'];
  let software = req.headers['user-agent'];
  res.send({ipaddress: ip, language: prefferedLang, software: software});
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
