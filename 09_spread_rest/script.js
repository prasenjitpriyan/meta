// Join arrays using the rest operator

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries]
console.log(fruitsAndBerries);

// Join objects using the rest operator

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = { ...flying, ...car }
console.log(flyingCar)

// Add new members to arrays without using the push() method

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// Convert a string to an array using the spread operator

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars);

// Copy either an object or an array into a separate one
const car1 = {
  speed: 200,
  color: 'yellow'
}
const car2 = { ...car1 }

car1.speed = 201

console.log(car1.speed, car2.speed)

//You can copy an array into a completely separate array
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)


function count(...basket) {
  console.log(basket.length)
}

count(10, 9, 8, 7, 6);



