const createATag = (tagName, className, id) => {
  const newTag = document.createElement(tagName);
  if (tagName) {
    return newTag;
  }
  if (className) {
    newTag.classList.add(...className);
  }
  if (id) {
    newTag.id = id;
  } else {
    null;
  }
};

const createATagWithChildren = (tagName, className, id, children) => {
  const newTag = createATag(tagName, className, id);
  children.forEach((child) => {
    newTag.appendChild(child);
  });
  return newTag;
};

const addElement = (element, destination) => {
  const elementDestination = document.querySelector(destination);
  elementDestination.appendChild(element);
};

const getElement = (selector, all) => {
  if (all) {
    return document.querySelectorAll(selector);
  } else {
    return document.querySelector(selector);
  }
};
const removeElement = (selector, all) => {
  if (all) {
    document.querySelectorAll(selector).forEach((selected) => {
      selected.parentNode.removeChild(selected);
    });
  } else {
    document.querySelector(selector).remove();
  }
};
