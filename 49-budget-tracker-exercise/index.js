const productsContainer = document.querySelector("#products");

const populateChoices = (choices) => {
  let allChoices;
  for (let i = 0; i < choices + 1; i++) {
    choiceString = "<choice value=" + i + ">" + i + "</choice>";
    allChoices = allChoices + choiceString;
  }
  return allChoices;
};
/// create product elements

