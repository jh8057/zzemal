class productService {
  constructor(productClient) {
    this.productClient = productClient;
  }

  fetchMilk() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.item === "milk"));
  }
}
module.exports = productService;
