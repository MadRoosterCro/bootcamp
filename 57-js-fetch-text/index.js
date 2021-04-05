const form = document.querySelector("form");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// url for testing: http://numbersapi.com/random

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {getResponse} which takes
 * URL as an argument and sends a GET request.
 * When you receive a response, render the
 * string in {.result} element
 */
const getResponse = () => {
  fetch(url)
    .then((response) => response.text())
    .then((fact) => {
      result.innerText = fact;
    });
};
form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  if (input.value !== ``) {
    getResponse(input.value);
  }
});

input.addEventListener(`fous`, (event) => {
  result.innerText = ``;
  input.value = ``;
});
/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. provide a URL in the input field and submit it
 * 2. see the body of the response in {.result} element
 * 3. focus on input, clearing my previous input and hiding {.result} element
 */
