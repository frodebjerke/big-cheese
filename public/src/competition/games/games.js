define([
  ],
function () {
  return {
    controller: function (games) {
      this.games = games;
    },

    view: function (ctrl) {
      return m("ul", ctrl.games().map(function (game) {
          return m("li.el-game", [
          m("a[href='game/'"+ game.id+"]", {config: m.route}, game.name)
        ]);
      }));
    }
  };
});
