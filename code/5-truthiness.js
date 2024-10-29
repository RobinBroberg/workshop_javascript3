// Truthy and falsy values help in conditional statements. A truthy value is a value
// that is considered true in Boolean context.

// Task 1: Create an array called `values` containing the following values:
// 0, "hello", null, undefined, false, "false", -1 and "JavaScript".

const values = [0, "hello", null, undefined, false, "false", -1, "JavaScript"];

// Task 2: Write a function called `checkTruthiness` that takes a value and
// logs whether it is truthy or falsy.

function checkTruthiness(value) {
  if (value) {
    console.log("truthy");
  } else {
    console.log("falsy");
  }
}

// Task 3: Loop through the `values` array using forEach and call `checkTruthiness` on each value.

values.forEach((value) => checkTruthiness(value));

// Task 4. Loop through the `values` array using a for-loop and call `checkTruthiness` on each value.

for (let i = 0; i < values.length; i++) {
  checkTruthiness(values[i]);
}

// Task 5. Loop through the `values` array using a while-loop and call `checkTruthiness` on each value.
let i = 0;
while (i < values.length) {
  checkTruthiness(values[i]);
  i++;
}
