const form = document.querySelector("form");
const result = document.querySelector(".result");
const input = document.querySelector("input");

// ================================

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve ./` to serve your index page

/**
 * Exercise 1
 *
 * create a function {getResponse} which takes
 * a URL as an argument and makes a GET request.
 * If the response {status} code is successful,
 * call a function which will render "Valid link! {Link}"
 * in {result} element, otherwise render
 * `Request failed with status code: {errorCode}`
 */

const getResponse = (url) => {
  const resultElement = document.createElement(`a`);
  fetch(url).then((response) => {
    if (response.ok && input.value !== ``) {
      result.classList.remove(`error`);
      result.classList.add(`succes`);
      resultElement.href = url;
      resultElement.target = `_blank`;
      resultElement.innerHTML = `Valid link! ${url}`;
      result.appendChild(resultElement);
    } else {
      result.classList.add(`error`);
      result.classList.remove(`success`);
      result.innerText = `Request failed with status code: ${response.status}`;
      console.log(result);
    }
  });
};

input.addEventListener(`focus`, (event) => {
  input.placeholder = ``;
  input.value = ``;
  result.innerText = ``;
});
input.addEventListener(`blur`, (event) => {
  input.placeholder = `Provide URL...`;
});
form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  url = input.value;
  getResponse(url);
});


/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. provide URL in input and submit my request
 * 2. if provided URL is a valid API URL, then I should see
 * a message with a link.
 * 3. When I click on a link, it should be opened in a new tab
 * 4. if provided URL is invalid API URL, then I should see
 * an error message in {result} with status code.
 * 5. When I focus on input, it should clear my input and hide
 * {result}
 */
