/**
 * Exercise 1
 *
 * create an object {user}, which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */

const user = {
    firstName: `Dario`,
    lastName: `Car`,
    age: 30,
}

console.log(user);
/**
 * Exercise 2
 *
 * create an object {allTypes} with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */
const allTypes = {
    string: "Something",
    number: 1,
    array: [1, 2, 3, 4],
    object: {
        cityName: "London",
        country: "UK"
    },
    function: (a, b) => (a +b),
    boolean: true,
}
console.log(allTypes);

/**
 * Exercise 3
 *
 * create a function {createMovieObject} which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */
const createMovieObject = (name, rating, ticketPrice) => { 
    const movie = {
        name: name,
        rating: rating,
        ticketPrice: ticketPrice
    } 
    return movie;
} 
console.log(createMovieObject("LOTR", 10, 5));