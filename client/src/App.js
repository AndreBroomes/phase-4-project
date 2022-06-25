import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Switch, Link } from "react-router-dom"; 
import Header from './Header';
import Login from './Login';
// import { BrowserRouter as Router } from 'react-router-dom';
import Employee from "./Employee"
import Home from "./Home"
function App() {

  // const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     fetch("http://localhost:4000/me").then((response) => {
  //       if (response.ok) {
  //         response.json().then((user) => setUser(user));
  //       }
  //     });
  //   }, []);

  

  // function handleLogout() {
  //   setUser(null);
  // }
  // if (!user) return <Login onLogin={setUser} />;
  return (
    <main>
      <h1>
      <Link to="/">Apply for a job</Link>
      </h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/employees/:id">
          <Employee />
        </Route>
      </Switch>
    <>
    <div className="App">
      {/* <Header user={user} setUser={setUser} onLogout={handleLogout} /> */}
    </div>
    </>
    </main>
  );
}

export default App;
