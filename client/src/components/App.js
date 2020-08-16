import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import UsersPage from "./UsersPage";
import UserDetail from "./UserDetail";
import Header from "./Header/Header";
import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ minWidth: "400px" }}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/users" component={UsersPage} />
            <Route path="/users/:id" component={UserDetail} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
