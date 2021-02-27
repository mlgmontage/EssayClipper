import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Snipets from "./components/Snipets";
import Create from "./components/Create";

/**
 * TODO: Individual component for sharing snipets
 */

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Splash} />
            <Route path="/snipets" exact component={Snipets} />
            <Route path="/create" exact component={Create} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
