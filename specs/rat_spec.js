var Rat = require('../rat');
var Food = require('../food');
var assert = require('chai').assert;

var rat1 = new Rat('Sniffles');
var food1 = new Food('Chocolate', 5);

describe('Rat', function() {
  it('should poison food', function () {
    rat1.poison(food1);
    assert.equal(true, food1.poisoned);
  });
});