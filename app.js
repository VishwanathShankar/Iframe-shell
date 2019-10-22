var express = require('express');
var app = express();
var PORT=3000
app.use('/', express.static('public'));

app.listen(PORT);
console.log("Iframe shell started on port "+PORT);
