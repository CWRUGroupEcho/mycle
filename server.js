// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static(path.join(__dirname, "public")));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Routes
// =============================================================

require("./routes/locations-routes.js")(app);
require("./routes/review-routes.js")(app);



// Syncing our sequelize models and then starting our Express app
// =============================================================

db.sequelize.sync({ force: false })
    .then(function () {
        console.log("Starting the server on port " + PORT)
        app.listen(PORT);
    });
