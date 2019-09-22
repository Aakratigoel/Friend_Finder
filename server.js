var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3700
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var htmlroute = require('./app/routing/htmlRoutes.js');
app.use('/', htmlroute);
var apiroute = require('./app/routing/apiRoutes.js');
app.use('/apiroutes', apiroute);
// //both index.js and things.js should be in same directory
 //app.use('/things', things);
app.listen(PORT);