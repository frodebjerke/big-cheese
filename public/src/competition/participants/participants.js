define([],
function () {
  return {
    controller: function (participants) {
      this.participants = participants;
    },

    view: function (ctrl) {
      return m("ul", ctrl.participants().map(function (participant) {
        return m("li.el-participant", [
          m("a[href='participant/'"+ participant.id+"]", {config: m.route}, participant.name)
        ]);
      }));
    }
  };
});
