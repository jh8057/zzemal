const graphic = document.querySelector(".graphic__list");
const light = document.querySelector(".light__list");
const game = document.querySelector(".game__list");
const threed = document.querySelector(".threed__list");
const git = document.querySelector(".git__list");

function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

function createLinksString(url, name) {
  return `<a href = "${url}" alt="link" target="_blank">${name} - ${url}</a>`;
}

function displayItems(items) {
  items.forEach((item) => {
    const list = document.createElement("li");
    switch (item.type) {
      case "graphic":
        list.innerHTML = createLinksString(item.link, item.name);
        graphic.appendChild(list);
        break;
      case "light":
        list.innerHTML = createLinksString(item.link, item.name);
        light.appendChild(list);
        break;
      case "game":
        list.innerHTML = createLinksString(item.link, item.name);
        game.appendChild(list);
        break;
      case "threed":
        list.innerHTML = createLinksString(item.link, item.name);
        threed.appendChild(list);
        break;
      case "git":
        list.innerHTML = createLinksString(item.link, item.name);
        git.appendChild(list);
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
