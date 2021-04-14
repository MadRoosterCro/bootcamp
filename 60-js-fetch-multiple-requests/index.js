const resultEl = document.querySelector(".result");
const searchEl = document.querySelector("input");
const houseURL = "https://anapioficeandfire.com/api/houses/378";

// STORE YOUR SWORN MEMBERS IN {members}
let members = [];

// =============================

/**
 *
 * REQUIREMENTS:
 *
 * 1. I should be able to see all {swornMembers}
 * after the page has loaded.
 * 2. When I type a query inside the input it should only
 * display members whose name includes the query
 */

const fetchData = (url) => {
  const myResult = fetch(url).then((response) => response.json());
  return myResult;
};

const names = () =>
  fetchData(houseURL).then((results) => {
    swornMembers = results.swornMembers;
    swornMembers.forEach((member) => {
      fetchData(member).then((memberData) => {
        members.push({ name: `${memberData.name}`, url: `${memberdata.url}` });
        const resultList = document.createElement(`li`);
        resultList.innerHTML = `<p class="name">${memberData.name}</p>`;
        resultEl.appendChild(resultList);
      });
    });
  });

/**
 * HTML for each member:
 * <li>
 *     <p class="name">Bilbo Baggins</p>
 *     <p class="life">1777 – 1888</p>
 *     <p class="gender"><strong>Gender: </strong>Male</p>
 *     <p class="culture"><strong>Culture: </strong>Hobbit</p>
 * </li>
 */
