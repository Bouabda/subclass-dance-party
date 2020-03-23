var makeDtrumpDancer = function(top, left, timeBetweenSteps) {

  makeBlinkyDancer.call(this, top, left, timeBetweenSteps)

};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  makeDtrumpDancer.prototype = Object.create(makeBlinkyDancer.prototype)
  makeDtrumpDancer.prototype.constructor = makeDtrumpDancer

