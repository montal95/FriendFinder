//require the following npms to run the app
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set-up for the express app
var app = express();
var PORT = process.env.PORT || 3000;

//apply the body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//require files for routing
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//start the listen and posts link in console
app.listen(PORT, function() {
  console.log("App listening on PORT http://localhost:" + PORT);
});
