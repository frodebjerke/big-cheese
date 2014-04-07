define([
  'landing/competitions/competitions',
  'landing/banner/banner'
  ],
function (competitions, banner) {
  return {
    controller: function () {
      this.competitions = new competitions.Controller();
      this.banner = new banner.Controller();
    },

    view: function (ctrl) {
      return m('div.row', [
        m('div.col-sm-6', [
          banner.view(ctrl.banner)
        ]),
        m('div.col-sm-6', [
          competitions.view(ctrl.competitions)
        ])
      ]);
    }
  };
});
