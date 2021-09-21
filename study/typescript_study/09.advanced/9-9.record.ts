type PageInfo = {
  title: string;
};

type Page = "home" | "about" | "contact";

//  Page 가 key, PageInfo 가 Value로 사용된다고 이해하면 된다
const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "about" },
  contact: { title: "contact" },
};

type Product = "cat" | "dog";
type NewProduct = Capitalize<Product>; //'Cat','Dog'
