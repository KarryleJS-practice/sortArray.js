// Create two (2) Single Dimensional Array containing the following values: (use prompt() function)
let numbers = prompt("24,65,21,5,9 32,42,80,57:").split(",").map(Number);
let names = prompt("Zenvo, Erica, Jordie, Alicia, Rendon:").split(",");


// Merge both arrays into a single array and log it to the console.
let mergedArray = numbers.concat(names);
console.log("Merged array:", mergedArray);

// Sort numbers numerically in reverse and log it to the console.
numbers.sort((a, b) => b - a); // Sort in descending order
console.log("Sorted numbers (descending):", numbers);

// Sort names alphabetically and log it to the console.
names.sort();
console.log("Sorted names (ascending):", names);
