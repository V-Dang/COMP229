var express = require("express");
var app = express();

app.use("/", function(req,res){
    res.send("Hello World");
});
app.listen(3000);
console.log("Server is running at http://localhost:3000/");
module.exports=app;         //used to export the application

//how to run program
//npm init
//npm install express-third party module
//node server.js
//go to browser