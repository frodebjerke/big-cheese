define(['entities/competition'],
function (Competition) {
  return {
    controller: function () {
      var id = m.route.param("id");

      this.competition = Competition.get(id);
    },
    view: function (ctrl) {
      return m("div.row.el-competition", [
        m("div.col-sm-6", [
          m("div.competition-info", [
            m("h1", ctrl.competition().title()),
            m("p", ctrl.competition().description())
          ]),
          m("div.row", [
            m("div.col-lg-6", [
              m("ul", ctrl.competition().participants().map(function (participant) {
                return m("li.el-participant", [
                  m("a[href='participant/'"+ participant.id+"]", {config: m.route}, participant.name)
                ]);
              }))
            ]),
            m("div.col-lg-6", [
              m("ul", ctrl.competition().games().map(function (game) {
                  return m("li.el-game", [
                  m("a[href='game/'"+ game.id+"]", {config: m.route}, game.name)
                ]);
              }))
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
