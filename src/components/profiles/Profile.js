import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    const { name, image, age } = this.props;
    return (
      <div className="col-1-of-4 profile__card">
        <div className="profile">
          <img
            className="profile__image  margin-bottom-small"
            alt="profile"
            src={image}
          />
          <span className="profile--name">
            {name} &bull; {age}
          </span>
        </div>
      </div>
    );
  }
}
