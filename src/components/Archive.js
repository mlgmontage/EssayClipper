import React, { Component } from "react";
import data from "../data";

class Archive extends Component {
  render() {
    return (
      <div className="mt-5">
        {data.map((snipet) => (
          <div className="mb-2" key={snipet.title}>
            <h4>
              <a style={{ color: "black" }} href="#">
                {snipet.title}
              </a>
            </h4>
          </div>
        ))}
      </div>
    );
  }
}

export default Archive;
