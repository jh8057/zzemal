import { useState } from "react";

export default function Welcome() {
  function showName() {
    console.log("Mike");
  }
  //   let name = "Mike";
  const [name, setName] = useState("Mike");
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
      <h2>{name}</h2>
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
        }}
      >
        Change
      </button>
    </div>
  );
}
