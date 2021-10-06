const random = document.querySelector(".random__content");
console.log("RANDOM", random);

async function randomImage() {
  const image = await fetch("https://picsum.photos/200");
  console.log("image", image);
  const result = document.createElement("img");
  result.src = image.url;
  random?.appendChild(result);
}
randomImage();
