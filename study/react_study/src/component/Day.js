// import dummy from "../db/data.json";
import Word from "./Word";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
export default function DayList() {
  const { day } = useParams();
  // const wordList = dummy.words.filter((word) => word.day === Number(day));

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <div>
      <h2> Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
