define([],
function () {
  return {
    controller: function (game) {
      var id = m.route.param("competitionId");
      this.game = game;
      this.editName = m.prop(false);
      this.change = function () {
        m.events.trigger("competition:"+ id +":changed");
        this.editName(false);
      };
    },

    view: function (ctrl) {
      var name = function () {
        return m(".list-el-title", {
          onclick: ctrl.editName.bind(ctrl, true)
        }, ctrl.game.name());
      };

      var editName = function () {
        return m("input.participant-editname", {
          onchange: m.withAttr("value", ctrl.game.name),
          onblur: ctrl.change.bind(ctrl),
          value: ctrl.game.name()
        });
      };

      return m(".el-participant", [
        ctrl.editName() ? editName() : name()
      ]);
    }
  };
});
