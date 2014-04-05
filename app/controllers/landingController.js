module.exports = function (es) {
  var index = function (req, res) {
    res.render("index");
  };

  return {
    index: index
  };
};
