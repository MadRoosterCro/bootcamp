// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */
const clickTheButton = () => {
  const button = document.querySelector(".click button");
  button.addEventListener("click", () => {
    console.log("You have clicked your mouse!");
  });
};
/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */
const hoverOver = () => {
  const anchor = document.querySelector(".mouseover a");
  anchor.addEventListener("mouseover", () => {
    console.log("I wish there was a kitten here :(");
  });
};
/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */
const handleLeave = () => {
  const anchor = document.querySelector(".mouseover a");
  anchor.addEventListener("mouseout", () => {
    console.log("Come back smol kitten!");
  });
};
/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */
const focusOnMe = () => {
  const input = document.querySelector(".input input");
  input.addEventListener("focus", () => {
    console.log("Focus on this!");
  });
};
/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */
const clickElsewhere = () => {
  const input = document.querySelector(".input input");
  input.addEventListener("blur", () => {
    console.log("Your lack of focus is disturbing.");
  });
};
/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */
const pressAKey = () => {
  const input = document.querySelector(".input input");
  input.addEventListener("keydown", () => {
    console.log("You pressed a key!");
  });
};
/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
const releaseAKey = () => {
  const input = document.querySelector(".input input");
  input.addEventListener("keyup", () => {
    console.log("You released a key, do it again.");
  });
};
/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
const inputToUpperCase = () => {
  const input = document.querySelector(".input input");
  input.addEventListener("keyup", () => {
    input.value = input.value.toUpperCase();
  });
};
/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */
const handleSelectChange = () => {
  const optionSelected = document.querySelector(".select #items");
  optionSelected.addEventListener("change", () => {
    console.log(optionSelected.value);
  });
};
/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */
const submitFormHandler = () => {
  const formInputs = {};
  const form = document.querySelector("form");
  const name = document.querySelector("form").elements["firstName"];
  const surname = document.querySelector("form").elements["lastName"];
  formInputs.firstName = name.value;
  formInputs.lastName = surname.value;
  console.log(formInputs);
};
/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */
const handleScroll = () => {
  window.addEventListener("scroll", () => {
    console.log(scrollY);
  });
};
