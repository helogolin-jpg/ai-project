// Futures switch: show one future at a time.
// Without JavaScript, both futures stay visible side by side.
const switcher = document.querySelector(".futures-switch");
const buttons = switcher.querySelectorAll("button");
const futures = document.querySelectorAll(".future");

document.documentElement.classList.add("js");
switcher.hidden = false;

function showFuture(id) {
  futures.forEach((future) => {
    future.hidden = future.id !== id;
  });
  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.future === id));
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => showFuture(button.dataset.future));
});

showFuture("takeover");
