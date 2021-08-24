import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router-dom";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();
  function addDay() {
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("Add complete");
        history.push(`/zzemal/study/react_study/`);
      }
    });
  }
  return (
    <div>
      <h1> 현재 일수 : {days.length}일</h1>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
