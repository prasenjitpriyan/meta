class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  play(status) {
    console.log(`${this.name} is playing ${status}`)
  }
}

const person1 = new Person("John", 35); // Create actual person object
const person2 = new Person("Prasenjit", 35); // Create actual person object

console.log(person1);
console.log(person2);

person1.play("well")
person2.play("bad")