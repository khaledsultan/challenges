console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  // e.preventDefault();
  const message = document.createElement("li");
  message.classList.add("toast-container__message");
  toastContainer.append(message);
  message.innerHTML= "I'm a toast message."


});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  const cardContainer = document.querySelector('[data-js="toast-container"]');
  cardContainer.innerHTML = "";
});
3