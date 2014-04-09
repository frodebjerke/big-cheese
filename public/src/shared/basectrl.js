define([
  'underscore'
  ],
function (_) {
  var ctor = function () {};

  var base = function (options) {
    _.extend(this, m.events);
    this.init(options);
  };

  base.extend = function(properties) {
    var parent = this;


    var child = function() {
        parent.apply(this, arguments);
    };

    ctor.prototype = parent.prototype;
    child.prototype = new ctor();

    _.extend(child.prototype, properties);

    child.extend = parent.extend;

    return child;
  };

  return base;
});
