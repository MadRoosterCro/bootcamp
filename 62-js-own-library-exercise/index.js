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
