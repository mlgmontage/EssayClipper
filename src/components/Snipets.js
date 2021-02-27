import React, { Component } from "react";
import marked from "marked";
import data from "../data";

/**
 * TODO: Next, prev buttons. Keybindings
 * TODO: Fetching from API
 */

class Snipets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      index: 0,
    };
  }
  render() {
    return (
      <div>
        <h4>{this.state.data[this.state.index].title}</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(this.state.data[this.state.index].markdown),
          }}
        ></div>
      </div>
    );
  }
}

export default Snipets;
