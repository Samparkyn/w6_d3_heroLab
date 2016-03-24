var prompt = require('prompt');
var Hero = require('./hero');
var Food = require('./food');
var Rat = require('./rat');
var Villain = require('./villain');

var myHero = new Hero("Captain Bark", 'steak', 100, 200);
var villain = new Villain('Trixsey the Super Cat', 'hides all dog toys', 100, 'head scratch');
var food1 = new Food("sausages", 10);
var food2 = new Food("steak", 20);
var myRat = new Rat("ugly", 100);

console.log('Welcome to the Adventures of Captain Bark');
console.log('Our Heros name is: ' + myHero.name + '. His fav food is: ' + myHero.favFood);
console.log('The villains name is: ' + villain.name + '. Her Evil Power is: ' + villain.evilPower + ' But..her weakness is: ' + villain.weakness);
console.log('Lets get started... What do you want to happen ?');
console.log(myHero.name + ' eats ');
console.log(myHero.name + ' attacks ' + villain.name);
console.log(villain.name + ' attacks ' + myHero.name);

prompt.start();
var answer1 = prompt.get(['answer'], function (err, result) {
  console.log('You have chosen  :');
  console.log(result.answer);
});

if(answer1 === "captain bark eats"){
  myHero.eat();
  console.log(myHero.health);
}

