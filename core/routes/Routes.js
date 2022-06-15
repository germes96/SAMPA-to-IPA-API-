var express = require('express');
var routes = express.Router();
var v1 = express.Router();
const converted = require('../controllers/converter')

v1.get("/ipatosampa", converted.ipatosampa)
v1.get("/sampatoipa", converted.sampatoipa)

routes.use('/v1', v1);
module.exports = routes;


