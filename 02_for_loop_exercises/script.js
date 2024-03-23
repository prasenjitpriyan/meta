//Get the sum of two arrays…actually the sum of all their elements.

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let arr_3 = arr_1.concat(arr_2);
let sum = 0

for (let i = 0; i < arr_3.length; i++) {
  sum += arr_3[i];
  //console.log(sum);
}

// Using a for loop print all even numbers up to and including n. Don’t include 0.

for (let i = 1; i <= 22; i++) {
  if (i % 2 == 0) {
    //console.log(i, "even number");
  } else {
    //console.log(i, "odd number");
  }
}

// Using a for loop output the elements in reverse order

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
let reversedArray = []
for (let i = arr.length - 1; i >= 0; i--) {
  const valueAtIndex = arr[i];
  reversedArray.push(valueAtIndex)
}
//console.log(reversedArray);

//Given two arrays of integers. Add up each element in the same position and create a new array containing the sum of each pair. Assume both arrays are of the same length.

let arr_4 = [4, 6, 7];
let arr_5 = [8, 1, 9];
const add = [];

for (let i = 0; i < arr_4.length; i++) {
  add.push(arr_4[i] + arr_5[i]);
}
console.log(add);