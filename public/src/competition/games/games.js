define([
  'shared/list',
  'competition/games/game',
  'competition/games/addGame'
  ],
function (list, game, addGame) {

  var listText = {
    title: "Øvelser"
  };

  return {
    controller: function (games) {
      this.list = new list.controller({
        list: games,
        add: addGame,
        valueModule: game,
        text: listText
      });
    },

    view: function (ctrl) {
      return list.view(ctrl.list);
    }
  };
});
