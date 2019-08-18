/* * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.*/

   // path package to get the correct files for the html
   var path = require("path");

   //Routing functions

   module.exports = function (app) {
       app.get("/survey", function(require,response){
           response.senfFile(path.join(__dirname,"../public/survey.html"));
       })


       app.use(function(require,response){
           response.sendFile(path.join(__dirname,"../public/home.html"));
       })
   }