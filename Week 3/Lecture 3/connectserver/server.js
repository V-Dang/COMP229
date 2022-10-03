const connect = require("connect");                     //must 'install npm connect' since connect is a 3rd party module
const app = connect();

function helloWorld(req, res, next) {
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
}
function logger(req, res, next){
    console.log(req.method, req.url);
    next();
}
function goodbyeWorld(req, res, next){
    res.setHeader("Content-Type", "text/plain");
    res.end("Goodbye World");
}

app.use(logger);
//different paths:
    app.use("/hello", helloWorld);
    app.use("/goodbye", goodbyeWorld);
app.listen(3000);
console.log("Server running at http://localhost:3000/");