define([
  'entities/Game'
  ],
function (Game) {

  var text = {
    add: "Legg til øvelse"
  };

  return {
    controller: function (add) {
      var id = m.route.param.competitionId;
      this.name = m.prop("");

      this.submit = function () {
        add(new Game({
          name: this.name()
        }));
        m.events.trigger("competition:"+ id +":changed");
        this.name("");
      };
    },

    view: function (ctrl) {
      return m("input.list-el-title", {
        placeholder: text.add,
        onchange: m.withAttr("value", ctrl.name),
        onblur: ctrl.submit.bind(ctrl),
        value: ctrl.name()
      });
    }
  };
});
