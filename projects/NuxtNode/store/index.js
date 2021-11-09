export const state = () => {
  return {
    name: "",
  };
};

export const mutations = {};

export const actions = {
  async getabout(context, payload) {
    let data = await this.$axios("/about");
    return data;
  },
};

export const getters = {};
