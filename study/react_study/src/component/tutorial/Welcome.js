import { useState } from "react";
import UserName from "./UserName";

export default function Welcome(props) {
  console.log();
  function showName() {
    console.log("Mike");
  }
  //   let name = "Mike";
  const [name, setName] = useState("Mike");
  const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성인" : " 미성년자";

  //   배열 구조분해 사용
  //  usestate가 배열을 반환
  //  첫번째 값은 state(변수) , 두번째 값은 state를 다룰 함수
  function showText(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <p>Welcome!</p>
      <hr />
      <button onClick={showName}>Show name</button>
      <input type="text" onChange={showText} />
      <hr />
      <h2>
        {name} {props.age} {age} - {msg}
      </h2>
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
          setAge(age + 1);
        }}
      >
        Change
      </button>
      <UserName name={name} />
    </div>
  );
}
