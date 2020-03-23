var BonesDancer = function(top, left, timeBetweenSteps) {

  makeBlinkyDancer.call(this, top, left, timeBetweenSteps)
  this.$node = $('<img src="bones1.gif">');

};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  BonesDancer.prototype = Object.create(makeBlinkyDancer.prototype)
  BonesDancer.prototype.constructor = BonesDancer

  BonesDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this, this.timeBetweenSteps);
   this.$node.toggle();
  };