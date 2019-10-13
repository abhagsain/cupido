import React, { Component } from "react";
import logo from "../assests/heart-image.png";
export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="logo-box">
            <img src={logo} alt="logo" id="logo"></img>
          </div>
          <div className="heading__container">
            <h1 className="heading">
              <span className="heading-primary">Cupido</span>
              <span className="heading-secondary">Discover Love</span>
            </h1>
            <a href="#s" className="btn btn-animated">
              Find A Partner
            </a>
          </div>
        </header>
      </div>
    );
  }
}
