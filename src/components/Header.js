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
              <span class="heading-primary">cupido</span>
              <span class="heading-secondary">Discover Love</span>
            </h1>
            <a href="#s" class="btn btn-white btn-animated">
              Find A Partner
            </a>
          </div>
        </header>
        <section>
          <div className="row">
            <div className="col-1-of-2">Col 1 of 2</div>
            <div className="col-1-of-2">Col 1 of 2</div>
          </div>
          <div className="row">
            <div className="col-1-of-3">Col 1 of 3</div>
            <div className="col-1-of-3">Col 1 of 3</div>
            <div className="col-1-of-3">Col 1 of 3</div>
          </div>
          <div className="row">
            <div className="col-1-of-3">Col 1 of 3</div>
            <div className="col-2-of-3">Col 2 of 3</div>
          </div>
          <div className="row">
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-2-of-4">Col 2 of 4</div>
          </div>
          <div className="row">
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-1-of-4">Col 1 of 4</div>
          </div>
          <div className="row">
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-3-of-4">Col 3 of 4</div>
          </div>
        </section>
      </div>
    );
  }
}
