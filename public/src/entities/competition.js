define([

  ],
function () {
  var Competition = function (data) {
    this.id = m.prop(data.id);
    this.title = m.prop(data.title);
    this.games = m.prop(data.games);
    this.participants = m.prop(data.participants);
  };

  Competition.get = function (id) {
    return m.request({method: "GET", url: "/api/competition/"+id, type: Competition});
  };

  Competition.all = function () {
    return m.request({method: "GET", url: "/api/competition", type: Competition});
  };

  return Competition;
});
