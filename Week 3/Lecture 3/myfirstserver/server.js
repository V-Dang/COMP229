const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;


const server = http.createServer((req, res) => {        //createServer method, req = request, res = response
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World! Welcome to COMP229.");        //Whenever you make changes to your web server, you have to re-run 'node server.js' in command line
                                                        //SOLUTION: install another node module package 'npm install nodemon' then run 'nodemon'
});

server.listen(port, hostname,() =>{
    console.log(`Server running at http://${hostname}:${port}/`);
});