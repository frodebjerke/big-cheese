 module.exports = function(app){
   var landingController = require('../app/controllers/landingController')(app.es);
     var competitionController = require('../app/controllers/competitionController')(app.es);

   app.get("/", landingController.index);

   // API
   app.get('/api/competition', competitionController.all);
   app.get("/api/competition/:id", competitionController.get);
 };
