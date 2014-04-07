define([
  'entities/Competition'
  ],
function (Competition) {
  return {
    controller: function (competition) {
      this.participants = competition.participants();
      this.newName = m.prop("");

      this.add = function (name) {
        this.participants.push({name: name()});
        this.newName("");
        Competition.save(m.route.param("id"), competition);
      };
    },

    view: function (ctrl) {
      return m("div", [
        m("h3", "Utøvere"),
        m("ul", ctrl.participants.map(function (participant) {
          return m("li.el-participant", [
            m("a[href='participant/'"+ participant.id+"]", {config: m.route}, participant.name)
          ]);
        })),
        m("div", [
          m("input", {onchange: m.withAttr("value", ctrl.newName)}, ctrl.newName()),
          m("a", {onclick: ctrl.add.bind(ctrl, ctrl.newName)}, [
            m("span.glyphicon.glyphicon-plus", "")
          ])
        ])
      ]);
    }
  };
});
