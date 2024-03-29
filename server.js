//should require the basic npm packages we've used in class: `express` and `path`.

var express = require("express");
var path = require("path");
//var parseBod =  require("body-parser");
var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//api and html routs
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT,function(){
    console.log("App listening on PORT: " + PORT);
});
