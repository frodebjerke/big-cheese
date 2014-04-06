var express = require('express'),
  exphbs = require('express3-handlebars'),
  winston = require('winston'),
  expressWinston = require('express-winston')

module.exports = function (app, config) {

  app.use(express.static(config.root + '/public'));

  // Views config
  app.engine('.hbs', exphbs({extname: ".hbs"}));
  app.set('view engine', '.hbs');
  app.set('views', config.root + '/app/views');

  app.configure(function () {


    // Mithril sends POSTs with content-type: text/plain
    // This function parses such requests, assuming the data has JSON structure.
    app.use(function (req, res, next) {
      if (req.is('text/plain')) {
        req.text = '';
        req.setEncoding('utf8');
        req.on('data', function(chunk){ req.text += chunk; });
        req.on('end', function () {
          req.body = JSON.parse(req.text);
          next();
        });
      }
      else {
        next();
      }
    });

    // // express-winston logger makes sense BEFORE the router.
    // app.use(expressWinston.logger({
    //   transports: [
    //     new winston.transports.Console({
    //       json: true,
    //       colorize: true
    //     })
    //   ]
    // }));

    // express-winston errorLogger makes sense AFTER the router.
    app.use(expressWinston.errorLogger({
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        })
      ]
    }));
  });

};
