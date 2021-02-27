import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Snipets from "./components/Snipets";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Splash} />
            <Route path="/snipets" exact component={Snipets} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
