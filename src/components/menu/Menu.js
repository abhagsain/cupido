import React from "react";

export default function Menu() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        name="menu"
        id="nav"
        className="navigation__checkbox"
      />
      <label htmlFor="nav" className="navigation__button">
        Menu
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__group">
          <li className="navigation__item">
            <a href="#v" className="navigation__link">
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="#v" className="navigation__link">
              Login/Signup
            </a>
          </li>
          <li className="navigation__item">
            <a href="#v" className="navigation__link">
              Terms
            </a>
          </li>
          <li className="navigation__item">
            <a href="#v" className="navigation__link">
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
