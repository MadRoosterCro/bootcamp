let step = 0;
let counter = 0;

/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */
const action = (symbol) => {
  const counterVal = document.querySelector(".counter_value");

  if (symbol === "+") {
    counter = counter + step;
    counterVal.innerText = parseInt(counter);
    return counter;
  } else if (symbol === "-") {
    counter = counter - step;
    counterVal.innerText = parseInt(counter);
    return counter;
  }
};
/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */

const stepButton = document.querySelector("form");
let stepInput = document.querySelector(".step_form input");
stepButton.addEventListener("submit", (event) => {
  event.preventDefault();
  step = parseInt(stepInput.value);
  document.querySelector(".inc .step_value").innerText = step;
  stepInput.value = 1;
});

/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */

const decrementButton = document.querySelector("#decrement");
decrementButton.addEventListener("click", () => {
  action("-");
});

/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */

const incrementButton = document.querySelector("#increment");
incrementButton.addEventListener("click", () => {
  action("+");
});

/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */

/// if decrement is clicked, it needs to stop increment first

const autoDecrement = document.querySelector("#auto_decrement");
let intervalID;

autoDecrement.addEventListener("click", () => {
  clearInterval(intervalID);
  intervalID = setInterval(() => {
    action("-");
  }, 1000);
});

/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */

const autoIncrement = document.querySelector("#auto_increment");
autoIncrement.addEventListener("click", () => {
  clearInterval(intervalID);
  intervalID = setInterval(() => {
    action("+");
  }, 1000);
});

/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */

const stopButton = document.querySelector("#stop_auto");
stopButton.addEventListener("click", () => {
  clearInterval(intervalID);
});
