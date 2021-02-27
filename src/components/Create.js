import React, { Component } from "react";

/**
 * TODO: toggle button, handle change
 */

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EditMode: true,
    };
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  toggleEditMode() {
    this.setState({
      EditMode: !this.state.EditMode,
    });
  }

  render() {
    return (
      <div>
        <div className="btn btn-secondary" onClick={this.toggleEditMode}>
          <i className="fa fa-eye"></i>
        </div>
        {this.state.EditMode ? (
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
            <div
              style={{ fontSize: "50px", cursor: "pointer" }}
              className="text-center"
            >
              <i className="fa fa-paperclip"></i>
            </div>
          </div>
        ) : (
          <div> toggle </div>
        )}
      </div>
    );
  }
}

export default Create;
