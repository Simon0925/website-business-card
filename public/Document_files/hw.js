"use strict";

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function calculate(numbers) {
//   numbers.forEach((element, index) => {
//     let i = Math.floor(Math.random() * numbers.length);
//     let temp = numbers[index];
//     numbers[index] = numbers[i];
//     numbers[i] = temp;
//   });
//   console.log(numbers);
// }

// calculate(numbers);

// Task 46: Sum Pairs
// Write a function that takes an array of numbers and a target sum. Find all pairs of distinct elements in the array that sum up to the target.

const numbers = [1, 2, 3, 4, 5, 6];
const target = 8;

function calculate(n, t) {
  let result = [];
  for (let i = 0; i < n.length - 1; i++) {
    for (let j = 1; j < n.length; j++) {
      if (n[i] + n[j] === t) {
        result.push([n[i], n[j]]);
      }
    }
  }
  console.log(result);
}
calculate(numbers, target);

////////////////////////////////

const num = [14, 7, 22, 45, 9, 30];
const targetElement = 22;

function findElementIndex(arr) {}

// Output
const index = findElementIndex(num, targetElement);
console.log(index);
