import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
          <a className="navbar-brand" href="/#">
            eCommerce
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to='/' className="nav-link" href="/#">
                  Dashboard
                </Link>
                <Link to='/about1' className="nav-link" href="/#">
                  About Us
                </Link>
                <Link to='/contactus' className="nav-link" href="/#">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
