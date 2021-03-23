// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */

const createDOMElement = (tagName) => document.createElement(tagName);

/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */

const addPTag = text => {
  const body = document.querySelector("body");
  const pTag = createDOMElement("p");
  pTag.innerText = text;
  body.appendChild(pTag);
};

/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments. It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */

const addElementWithClass = (tag_name, text, class_name) => {
  const body = document.querySelector("body");
  const newTag = createDOMElement(tag_name);
  newTag.classList.add(class_name);
  newTag.innerText = text;
  body.appendChild(newTag);
};

/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */

const addElementWithMultipleClasses = (tag_name, text, classes) => {
  const body = document.querySelector("body");
  const newTag = createDOMElement(tag_name);
  const everyClass = [...classes];
  everyClass.forEach((eachClass) => newTag.classList.add(eachClass));
  newTag.innerText = text;
  body.appendChild(newTag);
};

/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */

const buildAList = (listType, classOfEl, numberOfEl) => {
  const body = document.querySelector("body");
  const newList = document.createElement(listType);

  newList.classList.add(classOfEl);

  for (i = 0; i < numberOfEl; i++) {
    const newEl = createDOMElement("li");
    newEl.innerText = "Item " + i;
    newList.appendChild(newEl);
  }

  body.appendChild(newList);
};

/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */

const prependLiToList = (text, someClass) => {
  const list = document.querySelector(".list");
  const listItem = createDOMElement("li");
  listItem.innerText = text;
  listItem.classList.add(someClass);

  list.prepend(listItem);
};

/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */

const pushToSelectedPosition = (text, someClass, position) => {
  let list = document.querySelector(".list");
  const listItem = createDOMElement("li");
  listItem.innerText = text;
  listItem.classList.add(someClass);
  const someArr = [...list.querySelectorAll("li")];
  someArr.splice(position, 0, listItem);
  someArr.forEach((Element) => list.appendChild(Element));
};

/**
 * Exercise 8
 *
 * create a function {deleteChildrenElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */

const deleteSelectedElements = (parent, childRemoved) => {
  parentList = document.querySelector(parent);
  const children = parentList.querySelectorAll(childRemoved);
  children.forEach((child) => child.remove());
};
