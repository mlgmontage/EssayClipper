import React, { Component } from "react";
import Navbar from "./components/Navbar";

/**
 * TODO: Setup react-router-dom
 */

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
      </div>
    );
  }
}

export default App;
