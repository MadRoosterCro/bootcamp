// **** DO NOT TOUCH THIS CODE ****
// ============================

const user = {};

// ============================

/**
 * Exercise 1
 *
 * add property "firstName" to "user" and assign any name
 */

user.firstName = "Dario"

/**
 * Exercise 2
 *
 * add property "lastName" to "user" and assign any last name
 */
user.lastName = "Car"
/**
 * Exercise 3
 * create a function "addANewProperty" which takes
 * 2 params, first - property name and second - property value
 * and set a new property for 'user' object
 */

const addANewProperty = (propertyName, propertyValue) => {
    return user[propertyName] = propertyValue;
}
addANewProperty("city", "Zagreb");
console.log(user);