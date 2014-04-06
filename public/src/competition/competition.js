define(['entities/competition'],
function (Competition) {
  return {
    controller: function () {
      var id = m.route.param("id");

      this.competition = Competition.get(id);

    },
    view: function (ctrl) {
      return m("h1", ctrl.competition().title());
    }
  };
});
