import React, { Component } from "react";
import marked from "marked";
import data from "../data";

/**
 * TODO: Archive button
 * TODO: Fetching from API
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
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
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

  render() {
    return (
      <div className="mt-5">
        <h4 className="lead">{this.state.data[this.state.index].title}</h4>
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
      </div>
    );
  }
}

export default Snipets;
