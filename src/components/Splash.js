import React, { Component } from "react";
import { Link } from "react-router-dom";

class Splash extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3 mt-5 text-right">
          <i className="fa fa-paperclip " style={{ fontSize: "350px" }}></i>
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
