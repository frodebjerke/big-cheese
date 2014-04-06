define([],
function () {
  return {
    controller: function (competition) {
      this.competition = competition;
    },

    view: function (ctrl) {
      return m("div.competition-info", [
        m("h1", ctrl.competition.title()),
        m("p", ctrl.competition.description())
      ]);
    }
  };
});
