const API_ENDPOINT = "https://api.thecatapi.com/v1"; //프로그래머스에서 제공하는 API 기본주소

const request = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errData = await response.json();
      throw errData;
    }
  } catch (e) {
    throw {
      message: e.message,
      status: e.status,
    };
  }
};

const api = {
  fetchCats: async (keyword) => {
    try {
      const breeds = await request(
        `${API_ENDPOINT}/breeds/search?q=${keyword}`
      );
      //   console.log("BREEDS", breeds);
      const requests = breeds.map(async (breed) => {
        // console.log(breed.id);
        return await request(
          `${API_ENDPOINT}/images/search?limit=20&breed_ids=${breed.id}`
        );
      });
      //   console.log("REQUEST", requests);
      const responses = await Promise.all(requests);
      //   console.log("RESPONSES", responses);
      const result = responses.reduce((acc, cur) => {
        acc = acc.concat(cur);
        //   acc = [...acc,...cur]
        return acc;
      }, []);
      //   console.log("RESULT", result);
      return result;
    } catch (e) {
      return e;
    }
  },
  fetchRandomCats: async () => {
    try {
      const result = await request(`${API_ENDPOINT}/images/search?limit=20`);
      return result;
    } catch (e) {
      return e;
    }
  },
};

export default api;
