import React, { Component } from "react";
import marked from "marked";
import host from "../host";

/**
 * TODO: toggle button, handle change
 */

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EditMode: true,
      title: "",
      markdown: "",
    };
    this.submit = this.submit.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submit() {
    if (this.state.title.trim() != "" && this.state.markdown.trim() != "") {
      fetch(`${host}/api/snipets/create`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({
          title: this.state.title,
          markdown: this.state.markdown,
          isArchived: false,
        }),
      }).then((response) => {
        if (response.status == 200) {
          this.setState({
            title: "",
            markdown: "",
          });
          console.log("created");
        }
      });
    }
  }

  toggleEditMode() {
    this.setState({
      EditMode: !this.state.EditMode,
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="btn btn-secondary mt-3" onClick={this.toggleEditMode}>
          <i className="fa fa-eye"></i>
        </div>
        {this.state.EditMode ? (
          <form onSubmit={this.submit}>
            <div className="mt-3">
              <input
                type="text"
                onChange={this.handleChange}
                name="title"
                value={this.state.title}
                className="form-control"
                placeholder="title"
              />
            </div>
            <div className="mt-3">
              <textarea
                name="markdown"
                onChange={this.handleChange}
                value={this.state.markdown}
                type="text"
                className="form-control"
                placeholder="markdown"
                rows="20"
              ></textarea>
            </div>
            <div
              style={{ fontSize: "50px", cursor: "pointer" }}
              className="text-center"
              onClick={this.submit}
            >
              <i className="fa fa-paperclip"></i>
            </div>
          </form>
        ) : (
          <div>
            <div className="lead mt-3">{this.state.title}</div>
            <div
              dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
              className="mt-3"
            ></div>
          </div>
        )}
      </div>
    );
  }
}

export default Create;
