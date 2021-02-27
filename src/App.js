import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";

/**
 * TODO: Setup react-router-dom
 */

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Splash />
      </div>
    );
  }
}

export default App;
