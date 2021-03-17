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

/// calculate the total cost of products

const allProducts = [...document.querySelectorAll(".product")];
const getSum = () => {
  let sum = 0;
  allProducts.forEach((product, i) => {
    const productIndex = document.getElementById([i + 1]);
    const productQuantity = productIndex.querySelector("select").value;
    const productPrice = productIndex.querySelector("p").innerText;
    cost = productPrice * productQuantity;
    sum += cost;
  });
  return sum;
};

let fundsString = documet.getElementById("remaining").querySelector("span");
const number = fundsString.innerText.match(/\d+/g);
let budget = number[0];
const tooPoor = documet.createElement("div");
tooPoor.innerHTML = `You are too poor to buy all that stuff`;
tooPoor.classList.add("error");
const remaining = docume.getElementById("remaining");

