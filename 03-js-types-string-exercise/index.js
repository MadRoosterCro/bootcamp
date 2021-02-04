/**
 * Exercise 1
 * 
 * create a function "greetGenerator" which takes 2 params
 * first - greeting, second - name and return it as one string
 * separated with space(" ")
 */
const greetGenerator = (greeting, name) => greeting + " " + name;
/**
 * Exercise 2
 * 
 * create a function "convertToLowerCase" which takes a capitalized string
 * as a param, convert to lowercase string and return it.
 */
const convertToLowerCase = (UpperCase) => UpperCase.toLowerCase();
/**
 * Exercise 3
 * 
 * create a function "convertToUpperCase" which takes a lowercase string
 * for example('kitten') as a param, convert to uppercase string('KITTEN') and return it.
 */
const convertToUpperCase = (LowerCase) => LowerCase.toUpperCase();
/**
 * Exercise 4
 * create a function 'getCharByIndex' that takes a string and a character position
 * as a params and return a character from your string that is in selected position
 */
const getCharByIndex = (string, charIndex) => string[charIndex];