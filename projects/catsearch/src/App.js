import api from "./api/catApi.js";
import DarkMode from "./components/DarkMode.js";
import Loader from "./components/Loader.js";
import SearchSection from "./components/SearchSection.js";
import { getItem, setItem } from "./util/localStorage.js";

export default class App {
  constructor($target) {
    let keywords = getItem("keywords");
    let initalData = null;
    if (keywords) {
      keywords = keywords.split(",");
    } else {
      keywords = [];
    }

    const getInitialData = async (keywords) => {
      if (keywords) {
        initalData = JSON.parse(getItem("recent"));
      } else {
        return null;
      }
    };

    const onSearch = async (keyword, isRandom) => {
      const loader = new Loader($target);
      let response = null;
      if (isRandom) {
        response = await api.fetchCats(keyword);
        console.log(response);
      } else {
        response = await api.fetchRandomCats();
        console.log(response);
      }
      const recent = JSON.stringify(response);
      setItem("recent", recent);
      loader.closeLoader();
    };

    const searchSection = new SearchSection({
      $target,
      onSearch,
      keywords,
    });

    const darkMode = new DarkMode($target);

    getInitialData(keywords);
  }
}
