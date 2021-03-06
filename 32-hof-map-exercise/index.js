// ============================================
// ALL IMPLEMENTATIONS SHOULD BE WITH {map} METHOD
// ============================================

/**
 * Exercise 1
 *
 * create an arrow function {convertToPositive} which takes
 * array of numbers, convert all negatives to positives and return
 * a new array.
 */
const convertToPositive = (numbers) => {
    const newNumbers = numbers.map(numbers => {
        if(numbers < 0) {
            return numbers*(-1)
        } else {
            return numbers;
        }
    })
    return newNumbers;
} 
/**
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', age: 26},
 *   {name: 'John', age: 25}
 * ]) will return ['Alex', 'John']
 */
const getAllNames = users => {
    const userArr = users.map(user => user.name);
    return userArr;
}
/**
 * Exercise 3
 *
 * create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */
const greetAll = names => {
    const newArr = names.map(name => `Hi, ${name}!`);
    return newArr;
}
/**
 * Exercise 4
 *
 * create a function {multiplyAllNumbers} that takes an array as a param
 * and multiply all numbers inside array by 5 and return the whole array
 * with multiplied numbers
 */
const multiplyAllNumbers = array => {
    const newArr = array.map(number => {
        if (typeof number === "number") {
            return number*5;
        } else {
            return number;
        }
    })
    return newArr;
}