const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {fetchData} which takes
 * a URL as an argument and sends a GET request.
 * When you get a response, return an array of facts.
 */
const fetchData = async (url = `https://cat-fact.herokuapp.com/facts`) => {
  const data = await fetch(url).then((response) => response.json);
  // console.log(data)
  const facts = (Array.isArray(data) ? data : data.all).map(
    (fact) => fact.text
  );
  return facts;
};

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */
