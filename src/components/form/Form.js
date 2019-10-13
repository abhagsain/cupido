import React, { Component } from "react";
import Button from "../button/Button";

export default class Form extends Component {
  render() {
    return (
      <div className="section--form">
        <div className="row">
          <div className="form">
            <div className="form__container">
              <form action="#" autoComplete="off">
                <h2 className="section__heading--secondary  margin-bottom-medium">
                  Sign Up Today!
                </h2>
                <div className="input__group">
                  <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    className="input"
                    required
                  />
                  <label for="name" className="input--label">
                    Full Name
                  </label>
                </div>
                <div className="input__group">
                  <input
                    type="email"
                    required
                    id="email"
                    placeholder="Email"
                    className="input"
                  />
                  <label for="email" className="input--label">
                    Email
                  </label>
                </div>
                <Button />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
