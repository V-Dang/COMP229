var express = require('./config/express');      //uses express.js file in config folder that we made
var app = express();
app.listen(3000);
module.exports = app;
console.log('Server running at http://localhost:3000/');