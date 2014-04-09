define([
  'entities/Participant',
  'entities/Game'
  ],
function (Participant, Game) {
  var Competition = function (data) {
    this.title = m.prop(data.title);
    this.description = m.prop(data.description);
    this.games = m.prop(data.games);
    this.participants = m.prop(data.participants);

    this.serialize = function () {
      return {
        title: this.title(),
        description: this.description(),
        games: this.games().serialize(),
        participants: this.participants().serialize()
      };
    };
  };

  Competition.get = function (id) {
    return m.request({method: "GET", url: "/api/competition/"+id}).then(function (comp) {
      comp.games = comp.games.map(function (game) {
        return new Game(game);
      });
      comp.participants = comp.participants.map(function (participant) {
        return new Participant(participant);
      });
      return new Competition(comp);
    });
  };

  Competition.all = function () {
    return m.request({method: "GET", url: "/api/competition"});
  };

  Competition.create = function (data) {
    return m.request({method: "POST", url: "/api/competition", data: data});
  };

  Competition.save = function (id, data) {
    return m.request({method: "put", url: "/api/competition/"+id, data: data.getValues()});
  };

  return Competition;
});
