/**
 * Exercise 1
 * create a function {createAList}
 *
 * Requirements:
 * 1. create an unordered list with class "list" and add it to the DOM
 * 2. with 1 second interval add list item to ".list" element
 * 3. you should add only 5 list items.
 * 4. list item text should be "Item $"($ - position in the list)
 */
const createAList = () => {
  const body = document.querySelector("body");
  const newList = document.createElement("ul");
  newList.classList.add("list");

  for (let i = 0; i < 5; i++) {
    const listItem = document.createElement("li");
    listItem.innerText = "Item " + (i + 1);
    setTimeout(() => {
      newList.appendChild(listItem);
    }, 1000 * i);
  }

  body.appendChild(newList);
};
/**
 * Exercise 2
 *
 * create a function {styleElement}
 *
 * Requirements:
 * 1. select the third list item from "".myList"
 * 2. set background to "green" color
 * 3. set color to "white"
 * 4. set font size to 2em
 */
const styleElement = () => {
  const third = document.querySelector(".myList li:nth-child(3)");
  third.style.backgroundColor = "green";
  third.style.color = "white";
  third.style.fontSize = "2em";
};
/**
 * Exercise 3
 *
 * create a function {removeLastChild}
 * Requirements:
 * 1. select last element from the ".myList"
 * 2. wait 2 seconds and remove the element from the list
 */
const removeLastChild = () => {
  setTimeout(() => {
    document.querySelector(".myList li:last-child").remove();
  }, 2000);
};
/**
 * Exercise 4
 *
 * create a function {createAMessage} which takes a message as parameter
 *
 * Requirements:
 * 1. create p element with class "message"
 * 2. text should be your {message}
 * 2. add it to the DOM
 * 4. after 3s add class "visible"
 * 5. after another 3s add class "hide"
 * 6. after another 2s remove from DOM
 *
 * NOTE: check css file to see how we toggle styles
 * based on class "visible"
 */
const createAMessage = text => {
  const body = document.querySelector("body");
  const pTag = document.createElement("p");
  pTag.classList.add("message");
  pTag.innerText = text;
  body.appendChild(pTag);
  setTimeout(() => {
    pTag.classList.add("visible");
  }, 3000);
  setTimeout(() => {
    pTag.classList.add("hide");
  }, 6000);
  setTimeout(() => {
    pTag.remove();
  }, 8000);
};
