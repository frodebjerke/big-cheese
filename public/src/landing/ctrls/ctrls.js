define([],
function () {

  var Text = function () {
    this.overtitle = "Vi kårer";
    this.title = "Big Cheese";
    this.titletag = "familiens";
  };

  return {
    Controller: function () {
      this.text = new Text();
    },

    view: function (ctrl) {
      return m('div.el-ctrl', [
        m("div.ctrl-overtitle", ctrl.text.overtitle),
        m("div.ctrl-titletag", ctrl.text.titletag),
        m("div.ctrl-title", ctrl.text.title)
      ]);
    }
  };
});
