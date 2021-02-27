import React, { Component } from "react";

/**
 * TODO: Submit from & submit button & toggle button
 */

class Create extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div className="mt-3">
            <input type="text" className="form-control" placeholder="title" />
          </div>
          <div className="mt-3">
            <textarea
              type="text"
              className="form-control"
              placeholder="markdown"
              rows="20"
            ></textarea>
          </div>
        </div>
        <div
          style={{ fontSize: "50px", cursor: "pointer" }}
          className="text-center"
        >
          <i className="fa fa-paperclip"></i>
        </div>
      </div>
    );
  }
}

export default Create;
