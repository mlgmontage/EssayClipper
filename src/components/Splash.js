import React, { Component } from "react";
import { Link } from "react-router-dom";

const icons = ["copy", "clipboard", "clone", "edit", "file"];

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.changeIcon = this.changeIcon.bind(this);
  }

  changeIcon() {
    if (this.state.index >= icons.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState((state) => ({ index: state.index + 1 }));
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3 mt-5 text-right" onClick={this.changeIcon}>
          <i
            className={"fa fa-" + icons[this.state.index]}
            style={{ fontSize: "300px" }}
          ></i>
        </div>
        <div className="col-md-9 mt-5">
          <div className="display-1">EssayClipper</div>
          <div className="lead mb-3">Share, write and manage your essays</div>
          <Link to="/create" className="btn btn-secondary">
            <i className="fa fa-plus"></i> Create
          </Link>
        </div>
      </div>
    );
  }
}

export default Splash;
