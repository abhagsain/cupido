import React, { Component } from "react";

export default class Testimonials extends Component {
  render() {
    /* 
    https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1031&q=80
     */
    return (
      <section className="testimonial text-center">
        <h2 className="section__heading--secondary  margin-bottom-large inline-block ">
          User Testimonials
        </h2>
        <div className="row">
          <div className="testimonial__section">
            <figure className="testimonial__image">
              <img
                src="https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt=""
                className="testimonial--portrait"
              />
              <figcaption className="testimonial--caption">
                Hannah Smith
              </figcaption>
            </figure>
            <div className="testimonial__content">
              <h3 className="testimonial__content--text">
                Perfect in our Imperfections
              </h3>
              <p className="testimonial__content--desc">
                The website allow me to meet my soul mate in just a few short
                weeks. We believe this was definitely in our journey to meet
                through your site and that it's in alignment with the universe &
                God for our destiny to be together.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="testimonial__section">
            <figure className="testimonial__image">
              <img
                src="https://images.unsplash.com/photo-1541089404510-5c9a779841fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt=""
                className="testimonial--portrait"
              />
              <figcaption className="testimonial--caption">Judy Law</figcaption>
            </figure>
            <div className="testimonial__content">
              <h3 className="testimonial__content--text">
                Healing and Growing Deeper in Love
              </h3>
              <p className="testimonial__content--desc">
                I can see very clearly how my life has been preparing me to meet
                my 'match' and believe that we all have to do our work to get to
                a place where we are able to receive such a great love but your
                site was the final and divine piece of the path to bringing us
                together.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
