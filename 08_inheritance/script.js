let bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
}

let eagle = Object.create(bird)
console.log(eagle);
console.log(eagle.hasWings);
console.log(eagle.canFly);
console.log(eagle.hasFeathers);

let penguin = Object.create(bird);
penguin.canFly = false;
console.log(penguin);
console.log(penguin.hasWings);
console.log(penguin.canFly);
console.log(penguin.hasFeathers);

let parrot = Object.create(bird)
console.log(parrot);
console.log(parrot.hasWings);
console.log(parrot.canFly);
console.log(parrot.hasFeathers);


// ----------------------------------------------------------------

// Parent object
const person = {
  name: 'John',
  age: 30,
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  }
};

// Child object inheriting from the parent object
const employee = Object.create(person);
employee.jobTitle = 'Engineer';

employee.greet();
console.log(employee.jobTitle);

// -------------------------------------------------------

// Class Inheriting from the parent object
class Game {
  constructor(name, maxNumberOfPlayers) {
    this.name = name;
    this.maxNumberOfPlayers = maxNumberOfPlayers;
  }
}

// Child class inheriting from the Game class
class Videogame extends Game {
  constructor(name, maxNumberOfPlayers, platform) {
    super(name, maxNumberOfPlayers);
    this.platform = platform;
  }
}

let game = new Game('Monopoly', 8);
let videogame = new Videogame('UNO', 10, 'Nintendo Switch');

console.log(game.name);
console.log(videogame.name);
console.log(videogame.platform);

// ---- Examples --------------------------------
class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log('Lights on?', this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log('High speed status:', this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log('Lights are 100% operational.');
  }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.