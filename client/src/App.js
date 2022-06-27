import { Link, Route, Switch } from "react-router-dom";
import Employee from "./Employee";
import Home from "./Home";

function App() {
  return (
    <main>
      <h1 className="title">
        <Link to="/" >Apply for a job</Link>
      </h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/employees/:id">
          <Employee />
        </Route>
      </Switch>
    </main>
  );
}

export default App;