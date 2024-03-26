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

let penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log(penguin1);
console.log(penguin1.hasWings);
console.log(penguin1.canFly);
console.log(penguin1.hasFeathers);

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

// -- Example - 2 --------------------------------------------

class StationaryBike {
  constructor(position, gears) {
    this.position = position
    this.gears = gears
  }
}
class Treadmill {
  constructor(position, modes) {
    this.position = position
    this.modes = modes
  }
}
class Gym {
  constructor(openHrs, stationaryBikePos, treadmillPos) {
    this.openHrs = openHrs
    this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
    this.treadmill = new Treadmill(treadmillPos, 5)
  }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")
console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //

// --- Example-3 -----------------------------------

class Animal {
  constructor(color = 'yellow', energy = 100) {
    this.color = color;
    this.energy = energy;
  }
  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log('Energy is decreasing, currently at:', this.energy)
    } else if (this.energy == 0) {
      this.sleep();
    }
  }
  sleep() {
    this.energy += 20;
    console.log('Energy is increasing, currently at:', this.energy)
  }
  getColor() {
    console.log(this.color)
  }
}
class Cat extends Animal {
  constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canClimbTrees = canClimbTrees;
    this.canJumpHigh = canJumpHigh;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(sound = 'chirp', canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound() {
    console.log(this.sound);
  }
}
class HouseCat extends Cat {
  constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    if (this.canTalk) {
      console.log("I'm a talking parrot!");
    }
  }
}

var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

polly.makeSound(); // 'chirp', 'I'm a talking parrot!'
fiji.makeSound(); // 'chirp'

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180


var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!

// -- Example-4 --------------------------------

// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name
    this.age = age
    this.energy = energy
  }
  sleep() {
    console.log(`I gained ${this.energy + 10} energy, cause I'm sleeping.`)
  }
  doSomethingFun() {
    console.log(`I still have ${this.energy - 10} energy let's keep dancing!`)
  }
}

// Task 2: Code a Worker class
class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(xp, hourlyWage);
    this.name = name;
    this.age = age;
    this.energy = energy;
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  goToWork() {
    console.log(`{this.xp + 10} points`)
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  const inter1 = new Worker('Bob', 21, 110, 0, 10)
  inter1.goToWork()
  return inter1
}
console.log(intern())

// Task 4: Code a manager object, methods
function manager() {
  const manager1 = new Worker('Alice', 30, 120, 100, 30)
  manager1.doSomethingFun()
  return manager1
}
console.log(manager())