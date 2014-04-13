define([
  'shared/basectrl',
  'config/elasticsearch'
  ],
function (basectrl, es) {

  var text = {
    title: "Leaderboard"
  };

  return {
    controller: basectrl.extend({
      init: function (options) {

        es.search({
          index: "bigcheese",
          type: "competition"
        }, function (error, response) {
          if (error) console.log(error);
          var docs = _.map(response.hits.hits, function (doc) {
            return {
              id: doc._id,
              title: doc._source.title,
              description: doc._source.description
            };
          });
          console.log(docs);
        });
      }
    }),

    view: function (ctrl) {
      return m("h3", text.title);
    }
  };
});
