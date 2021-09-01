import { setItem } from "../util/localStorage.js";

export default class SearchSection {
  constructor({ $target, onSearch, keywords }) {
    this.section = document.createElement("section");
    this.section.className = "search-section";
    this.onSearch = onSearch;
    this.keywords = keywords;
    $target.appendChild(this.section);
    this.render();
  }

  addKeyword(keyword) {}

  render() {
    this.section.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const searchBox = document.createElement("input");
    searchBox.className = "search-box";
    searchBox.autofocus = true; //마우스 클릭 없이 바로 text를 넣을 수 있게 focus해주는 기능
    searchBox.placeholder = "고양이를 검색하세요";

    searchBox.addEventListener("keypress", (e) => {
      if (e.key == "Enter") {
        const keywrod = searchBox.value;
        this.onSearch(keywrod, true);
        // this.addKeyword(keyword)
      }
    });

    searchBox.addEventListener("click", () => {
      searchBox.value = "";
    });

    wrapper.appendChild(searchBox);
    this.section.appendChild(wrapper);
  }
}
