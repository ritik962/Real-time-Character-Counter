const textAreaEl = document.querySelector("#textarea");

const totalCounterEl = document.querySelector("#total-counter");

const remainingCounterEl = document.querySelector("#remaining-counter");

updateCount();

function updateCount() {
  const character = textAreaEl.value.length;
  totalCounterEl.innerText = character;
  remainingCounterEl.innerText =
    textAreaEl.getAttribute("maxlength") - character;
}

textAreaEl.addEventListener("keyup", updateCount);
