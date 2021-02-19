/**
 * Exercise 1
 *
 * Create an object {user} and add properties "firstName" and "lastName".
 */
let user = {
    firstName: "Dario",
    lastName: "Car"
}

/**
 * Exercise 2
 *
 * Create an object {userRead} and add properties "books" and "newspapers".
 * Both should be arrays with strings.
 */
const userRead = {
    books: ["book1", "book2", "book3"],
    newspapers: ["paper1", "paper2", "paper3"]
}
/**
 * Exercise 3
 *
 * extend {user} object with all properties from {userRead} object
 *
 * Note: if I modify {userRead} it shouldn't change {user} object
 *
 * Result should be:
 * user = {
 *   firstName: '',
 *   lastName: '',
 *   books: [],
 *   newspapers: []
 * }
 */
user = {
    ...user,
    ...userRead
}
console.log(user);
/**
 * Exercise 4
 *
 * Create an object {userWatch} and add properties "tvShows" and "movies".
 * Both should be arrays with strings.
 */
const userWatch = {
    tvShows: ["show1", "show2", "show3"],
    movies: ["movie1", "movie2", "movie3"]
}
/**
 * Exercise 5
 *
 * extend {user} object with new property "userWatch" and assign {userWatch} object
 * as a value.
 *
 * Note: if I modify {userWatch} it should change {user} object
 *
 * Result should be:
 * user = {
 *   firstName: '',
 *   lastName: '',
 *   books: [],
 *   newspapers: [],
 *   userWatch: {
 *     tvShows: [],
 *     movies: []
 *   }
 * }
 */
user = {
    ...user,
    userWatch
}
console.log(user);