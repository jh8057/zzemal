import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("Add complete");
          history.push(`/zzemal/study/react_study/day/${dayRef.current.value}`);
          setIsLoading(false);
        }
      });
    }
  }
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="input_area">
          <label>Eng</label>
          <input type="text" placeholder="computer" ref={engRef}></input>
        </div>
        <div className="input_area">
          <label>Kor</label>
          <input type="text" placeholder="컴퓨터" ref={korRef}></input>
        </div>
        <div className="input_area">
          <select ref={dayRef}>
            {days.map((day) => (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            ))}
          </select>
        </div>
        <button
          style={{
            opacity: isLoading ? 0.3 : 1,
          }}
        >
          {isLoading ? "Saving..." : "저장"}
        </button>
      </form>
    </div>
  );
}
