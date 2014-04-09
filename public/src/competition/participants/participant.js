define([],
function () {
  return {
    controller: function (participant) {
      this.participant = participant;
      this.editName = m.prop(false);
      this.change = function () {
        this.editName(false);
      };
    },

    view: function (ctrl) {
      var name = function () {
        return m(".list-el-title", {
          onclick: ctrl.editName.bind(ctrl, true)
        }, ctrl.participant.name());
      };

      var editName = function () {
        return m("input.participant-editname", {
          onchange: m.withAttr("value", ctrl.participant.name),
          onblur: ctrl.change.bind(ctrl),
          value: ctrl.participant.name()
        });
      };

      return m(".el-participant", [
        ctrl.editName() ? editName() : name()
      ]);
    }
  };
});
