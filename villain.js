var Villain = function(name, evilPower, health, weakness){
  this.name = name;
  this.evilPower = evilPower;
  this.health = health;
  this.weakness = weakness;
};

Villain.prototype = {
  talk: function(){
    return this.name;
  },
  useEvilPower: function(hero){
    console.log(this.evilPower);
    hero.stressed = true;
    return hero.stressed;
  }
};

module.exports = Villain;