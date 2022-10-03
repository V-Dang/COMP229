var express = require('./config/express.js');
var app = express();

app.use("/", function(req, res){
    res.send("Hello World");
})
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
module.exports = app;


//only look at index.html, index.js, package.json, server.js. Other files were from rendering