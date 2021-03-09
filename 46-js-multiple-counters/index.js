const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;

/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */
const createTimerEl = (number) => {
  const divForTimer = document.createElement("div");
  let counter = 0;
  divForTimer.classList.add("timer", `timer_${number}`);
  divForTimer.innerHTML = `
      <div class="remove"></div>
    <h3>0 <span>00</span></h3>
    <div class="btn">
      <button class="reset">Reset</button>
      <button class="stop">Stop</button>
    </div>
    `;

  const removeButton = divForTimer.querySelector(".remove");
  const timerSpan = divForTimer.querySelector("h3");
  const resetButton = divForTimer.querySelector(".reset");
  const stopButton = divForTimer.querySelector(".stop");

  const timerInterval = setInterval(() => {
    const seconds = Math.floor(counter / 100);
    const milliseconds = counter % 100;
    timerSpan.innerHTML = `${seconds}<span>${milliseconds}</span>`;
    counter++;
  }, 10);
  removeButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    divForTimer.remove();
  });
  resetButton.addEventListener("click", () => (counter = 0));

  stopButton.addEventListener("click", () => clearInterval(timerInterval));

  return divForTimer;
};

addCounterEl.addEventListener("click", () => {
  const numberOfTimersAdded = document.querySelectorAll(".timer").length;

  if (numberOfTimersAdded < 5) {
    timersCount++;
    const newTimer = createTimerEl(timersCount);
    timersContainerEl.appendChild(newTimer);
  }
});

//
// const createTimerEl = (number) => {
//   const divForTimer = document.createElement("div");
//   let counter = 0;
//   divForTimer.classList.add(`timer`, `timer_${number}`);
//   divForTimer.innerHTML = `
//   <div class = "remove"></div>
//   <h3>0 <span>00</span></h3>
//   <div class="btn">
//     <button class="reset">Reset</button>
//     <button class="stop">Stop</button>
//   </div>
// </div>
// `
//
// const removeButton = divForTimer.querySelector(`.remove`);
// const timerSpan = divForTimer.querySelector(`.h3`);
// const resetButton = divForTimer.querySelector(`.reset`);
// const stopButton = divForTimer.querySelector(`.stop`);

// const timerInterval = setInterval(() => {
//     const seconds = Math.floor(countr/100);
//     const milliseconds = counter % 100;
//     timerSpan.innerHTML = `${seconds}<span>${milliseconds}</span>`;
//     counter++;
// }, 10);

// removeButton.addEventListener("click", () => {
//     clearInterval(timerInterval);
//     divForTimer.remove();
// });
// resetButton.addEventListener("click", () => counter = 0);
// stopButton.addEventListener("click", () => {
//     clearInterval(timerInterval);
//     return divForTimer;
// });
