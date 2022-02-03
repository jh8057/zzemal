class StubProductClient {
  async fetchItems() {
    return [{ item: "milk" }, { item: "banana" }];
  }
}

module.exports = StubProductClient;
