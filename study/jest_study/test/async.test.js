const fetchProduct = require("../async.js");

// 이렇게 하면 테스트가 에러가 나야되는데, 비동기 처리가 되지 않아 it은 정상적으로 끝난 것 처럼 보인다.
// describe("ASYNC TEST", () => {
//   it("async Success", () => {
//     fetchProduct().then((item) => {
//       expect(item).toEqual({ item: "asd", price: 200 });
//     });
//   });
// });

//처리 방법1
describe("ASYNC TEST", () => {
  it("async Done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  it("async Return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("async await", async () => {
    const Product = await fetchProduct();
    expect(Product).toEqual({ item: "Milk", price: 200 });
  });

  it("async resolve", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });
  it("async reject", () => {
    return expect(fetchProduct("error")).rejects.toEqual("network error");
  });
});
