import React, { Component } from "react";

/**
 * TODO: Make working links
 * * Bootstrap classes are so verbose!!
 */

class Navbar extends Component {
  render() {
    return (
      <div className="row">
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Snipets
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Create
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Archive
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
