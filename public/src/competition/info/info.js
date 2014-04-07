define([
  'shared/competition/editCompetition'
  ],
function (editCompetition) {

  var text = {
    edit: "Endre",
    delete: "Slett",
  };

  return {
    controller: function (id, competition) {
      this.title = competition.title;
      this.description = competition.description;
      this.edit = m.prop(false);
      this.editCompetition = new editCompetition.controller("/competition/"+id,id, competition);

      this.delete = function () {

      };
    },

    view: function (ctrl) {
      return m("div", [
        m("div.competition-toolbar", [
          m("a", {onclick: ctrl.edit.bind(ctrl, true)}, [
            m("span.glyphicon.glyphicon-edit", {title: text.edit}, "")
          ]),
          m("a", {onclick: ctrl.delete.bind(ctrl)}, [
            m("span.glyphicon.glyphicon-trash", {title: text.delete}, "")
          ])
        ]),
        ctrl.edit() ? editCompetition.view(ctrl.editCompetition) :
          m("div.competition-info", {style: {display: ctrl.edit() ? "none" : ""}},[
            m("h1", ctrl.title()),
            m("p", ctrl.description())
          ])
      ]);
    }
  };
});
