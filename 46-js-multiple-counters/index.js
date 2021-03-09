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
  let cunter = 0;
  divForTimer.classList.add(`timer`, `timer_${number}`);
  divForTimer.innerHTML = `
  <div class = "remove"></div>
  <h3>0 <span>00</span></h3>
  <div class="btn">
    <button class="reset">Reset</button>
    <button class="stop">Stop</button>
  </div>
</div>
`

const removeButton = divForTimer.querySelector(`.remove`);
const timerSpan = divForTimer.querySelector(`.h3`);
const resetButton = divForTimer.querySelector(`.reset`);
const stopButton = divForTimer.querySelector(`.stop`);

}