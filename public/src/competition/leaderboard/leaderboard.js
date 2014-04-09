define([
  'shared/basectrl'
  ],
function (basectrl) {

  var text = {
    title: "Leaderboard"
  };

  return {
    controller: basectrl.extend({
      init: function (options) {
      }
    }),

    view: function (ctrl) {
      return m("h3", text.title);
    }
  };
});
