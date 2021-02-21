/* ===================================== */
/* For these exercises use "for of" loop */
/* ===================================== */

/**
 * Exercise 1
 *
 * create a function {getIntegersOnly} which takes an array
 * as a param, get all integers from this array and return
 * a new array with these integers. If there is no integers it should return
 * empty array.
 */
const getIntegersOnly = (intArr) => {
  let someArray = []
  for (let int of intArr) {
    let isAnInt = Number.isInteger(int);
    if (isAnInt) {
        someArray.push(int);
    }
    
  }
  return someArray;
}

/**
 * Exercise 2
 * create a function {getEvenNumbers}, which takes an array of integers
 * and returns a new array with even numbers only, if there is no even
 * integers it should return an empty array
 */

const getEvenNumbers = (arrayOfInt) => {
  let newArray = []
  for (let number of arrayOfInt) {
    if (number % 2 === 0 ) {
      newArray.push(number);
    }
    
  }
  return newArray;
}

/**
 * Exercise 3
 *
 * create a function {getEvenNumbersFromMixedArray},
 * which takes an array of values with different types and returns
 * a new array with even numbers only, if there is no even integers it
 * should return an empty array
 */

 const getEvenNumbersFromMixedArray = (arrayOfValues) => {
  let newArray = [];
  for (let value of arrayOfValues) {
    let isAnInt = Number.isInteger(value)
    if (isAnInt && value % 2 === 0) {
      newArray.push(value);
    }
  }
  return newArray;
 }

/**
 * Exercise 4
 * create a function {getOddNumbers}, which takes an array of integers
 * and returns a new array with odd numbers only, if there is no odd
 * integers it should return an empty array
 */

const getOddNumbers = (arrayOfInt) => {
  let newArr = [];
  for (oddNum of arrayOfInt) {
    let isAnInt = Number.isInteger (oddNum)
    if (isAnInt && oddNum % 2 !== 0) {
      newArr.push (oddNum);
    }
  }
  return newArr;
}

/**
 * Exercise 5
 * create a function {evenOddTransform} which takes
 * array of integers as a param. Take each integer
 * and if it's odd add 1, if it's even subtract 1
 *
 * If your param is [1,2,3,4,5] the result should be
 * [2,1,4,3,6]
 */

 const evenOddTransform = (arrayOfInt) => {
  let newArr = [];
  for (let int of arrayOfInt) {
    if (int % 2 === 0) {
      int--;
      newArr.push(int);
    } else if (int % 2 !== 0) {
      int++;
      newArr.push(int);
    }
  }
  return newArr;
 }