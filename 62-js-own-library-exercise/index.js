const createATag = (tagName, className, id) => {
  const newTag = document.createElement(tagName);
  if (className) {
    newTag.classList.add(...className);
  }
  if (id) {
    newTag.id = id;
  }
  if (tagName) {
    return newTag;
  } else {
    null;
  }
};
