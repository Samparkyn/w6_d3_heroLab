var Hero = require('../hero');
var assert = require('chai').assert;
var Food = require('../food');
var Rat = require('../rat');

var myHero = new Hero("Captain Bark", 'steak', 100, 200);
var food1 = new Food("sausages", 10);
var food2 = new Food("steak", 20);
var myRat = new Rat("ugly", 100);

describe('Hero', function() {
  it('should have a name', function () {
    assert.equal('Captain Bark', myHero.name);
  });

  it('should have health', function () {
    assert.equal(100, myHero.health);
  });

  it('should have a favourite food', function(){
    assert.equal('steak', myHero.favFood);
  });

  it('should say its name', function () {
    assert.equal('Captain Bark', myHero.talk());
  });

});

describe('Hero eats', function() {
  it('should eat and get health', function(){
    myHero.eat(food1);
    assert.equal(110, myHero.health);
  });
  it('should heal hero by 30', function () {
    myHero.health = 100;
    myHero.eat(food2);
    assert.equal(130, myHero.health);
  });
  it('should never have health over his max health', function () {
    myHero.health = 199;
    myHero.eat(food2);
    assert.equal(200, myHero.health);
  });
  it('should lose 50 health when eats poisoned food', function () {
    myHero.health = 100;
    myRat.poison(food2);
    myHero.eat(food2);
    assert.equal(50, myHero.health);
  });
  it('should die when health is 0', function () {
    myHero.health = 50;
    myRat.poison(food2);
    assert.equal('you are deded', myHero.eat(food2));
  });
});

describe('Hero bites rat', function(){
  it('should bite (and kill) the rat', function(){
    myHero.bite(myRat);
    assert.equal(0, myRat.health)
  })
})