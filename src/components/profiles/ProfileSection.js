import React, { Component } from "react";

export default class ProfileSection extends Component {
  render() {
    return (
      <section className="profile__section">
        <h2 className="section__heading--secondary  margin-bottom-large">
          Top Profiles
        </h2>
        <div className="row margin-bottom-large">
          <div className="col-1-of-4 profile__card">
            <div className="profile">
              <img
                className="profile__image  margin-bottom-small"
                alt="profile"
                src="https://images.unsplash.com/photo-1507527690292-7888f1022d36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
              />
              <span className="profile--name">Lilly, 22</span>
            </div>
          </div>
          <div className="col-1-of-4 profile__card">
            <div className="profile">
              <img
                className="profile__image  margin-bottom-small"
                alt="profile"
                src="https://images.unsplash.com/photo-1550521128-32b407becb08?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              />
              <span className="profile--name">Bianca,21</span>
            </div>
          </div>
          <div className="col-1-of-4 profile__card">
            <div className="profile">
              <img
                className="profile__image  margin-bottom-small"
                alt="profile"
                src="https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=996&q=80"
              />
              <span className="profile--name">Jimmy,25</span>
            </div>
          </div>
          <div className="col-1-of-4 profile__card">
            <div className="profile">
              <img
                className="profile__image  margin-bottom-small"
                alt="profile"
                src="https://images.unsplash.com/photo-1526265218618-bdbe4fdb5360?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <span className="profile--name">Nini,22</span>
            </div>
          </div>
        </div>
        <a href="#s" class="btn btn-colored btn--profile btn-animated">
          See all profiles
        </a>
      </section>
    );
  }
}
