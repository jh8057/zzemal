import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import EmptyPage from "./component/EmptyPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/zzemal/study/react_study">
            <DayList />
          </Route>
          <Route path="/zzemal/study/react_study/day/:day">
            <Day />
          </Route>
          <Route path="/zzemal/study/react_study/create_word">
            <CreateWord />
          </Route>
          <Route path="/zzemal/study/react_study/create_day">
            <CreateDay />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
