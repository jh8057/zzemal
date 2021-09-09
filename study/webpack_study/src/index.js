import { hello, add } from "./util";
import "./style.css";
const text = hello("나는 째마리aa야");
const num = add(1, 2);
document.getElementById("root").innerHTML = text + num;
