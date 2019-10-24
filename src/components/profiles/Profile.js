import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    const { name, image, age } = this.props;
    return (
      <div className="col-1-of-4">
        <div className="profile">
          <img
            className="profile__image  margin-bottom-small"
            alt="profile"
            src={image}
          />
          <div className="profile--name">
            {name} &bull; {age}
          </div>
        </div>
      </div>
    );
  }
}
