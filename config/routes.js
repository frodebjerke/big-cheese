 module.exports = function(app){
   var landingController = require('../app/controllers/landingController')(app.es);

   app.get("/", landingController.index);
 };
