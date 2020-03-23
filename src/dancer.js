// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  this.top = top
  this.left = left
  this.$node = $('<img src="bones1.gif">');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition();
};

  // use jQuery to create an HTML <span> tag

  MakeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  setTimeout(this.step.bind(this) , this.timeBetweenSteps);

  };

   MakeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: this.top,
      left: this.left
    };
  this.$node.css(styleSettings);
  };
