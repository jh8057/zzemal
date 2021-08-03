"use strict";

const btn = document.querySelectorAll(".btn");
// const itemsul = document.querySelector(".items");

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

// init function
function init() {
  loadItems()
    .then((items) => {
      displayItems(items);
      // setEventListeners(items);
    })
    .catch(console.log);
}
init();
