define([
  'underscore'
  ],
function (_) {

  var Text = function () {
    this.intro = "Vi kårer";
    this.title = "Big Cheese";
    this.titletags = ["Familiens", "Vennegjengens", "Jobbens", "Kollektivets", "Verdens", "Landets", "Byens", "Skolens", "Universets"];
  };

  var tagCarousel = function (tagprop, tags) {
    if (tags.length) {
      setInterval(function () {
        var tag = _.shuffle(tags)[0];
        tagprop(tag);
        m.redraw();
      }, 3000);
    }
  };

  return {
    Controller: function () {
      this.text = new Text();
      this.titletag = m.prop("");

      tagCarousel(this.titletag, this.text.titletags);
    },

    view: function (ctrl) {
      return m('div.el-banner', [
        m("div.banner-large.hidden-xs", [
          m("div.banner-intro", ctrl.text.intro),
          m("div.banner-title", [
            m("span.title",ctrl.text.title),
            m("span.banner-titletag", ctrl.titletag())
          ])
        ]),
        m("div.banner-small.visible-xs", [
          m("h1.banner-title", ctrl.text.title)
        ])
      ]);
    }
  };
});
