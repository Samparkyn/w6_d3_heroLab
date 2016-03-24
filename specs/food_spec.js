var Food = require('../food');
var assert = require('chai').assert;

var food1 = new Food("steak", 25);

describe('Food', function() {
  it('should have a name', function () {
    assert.equal('steak', food1.name);
  });
  it('should have a replenishment value', function () {
    assert.equal(25, food1.replenishValue);
  });

});