define([

  ],
function () {
  var Competition = function (data) {
    this.title = m.prop(data.title);
    this.description = m.prop(data.description);
    this.games = m.prop(data.games);
    this.participants = m.prop(data.participants);

    this.getValues = function () {
      return {
        title: this.title(),
        description: this.description(),
        games: this.games(),
        participants: this.participants()
      };
    };
  };

  Competition.get = function (id) {
    return m.request({method: "GET", url: "/api/competition/"+id, type: Competition});
  };

  Competition.all = function () {
    return m.request({method: "GET", url: "/api/competition"});
  };

  Competition.create = function (data) {
    return m.request({method: "POST", url: "/api/competition", data: data});
  };

  Competition.save = function (id, data) {
    console.log(data);
    return m.request({method: "put", url: "/api/competition/"+id, data: data.getValues()});
  };

  return Competition;
});
