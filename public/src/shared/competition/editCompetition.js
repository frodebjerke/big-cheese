define([
  'entities/Competition'
  ],
function (Competition) {

  var text = {
    title: "Tittel",
    description: "Beskrivelse",
    add: "Lag ny konkurranse",
    submit: "Lagre",
    change: "Endre"
  };

  return {
    controller: function (route, id, competition) {
      competition = competition || {};
      this.hasId = m.prop(id);
      this.title = competition.title || m.prop("");
      this.description = competition.description || m.prop("");
      this.games = competition.games || m.prop([]);
      this.participants = competition.participants || m.prop([]);

      this.add = function () {
        var req;
        if (this.hasId()) {
          req = Competition.save(id, competition);
        }
        else {
          req = Competition.create({
            title: this.title(),
            description: this.description(),
            games: this.games(),
            participants: this.participants()
          });
        }

        req.then(function () {
          m.route(route);
        });
      };
    },

    view: function (ctrl) {
      return m("form", [
        ctrl.hasId() ? m("h4", text.change) : m("h2", text.add),
        m("div.form-group", [
          m("label", text.title),
          m("input.form-control", {onchange: m.withAttr("value", ctrl.title), value: ctrl.title()}),
        ]),
        m("div.form-group", [
          m("label", text.description),
          m("textarea.form-control", {onchange: m.withAttr("value", ctrl.description), value: ctrl.description()})
        ]),
        m("button[type='button'].btn.btn-default", {onclick: ctrl.add.bind(ctrl)}, text.submit)
      ]);
    }
  };
});
