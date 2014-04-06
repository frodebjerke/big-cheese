module.exports = function (es) {
  var data = [{
    id: 0,
    title: "Påske",
    description: "Yolo",
    games: [{
      name: "Disco"
    }],
    participants: [{
      name: "Frode"
    }, {
      name: "Vemund"
    }]
  }, {
    id: 1,
    title: "Jul",
    description: "",
    games: [],
    participants: []
  }];

  var all = function (req, res) {
    res.send(data);
  };

  var get = function (req, res) {
    res.send(data[req.params.id]);
  };

  return {
    all: all,
    get: get
  };
};
