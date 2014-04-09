define([
  'entities/Participant'
  ],
function (Participant) {

  var text = {
    add: "Legg til utøver"
  };

  return {
    controller: function (add) {
      this.name = m.prop("");
      this.add = function () {
        add(new Participant({
          name: this.name()
        }));
        this.name("");
      };
    },

    view: function (ctrl) {
      return m("input.list-el-title", {
        placeholder: text.add,
        onchange: m.withAttr("value", ctrl.name),
        onblur: ctrl.add.bind(ctrl),
        value: ctrl.name()
      });
    }
  };
});
