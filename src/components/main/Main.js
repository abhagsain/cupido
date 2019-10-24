import React from "react";
export default function Main() {
  return (
    <main>
      <section className="section__info">
        <div className="">
          <div className="u-items-center margin-bottom-large ">
            <h2 className="section__heading--secondary">
              Tired of being alone?
            </h2>
          </div>
        </div>
        <div className="row margin-bottom-large">
          <div className="col-1-of-2">
            <div className="heading__text margin-bottom-small font-bold">
              Matching compatible partner
            </div>
            <p className="paragraph">
              You can register and create your profile for FREE! Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor
            </p>
            <div className="heading__text margin-bottom-small font-bold">
              Start Something Epic
            </div>
            <p className="paragraph">
              You can register and create your profile for FREE! Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor
            </p>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <picture>
                <source
                  media="(max-width:37.5em)"
                  srcSet={`${require("../../assests/couple-image-1-1x.jpg")} 1x,
                          ${require("../../assests/couple-image-1-2x.jpg")} 2x`}
                />
                <img
                  src={require("../../assests/couple-image-1-2x.jpg")}
                  alt="img-1"
                  className="composition__image composition__image--1"
                />
              </picture>
              <picture>
                <source
                  media="(max-width:37.5em)"
                  srcSet={`${require("../../assests/couple-image-2-1x.jpg")} 1x,
                          ${require("../../assests/couple-image-2-2x.jpg")} 2x`}
                />
                <img
                  src={require("../../assests/couple-image-2-1x.jpg")}
                  alt="img-3"
                  className="composition__image composition__image--2"
                />
              </picture>
              <picture>
                <source
                  media="(max-width:37.5em)"
                  srcSet={`${require("../../assests/couple-image-3-1x.jpg")} 1x,
                        ${require("../../assests/couple-image-3-2x.jpg")} 2x`}
                />
                <img
                  src={require("../../assests/couple-image-3-1x.jpg")}
                  alt="img-3"
                  className="composition__image composition__image--3"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
