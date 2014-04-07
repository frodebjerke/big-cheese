var _ = require('underscore');

module.exports = function (es) {
  var index = "bigcheese";
  var type = "competition";

  var all = function (req, res) {
    es.search({
      index: index,
      type: type
    }, function (error, response) {
      if (error) res.send(error, "500");
      var docs = _.map(response.hits.hits, function (doc) {
        return {
          id: doc._id,
          title: doc._source.title,
          description: doc._source.description
        };
      });
      res.send(docs);
    });
  };

  var get = function (req, res) {
    var id = req.params.id;
    es.get({
      index: 'bigcheese',
      type: 'competition',
      id: id
    }, function (error, response) {
      if (error) res.send(error, "500");
      res.send(response._source);
    });
  };

  var create = function (req, res) {
    var data = req.body;
    es.create({
      index: 'bigcheese',
      type: 'competition',
      body: data
    }, function (error, response) {
      if (error) res.send(error, "500");
      res.send(response);
    });
  };

  var update = function (req, res) {
    var data = req.body;
    var id = req.params.id;

    es.index({
      index: 'bigcheese',
      type: 'competition',
      id: id,
      body: data
    }, function (error, response) {
      if (error) throw new Error(error);
      res.send(response);
    });
  };

  return {
    all: all,
    get: get,
    create: create,
    update: update
  };
};
