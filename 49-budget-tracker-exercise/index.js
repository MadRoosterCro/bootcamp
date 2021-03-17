const productsContainer = document.querySelector("#products");

const populateOptions = (options) => {
  let allOptions = "";
  for (let i = 0; i < options + 1; i++) {
    optionString = "<option value=" + i + ">" + i + "</option>";
    allOptions = allOptions + optionString;
  }
  return allOptions;
};

///create product elements

products.forEach((product) => {
  const divForProducts = document.createElement("div");
  divForProducts.id = product.id;
  divForProducts.classList.add("product");
  const moreOptions = populateOptions(product.max_quantity);

  divForProducts.innerHTML = `<img src="${product.img}" />
  <h3>${product.name}</h3>
  <p>${product.price}</p>
  <select>
      ${moreOptions}
  </select>`;

  productsContainer.appendChild(divForProducts);
});

/// calculate the total cost of products(cart)

const allProducts = [...document.querySelectorAll(".product")];

const total = () => {
  let sum = 0;
  allProducts.forEach((product, i) => {
    const productIndex = document.getElementById([i + 1]);
    const productQuantity = productIndex.querySelector("select").value;
    const productPrice = productIndex.querySelector("p").innerText;
    cost = productQuantity* productPrice;
    sum += cost;
  });
  return sum;
};

let fundsString = document.getElementById("remaining").querySelector("span");

const number = fundsString.innerText.match(/\d+/g);
let budget = number[0];

/// if you are too poor to afford stuff

const tooPoor = document.createElement("div");
tooPoor.innerHTML = `You are too poor to buy all that stuff`;
tooPoor.classList.add("error");
const remaining = document.getElementById("remaining");

/// show current situatin (in cart)

let currentSum;
document.querySelectorAll("select").forEach((option) => {
  let latestValue = option.value;
  console.log(latestValue);
  option.addEventListener("change", (event) => {
    currentSum = total();
    let budgetDep = (budget - currentSum).toFixed(2);

    if (budget < currentSum) {
      cart.appendChild(tooPoor);

      setTimeout(() => {
        tooPoor.remove();
      }, 2000);
        
      option.value = latestValue;
      currentSum = total();
    } else {
      fundsString.innerHTML = "£" + budgetDep;
    }
  
  });
});