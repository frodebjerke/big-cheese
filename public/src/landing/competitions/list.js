define([
  'entities/Competition'
  ],
function (Competition) {
  return {
    controller: function () {
      this.competitions = Competition.all();
    },

    view: function (ctrl) {
      return m("ul.competitions-list", ctrl.competitions().map(function (comp) {
        return m("li.el-competition", [
          m("a.competition-title", {href: '/competition/'+ comp.id, config: m.route}, comp.title),
        ]);
      }));
    }
  };
});
