import React from "react";

export default function ContactForm() {
  return (
    <div className="contact-form pb-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <h2> Contact Me</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Your Name *"
                      autocomplete="off"
                      required="required"
                      data-validation-required-message="Please enter your name."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Your Email *"
                      autocomplete="off"
                      required="required"
                      data-validation-required-message="Please enter your email address."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="Your Phone *"
                      autocomplete="off"
                      required="required"
                      data-validation-required-message="Please enter your phone number."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Your Message *"
                      autocomplete="off"
                      required="required"
                      data-validation-required-message="Please enter a message."
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>

                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button
                    id="sendMessageButton"
                    className="contact-me-btn mt-4"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
