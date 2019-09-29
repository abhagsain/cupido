import React, { Component } from "react";
import logo from "../assests/heart.svg";
export default class Header extends Component {
  render() {
    return (
      <div>
        <header class="header">
          <div class="logo-box">
            <img src={logo} alt="logo" id="logo"></img>
          </div>
          <div class="heading__container">
            <h1 class="heading">
              <span class="heading-primary">Cupido</span>
              <span class="heading-secondary">Discover Love</span>
            </h1>
            <a href="#s" class="btn btn-white btn-animated">
              Find A Partner
            </a>
          </div>
        </header>
      </div>
    );
  }
}
