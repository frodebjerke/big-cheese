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
          m("a[href='/competition/"+ comp.id +"'].competition-title", {config: m.route}, comp.title),
        ]);
      }));
    }
  };
});
