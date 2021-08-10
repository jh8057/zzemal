function loadItems() {
  return fetch(`data/data.json`)
    .then((response) => response.json())
    .then((json) => json.items);
}
function displayItems(items) {
  const gallery = document.querySelector(".gallery__box");
  gallery.innerHTML = items
    .map((item) => createHtmlString(item.image))
    .join("");
}

function createHtmlString(num) {
  return `
    <img src="${num}" class="galleryImg" alt="img" />
  `;
}

function handleImg(e) {
  const hidden = document.querySelector(".hiddenImg");
  const hiddendiv = document.querySelector(".hiddenDiv");
  let value = e.target.src;
  value = value.split("gallery/");
  const target = value[1];
  hidden.src = target;
  hidden.classList.toggle("imgClicked");
  hiddendiv.classList.toggle("divClicked");
}

function resettoggle() {
  const hidden = document.querySelector(".hiddenImg");
  const hiddendiv = document.querySelector(".hiddenDiv");
  hidden.classList.toggle("imgClicked");
  hiddendiv.classList.toggle("divClicked");
}

function setEventListeners() {
  const imgs = document.querySelectorAll(".galleryImg");
  const hidden = document.querySelector(".hiddenImg");
  imgs.forEach((img) => img.addEventListener("click", handleImg));
  hidden.addEventListener("click", resettoggle);
}
function init() {
  loadItems()
    .then((items) => {
      displayItems(items);
      setEventListeners();
    })
    .catch(console.log);
}
init();
