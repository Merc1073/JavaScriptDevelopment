/*

    Spread operator: expands an iterable, such as a string or an array, into separate elements.

*/



let numbers = [1, 2, 3, 4, 5];

//not spread (output: NaN)
console.log(Math.max(numbers));

//spread (output: 5)
console.log(Math.max(...numbers));



//combining arrays
let fruits = ["apple", "orange", "banana"];
let vegetables = ["cucumber", "lettuce", "radish"];

let food = [...fruits, ...vegetables];

console.log(...fruits);
console.log(...vegetables);

console.log(...food);