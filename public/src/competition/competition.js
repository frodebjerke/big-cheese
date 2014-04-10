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
      var id = m.route.param("competitionId");

      this.competition = Competition.get(id);

      this.competition.then(function (competition) {
        m.events.on("competition:"+ id +":changed", competition.save.bind(competition, id));

        this.info = new info.controller(id, competition);
        //this.games = new games.controller(competition.games());
        this.participants = new participants.controller(competition.participants());
        this.leaderboard = new leaderboard.controller();
      }.bind(this));
    },
    view: function (ctrl) {
      return m("div.row.el-competition", [
        m("div.col-md-6", [
          info.view(ctrl.info),
          m("div.row", [
            m("div.col-xs-12.visible-xs.visible-sm", [
              leaderboard.view(ctrl.leaderboard)
            ]),
            m(".col-xs-8.col-sm-6", [
              participants.view(ctrl.participants)
            ]),
            m(".col-xs-8.col-sm-6", [
              //games.view(ctrl.games)
            ])
          ])
        ]),
        m("div.col-md-6.hidden-xs.hidden-sm", [
          leaderboard.view(ctrl.leaderboard)
        ])
      ]);
    }
  };
});
