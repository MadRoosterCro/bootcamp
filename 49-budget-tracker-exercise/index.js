const productsContainer = document.querySelector("#products");

const populateChoices = (choices) => {
  let allChoices;
  for (let i = 0; i < choices + 1; i++) {
    choiceString = "<option value=" + i + ">" + i + "</option>";
    allChoices = allChoices + choiceString;
  }
  return allChoices;
};
/// create product elements

produtcs.forEach((product) => {
  const divForProducts = document.createElement("div");
  divForProducts.id = product.id;
  divForProducts.classList.add("product");
  const moreThanOne = populateChoices(product.max_quantity);
  divForProducts.innerHTML = `<img src="${product.img}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <select>${moreThanOne}</select>`;
  const maxChoices = products.max_quantity * "<option></option>";
  productsContainer.appendChild(divForProducts);
});


