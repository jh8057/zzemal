const basic = document.querySelector(".basic__list");
const font = document.querySelector(".font__list");
const color = document.querySelector(".color__list");
const icon = document.querySelector(".icon__list");
const etc = document.querySelector(".etc__list");

function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

function createLinksString(url, name) {
  return `<a href = "${url}" alt="link" target="_blank">${name}</a>`;
}

function displayItems(items) {
  items.forEach((item) => {
    const list = document.createElement("li");
    switch (item.type) {
      case "basic":
        list.innerHTML = createLinksString(item.link, item.name);
        basic.appendChild(list);
        break;
      case "font":
        list.innerHTML = createLinksString(item.link, item.name);
        font.appendChild(list);
        break;
      case "color":
        list.innerHTML = createLinksString(item.link, item.name);
        color.appendChild(list);
        break;
      case "icon":
        list.innerHTML = createLinksString(item.link, item.name);
        icon.appendChild(list);
        break;
      case "etc":
        list.innerHTML = createLinksString(item.link, item.name);
        etc.appendChild(list);
        break;
    }
  });
}

function init() {
  loadItems()
    .then((items) => {
      displayItems(items);
    })
    .catch(console.log);
}

init();
