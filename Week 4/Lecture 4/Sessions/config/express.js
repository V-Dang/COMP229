//creating the config var
var express = require('express');
const morgan = require('morgan');
compress = require('compression');
methodoverride = require('method-override');
bodyParser = require('body-parser');

//exporting the var's
module.exports = function() {
    var app = express();

    if (process.env.NODE_ENV =="development"){
        app.use(morgan("dev"));
    } else if (process.send.NODE_ENV =="production"){
        app.use(compress());
    }
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(methodoverride());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    require('../app/routes/index.server.routes.js')(app);

    app.use(express.static('./public'));    //to serve static files (required)

    return app;
};