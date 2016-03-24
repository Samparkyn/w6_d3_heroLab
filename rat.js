var Rat = function(name, health){
  this.name = name;
  this.health = health;
  this.ratPoisen = true;

  this.poison = function(food){
    food.poisoned = true;
  }
};

module.exports = Rat;

