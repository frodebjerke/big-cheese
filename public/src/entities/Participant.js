define([],
function () {
  var Participant = function (data) {
    this.name = m.prop(data.name);

    this.serialize = function () {
      return {
        name: this.name()
      };
    };
  };

  return Participant;
});
