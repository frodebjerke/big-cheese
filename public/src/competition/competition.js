define([
  'entities/competition',
  'competition/games/games',
  'competition/participants/participants',
  'competition/info/info'
  ],
function (Competition, games, participants, info) {
  return {
    controller: function () {
      var id = m.route.param("id");

      this.competition = Competition.get(id);

      this.competition.then(function (competition) {
        this.games = new games.controller(competition.games);
        this.participants = new participants.controller(competition.participants);
        this.info = new info.controller(competition);
      }.bind(this));
    },
    view: function (ctrl) {
      return m("div.row.el-competition", [
        m("div.col-sm-6", [
          info.view(ctrl.info),
          m("div.row", [
            m("div.col-lg-6", [
              participants.view(ctrl.participants)
            ]),
            m("div.col-lg-6", [
              games.view(ctrl.games)
            ])
          ])
        ]),
        m("div.col-sm-6", [
          m("h1", "Leaderboard!")
        ])
      ]);
    }
  };
});
