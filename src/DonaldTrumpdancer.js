var makeDtrumpDancer = function(top, left, timeBetweenSteps) {

  makeBlinkyDancer.call(this, top, left, timeBetweenSteps)
  this.$node = $('<img src="dt1.gif">');
  this.$node = $('<img src="dt2.gif">');
  this.step();
  this.setPosition(top , left);
};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  makeDtrumpDancer.prototype = Object.create(makeBlinkyDancer.prototype)
  makeDtrumpDancer.prototype.constructor = makeDtrumpDancer

  makeDtrumpDancer.prototype.step = function() {

    MakeDancer.prototype.step.call(this, this.timeBetweenSteps);
    //this.$node.toggle();
  };