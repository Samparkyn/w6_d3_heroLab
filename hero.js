var Hero = function(name, favFood, health, maxHealth, stressed){
  this.name = name;
  this.favFood = favFood;
  this.maxHealth = maxHealth;
  this.health = health;
  this.stressed = stressed;
};

Hero.prototype = {
  talk: function() {
    return this.name;
  },
  eat: function(food) {
    if (food.poisoned === true){
      this.health -= 50;
      this.checkHealth();
    } else if(this.health + food.replenishValue >= this.maxHealth) {
      this.health = this.maxHealth;
    } else if (food.name === this.favFood) {
      this.health += (food.replenishValue * 1.5);
    } else {
      this.health += food.replenishValue;
    }
    var healthState = this.checkHealth();
    return healthState;
  },
  checkHealth: function() {
    if (this.health <= 0) {
      return 'you are deded';
      //some end game logic gere
    }else {
    return false;
  }
},
  bite: function(rat){
    rat.health -= 100;
    return rat.health;
  }
};

module.exports = Hero;
