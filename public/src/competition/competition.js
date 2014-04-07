define([
  'entities/Competition',
  'competition/games/games',
  'competition/participants/participants',
  'competition/info/info',
  'competition/leaderboard/leaderboard'
  ],
function (Competition, games, participants, info, leaderboard) {
  return {
    controller: function () {
      var id = m.route.param("id");

      this.competition = Competition.get(id);

      this.competition.then(function (competition) {
        this.info = new info.controller(id, competition);
        this.games = new games.controller(competition);
        this.participants = new participants.controller(competition);
        this.leaderboard = new leaderboard.controller();
      }.bind(this));
    },
    view: function (ctrl) {
      return m("div.row.el-competition", [
        m("div.col-sm-6", [
          info.view(ctrl.info),
          m("div.row", [
            m("div.col-xs-12.visible-xs", [
              leaderboard.view(ctrl.leaderboard)
            ]),
            m("div.col-lg-6", [
              participants.view(ctrl.participants)
            ]),
            m("div.col-lg-6", [
              games.view(ctrl.games)
            ])
          ])
        ]),
        m("div.col-sm-6.hidden-xs", [
          leaderboard.view(ctrl.leaderboard)
        ])
      ]);
    }
  };
});
