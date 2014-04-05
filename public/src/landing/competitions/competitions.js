define([
  ],
function () {
  var Competition = function (data) {
    this.title = m.prop(data.title);
  };

  var Competitions = Array;

  var Text = function () {
    this.title = "Konkurranser";
    this.add = "Ny konkurranse";
  };

  return {
    Controller: function () {
      this.competitions = new Competitions();
      this.title = m.prop("");

      this.text = new Text();

      this.add = function (title) {
        if (title()) {
          this.competitions.push(new Competition({title: title()}));
          this.title("");
        }
      };
    },

    view: function (ctrl) {
      return m('div.el-competitions', [
        m("h1", ctrl.text.title),
        m("input", {onchange: m.withAttr("value", ctrl.title), value: ctrl.title()}),
        m("button", {onclick: ctrl.add.bind(ctrl, ctrl.title)}, ctrl.text.add),
        m("ul.competitions-list", ctrl.competitions.map(function (comp) {
          return m("li.el-competition", [
            m("span.competitions-title", comp.title()),
          ]);
        }))
      ]);
    }
  };
});
