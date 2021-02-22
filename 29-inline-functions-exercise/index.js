/* ================ */
/* INLINE FUNCTIONS */
/* ================ */

/**
 * Exercise 1
 *
 * create an inline function {reverseArray} that takes array as a param
 * and return reversed array. If you don't pass any param,
 * use default value "[]", is you pass any other type than array
 * return a string "Please, pass correct type".
 */
const reverseArray = function (array = []) {
  if (Array.isArray(array)) {
    return array.reverse();
  } else {
    return `Please, pass correct type`;
  }
};
/**
 * Exercise 2
 *
 * create an inline function {nextOddNum} that takes number as a param
 * and return next odd number.
 */
const nextOddNum = function (num) {
  if (num % 2 === 0) {
    return num + 1;
  } else {
    return num + 2;
  }
};
console.log(nextOddNum(4));
/**
 * Exercise 3
 *
 * create an inline function {isLessThan100} which should take
 * 2 numbers as a param.
 * Given two numbers, return true if the sum of both numbers is
 * less than 100. Otherwise return false.
 */
const isLessThan100 = function (num1, num2) {
  if (num1 + num2 < 100) {
    return true;
  } else {
    return false;
  }
};
console.log(isLessThan100(50, 439));
/**
 * Exercise 4
 * create an inline function {incrementBy5} which takes
 * a number as a param, add 5 and return the result.
 */

const incrementBy5 = function (num) {
  return num + 5;
};

/**
 * Exercise 5
 * create a function {incrementAllBy5} which takes array
 * of numbers as a first param and a incrementor function as a second param.
 * Then apply incrementor function to each element in your array and
 * return the result
 */
const incrementAllBy5 = function (arr, incrementBy5) {
  let newArr = [];
  newArr = arr.map(incrementBy5);
  return newArr;
};
console.log(incrementAllBy5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], incrementBy5));
