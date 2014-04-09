define([
  ],
function () {
  var text = {
    title: "Liste"
  };

  return {
    controller: function (options) {
      var add = options.add,
          value = options.valueModule;
      var addVal = function (val) {
        return new value.controller(val);
      };

      this.text = text || options.text;

      var ctrllist = options.list.map(function (val) {
        return addVal(val);
      });
      this.list = ctrllist;
      this.valueModule = options.valueModule;
      this.addModule = options.add;
      this.addCtrl = new options.add.controller(function (newVal) {
        console.log(newVal)
        ctrllist.push(addVal(newVal));
        console.log(ctrllist);
      });
    },

    view: function (ctrl) {
      var li = function () {
        var arr = ctrl.list.map(function (val) {
          return m(".list-el", [
            ctrl.valueModule.view(val)
          ]);
        });
        arr.push(m(".list-el", [ctrl.addModule.view(ctrl.addCtrl)]));

        return arr;
      };

      return m(".el-participants", [
        m("h3", ctrl.text.title),
        m(".el-list", li())
      ]);
    }
  };
});
