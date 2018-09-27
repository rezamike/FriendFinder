var express = require("express");
var bodyParser = require("body-parser");
var inquirer = require("inquirer");
var request = require("request");
var mysql = require("mysql");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8083;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });