/**
 * Exercise 1
 *
 * create an event listener which will show
 * a popup(add class "open" to "popup")
 * when you double click on ".trigger"
 */
const popup = document.querySelector(".popup");
const trigger = document.querySelector(".trigger");
trigger.addEventListener("dblclick", () => {
  popup.classList.add("open");
});

/**
 * Exercise 2
 *
 * create an event listener which will toggle
 * zoom class on image when you double click on
 * image container(".img")
 */
const imgContainer = document.querySelector(".img");
const img = document.querySelector("img");
imgContainer.addEventListener("dblclick", () => {
  img.classList.toggle("zoom");
});

/**
 * Exercise 3
 *
 * create an event listener which will stop/start music player
 * when you switch tab/come back to the tab in the browser.
 *
 * NOTE: to test please interact with the page, and switch tabs
 */
const musicPlayer = document.querySelector("audio");

window.addEventListener("blur", () => {
  musicPlayer.pause();
});
window.addEventListener("focus", () => {
  musicPlayer.play();
});
