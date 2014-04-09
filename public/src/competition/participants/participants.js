define([
  'shared/list',
  'competition/participants/participant',
  'competition/participants/addParticipant'
  ],
function (list, participant, addParticipant) {

  var listText = {
    title: "Utøvere"
  };

  return {
    controller: function (participants) {
      this.list = new list.controller({
        list: participants,
        add: addParticipant,
        valueModule: participant,
        text: listText
      });
    },

    view: function (ctrl) {
      return new list.view(ctrl.list);
    }
  };
});
