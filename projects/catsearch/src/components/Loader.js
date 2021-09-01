export default class Loader {
  constructor($target) {
    this.loaderWapper = document.createElement("div");
    this.loaderWapper.className = "loader-wrapper";
    $target.appendChild(this.loaderWapper);
    this.render();
  }

  closeLoader() {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    loaderWrapper.remove();
  }

  render() {
    const loader = document.createElement("div");
    loader.className = "loader";
    loader.innerText = "Now Loading...";
    this.loaderWapper.appendChild(loader);
  }
}
