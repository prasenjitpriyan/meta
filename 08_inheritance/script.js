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