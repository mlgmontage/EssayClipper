import React, { Component } from "react";
import { Link } from "react-router-dom";

/**
 * * Bootstrap classes are so verbose!!
 */

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            <i className="fa fa-paperclip"></i> EssayClipper
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/snipets">
                  <i className="fa fa-cut"></i> Snipets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  <i className="fa fa-plus"></i> Create
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/archive">
                  <i className="fa fa-archive"></i> Archive
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
