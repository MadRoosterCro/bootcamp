// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require(`readline-sync`);
/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */
name = readlineSync.question(`What is your name?`);
//===== DO NOT TOUCH THIS BLOCK =====
console.log(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");
//===================================

/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 */
const selectSymbol = () => {
  const symbol = readlineSync.question(`Please pick a symbol +, -, *, /`);
  if (symbol === "+" || symbol === "-" || symbol === "*" || symbol === "/") {
    return symbol;
  } else {
    console.log(`please pick a correct symbol`);
    selectSymbol();
  }
};
const selectedSymbol = selectSymbol();
/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
const pickANumber = (first) => {
    const selectedNumber = parseInt(readlineSync.question(`Please pick a ${first} number: `));
      
    if(Number.isInteger(selectedNumber)) {
      return selectedNumber;
      
    }
    else {
      console.log("Please enter a valid number")
      pickANumber(first);
    }
  }
  const number1 = pickANumber("first");
/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
const number2 = pickANumber("second");
/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the 
 */
let result = eval(number1+selectedSymbol+number2);

console.log("=====================");
console.log(`Here you go, the result is ${result}`);
