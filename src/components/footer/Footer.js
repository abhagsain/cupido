import React from "react";
import logo from "../../assests/heart-image.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo-box margin-bottom-medium">
        <img src={logo} alt="Cupido" className="footer__img" />
      </div>
      <div className="row footer__content">
        <div className="col footer--inline">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Home
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Company
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Contact Us
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Privacy Policy
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
