import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    const { name, age, srcSet, large } = this.props;
    return (
      <div className="col-1-of-4">
        <div className="profile">
          <picture>
            <source media="(max-width:40.5em)" srcSet={srcSet} sizes="" />
            <img
              className="profile__image  margin-bottom-small"
              alt="profile"
              src={large}
            />
          </picture>
          <div className="profile--name">
            {name} &bull; {age}
          </div>
        </div>
      </div>
    );
  }
}
