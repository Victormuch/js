/**
 * Default sequence- top to bottom and left to right
 *
 * Selection- we can choose to run certain codes and not others
 * Repetition- we can choose to run certain codes untill a certain condition is met
 */

//1. Selection using if statement
let favoriteNumber = 32;
if (favoriteNumber >= 10) {
  // evaluating favoriteNumber >= 10 returns true
  favoriteNumber += 10;
}
console.log(favoriteNumber);

const age = 22;

if (age >= 18) {
  console.log("I can vote");
} else {
  console.log("I cannot vote");
}

//ternary operator

const user = "tm";
const username = "John";

if (user === "Student") {
  console.log("Student logged in");
} else if (user === "tm") {
  console.log("TM logged in");
} else if (user === "pod-leader") {
  console.log("Pod lead logged in");
} else {
  console.log("User not found");
}
// selection using switch statement
switch (user) {
  case "Student":
    console.log("Student logged in");
    break;
  case "tm":
    console.log("TM logged in");
    break;
  case "pod-leader":
    console.log("Pod lead logged in");
}

// Repetition using while loop

// infinity loop
// can be terminated using ctrl + c
// while (true) {
// console.log('Evecution is happening');
//}

//Natural terminating

let count = 0;
while (count < 5) {
  console.log(`Count ${count}`);

  count += 1;
}
console.log(count);

// 4. repetition using the do/while
// will always run at least once

let countTwo = 9;
do {
  console.log(`Count two ${countTwo}`);
  countTwo++;
} while (countTwo < 5);

console.log(countTwo);

//  EXTRA WORK....!!!!!
const eatUgali = true
if (eatUgali){
  console.log('Can sleep')
}