define([
  'landing/competitions/competitions',
  'landing/ctrls/ctrls'
  ],
function (competitions, ctrls) {
  return {
    controller: function () {
      this.competitions = new competitions.Controller();
      this.ctrls = new ctrls.Controller();
    },

    view: function (ctrl) {
      return m('div.container-fluid', [
        m('div.row', [
          m('div.col-sm-6', [
            ctrls.view(ctrl.ctrls)
          ]),
          m('div.col-sm-6', [
            competitions.view(ctrl.competitions)
          ])
        ])
      ]);
    }
  };
});
