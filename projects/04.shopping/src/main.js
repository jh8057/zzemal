"use strict";

const btn = document.querySelectorAll(".btn");

// Fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

// create HTML list item from the given data item
function createHTMLString(item) {
  return `
  <li class="item">
    <img src="${item.image}" alt="item__thumnail" />
    <span class="item__description">${item.type},${item.gender},${item.size}</span>
  </li>
  `;
}

// using fucniton displayItems()
function onButtonClick(e, items) {
  const key = e.target.dataset.key;
  const value = e.target.dataset.value;
  if (key == null || value == null) return;
  let filtered = items.filter((item) => item[key] === value);
  displayItems(filtered);
}

// using classList
function onButtonClick2(e) {
  const key = e.target.dataset.key;
  const value = e.target.dataset.value;
  if (key == null || value == null) return;
  UpdateItems(value);
}

// Check the value includes in innerHTML
function UpdateItems(value) {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    if (item.innerHTML.includes(value)) {
      item.classList.remove("invisible");
    } else {
      item.classList.add("invisible");
    }
  });
}

function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => displayItems(items));
  // buttons.addEventListener("click", (e) => onButtonClick(e,items));
  buttons.addEventListener("click", (e) => onButtonClick2(e));
}

// init function
function init() {
  loadItems()
    .then((items) => {
      displayItems(items);
      setEventListeners(items);
    })
    .catch(console.log);
}
init();
