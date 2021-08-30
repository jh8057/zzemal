import { hello, add } from "./util";

const text = hello("나는 째마리야");
const num = add(1, 2);
document.getElementById("root").innerHTML = text + num;
