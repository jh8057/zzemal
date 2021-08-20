import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import styles from "./App.module.css";
function App() {
  const name = "zzemal";
  const mypage = {
    name: "zzemal's github",
    url: "https://github.com/jh8057/zzemal",
  };
  return (
    <div className="App">
      <h1
        style={{
          color: "brown",
          backgroundColor: "beige",
        }}
      >
        Hello, {name}
      </h1>
      <a href={mypage.url} target="_blank" rel="noreferrer">
        {mypage.name}
      </a>
      <Hello />
      <Welcome />
      <Welcome />
      <div className={styles.box}>App</div>
    </div>
  );
}

export default App;
