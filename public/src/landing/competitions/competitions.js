define([
  'landing/competitions/list',
  'shared/competition/editCompetition'
  ],
function (list, addCompetition) {
  var Text = function () {
    this.title = "Konkurranser";
    this.add = "Ny konkurranse";
  };

  return {
    controller: function () {
      this.list = new list.controller();
      this.addCompetition = new addCompetition.controller("/");
      this.showAddCompetition = m.prop(false);

      this.text = new Text();

      this.add = function (show) {
        this.showAddCompetition(!show());
      };
    },

    view: function (ctrl) {
      return m('div.el-competitions', [
        m("h1", ctrl.text.title),
        m("button", {onclick: ctrl.add.bind(ctrl, ctrl.showAddCompetition), style: {display: ctrl.showAddCompetition() ? "none" : ""}}, ctrl.text.add),
        ctrl.showAddCompetition() ? addCompetition.view(ctrl.addCompetition) : list.view(ctrl.list)
      ]);
    }
  };
});
