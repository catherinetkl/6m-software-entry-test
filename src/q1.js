/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Check if x and y are numeric, if not, return -1
    if (isNaN(x) || isNaN(y)) {
      return -1;
    }

    // Swap logic
    let temp = x;
    x = y;
    y = temp;

    // print the swapped values in the console
    console.log("Swapped values: x =", x, ", y =", y);
}

// Task 2: Invoke the function "swap"
swap(5, 10);

// Exporting swap function
module.exports = swap;
