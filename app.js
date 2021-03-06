var express = require('express'),
	elasticsearch = require('./config/elasticsearch'),
  config = require('./config/config');


var app = express();

app.es = elasticsearch();


require('./config/express')(app, config);
require('./config/routes.js')(app);

//logging
app.use(function (req, res, next) {
  console.log('%s %s', req.method, req.url);
	next();
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("big-cheese is running. Port: " + port);
});

module.exports = app;
