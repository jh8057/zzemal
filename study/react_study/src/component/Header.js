import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/zzemal/study/react_study"> 토익 영단어(고급)</Link>
      </h1>
      <div className="menu">
        <Link to="/zzemal/study/react_study/create_word" className="link">
          단어 추가
        </Link>
        <Link to="/zzemal/study/react_study/create_day" className="link">
          Day 추가
        </Link>
      </div>
    </div>
  );
}
