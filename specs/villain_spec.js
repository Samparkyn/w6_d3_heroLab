var assert = require('chai').assert;
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var Villain = require('../villain');

var villain = new Villain('Trixsey the Super Cat', 'hides all dog toys', 100, 'head scratch');
var myHero = new Hero("Captain Bark", 'steak', 100, 200, false);

describe('Villain', function(){
  it('should say its name', function(){
    assert.equal('Trixsey the Super Cat', villain.name);
  })
  it('should stress out hero', function(){
    villain.useEvilPower(myHero);
    assert.equal(true, myHero.stressed);
  })
});