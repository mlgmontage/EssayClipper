import React, { Component } from "react";
import marked from "marked";
import data from "../data";
import host from "../host";

/**
 * TODO: Archive button
 */

class Snipets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      index: 0,
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.archive = this.archive.bind(this);
    this.delete = this.delete.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    fetch(`${host}/api/snipets`)
      .then((response) => response.json())
      .then((json) => {
        if (json != [] || json != undefined || json != null) {
          this.setState({
            data: json,
          });
        }
      });
    document.addEventListener("keypress", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.key == "j") {
      this.previous();
    }
    if (e.key == "l") {
      this.next();
    }
  }

  next() {
    if (this.state.data.length - 1 > this.state.index) {
      this.setState((state) => ({
        index: state.index + 1,
      }));
    }
  }

  previous() {
    if (this.state.index > 0) {
      this.setState((state) => ({
        index: state.index - 1,
      }));
    }
  }

  archive(id) {
    console.log("archive");
  }

  delete(id) {
    fetch(`${host}/api/snipets/${id}`, { method: "delete" }).then(
      (response) => {
        if (response.status == 200) {
          console.log("deleted");
        }
      }
    );
  }

  render() {
    return (
      <div className="mt-5">
        <h4 className="lead">
          {this.state.data[this.state.index].title}{" "}
          <i
            style={{ cursor: "pointer" }}
            onClick={() => this.delete(this.state.data[this.state.index]._id)}
            className="fa fa-trash"
          ></i>
        </h4>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(this.state.data[this.state.index].markdown),
          }}
        ></div>
        <div
          className="row mb-4 mt-4"
          style={{ fontSize: "50px", cursor: "pointer" }}
        >
          <div className="col-md text-center" onClick={this.previous}>
            <i className="fa fa-arrow-left"></i>
          </div>
          <div className="col-md text-center" onClick={() => this.archive()}>
            <i className="fa fa-archive"></i>
          </div>
          <div className="col-md text-center" onClick={this.next}>
            <i className="fa fa-arrow-right"></i>
          </div>
        </div>
        <div className="text-center">
          <small className="text-muted">
            Press "j" to go previous, press "l" to go next
          </small>
        </div>
      </div>
    );
  }
}

export default Snipets;
