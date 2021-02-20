/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */
function logProperties(user) {
  for (let property in user) {
    console.log("Property name: " + property);
  }
}

/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */
function getAllValues(store) {
  let items = [];
  for (let item in store) {
    items.push(store[item]);
  }
  return items;
}

/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */

function getAllValuesAsString(someObject) {
  let string = "";
  for (let line in someObject) {
    string = string + someObject[line] + " ";
  }
  return string.trim();
}
const testObject = {
  a: 0,
  b: 2,
  c: "something",
  d: "another something",
};
console.log(getAllValuesAsString(testObject));

/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * "{key}: {value}"
 */

function propertyValueString(object) {
  let anotherObject = {};
  for (let keyValuePair in object) {
    anotherObject = keyValuePair + ": " + object[keyValuePair];
    console.log(anotherObject);
  }
}
