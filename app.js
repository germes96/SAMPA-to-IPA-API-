require('dotenv').config()
const colors = require("colors");
const express = require('express')
var cors = require('cors');
const morgan  = require('morgan');
var bodyParser = require('body-parser')
const swagger = require('./admin/swagger') 
var helmet = require('helmet');
//Config of elastic APM on project
const app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
const port =  process.env.PORT;

//https security setup

var http = require('http');
var httpServer = http.createServer(app);
// use morgan to log requests to the console
app.use(morgan('dev'));
swagger.startSwagger(app);

app.use('/assets', express.static(__dirname + '/public'));

//for basics http secutity 
//https://expressjs.com/en/advanced/best-practice-security.html
app.use(helmet());

app.use(cors());

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, API-Key')
  res.header('Access-Control-Expose-Headers', '*')
  next()
});

// API ROUTES -------------------
// the core Route
var Routes = require("./core/routes/Routes")
app.use('/xsampa', Routes);
httpServer.listen(port);
console.log(
  `Successful start on port: ${port}`
    .cyan.underline.bold
);