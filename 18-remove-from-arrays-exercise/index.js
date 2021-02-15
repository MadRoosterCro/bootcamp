/**
 * create an array {carBrands}
 * and assign to it ["Mercedes", "Volvo", "BMW", "Citroen", "Reno", "Vauxhall"]
 */

const carBrands = ["Mercedes", "Volvo", "BMW", "Citroen", "Reno", "Vauxhall"];

/**
 * Exercise 1
 *
 * remove the last element from the {carBrands} array
 *
 * * PS: console.log() the result to see the difference
 */

carBrands.splice(5, 1);
console.log(carBrands);
/**
 * Exercise 2
 *
 * remove the first element from the {carBrands} array
 *
 * * PS: console.log() the result to see the difference
 */

carBrands.splice(0, 1);
console.log(carBrands);

/**
 * Exercise 3
 *
 * from {carBrands} remove BMW
 *
 * * PS: console.log() the result to see the difference
 */

carBrands.splice(2, 1);
console.log(carBrands);

/**
 * Exercise 4
 *
 * in {carBrands} replace Citroen with Rolls-Royce
 *
 * * PS: console.log() the result to see the difference
 */

 carBrands.splice(2, 1, "Rolls-Royce");
 console.log(carBrands);