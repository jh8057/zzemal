// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");
  //   console.log(dummy);
  // const [days, setDays] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3001/days")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDays(data);
  //     });
  // }, []);

  return (
    <div>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/zzemal/study/react_study/day/${day.day}`}>
              Day {day.day}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
