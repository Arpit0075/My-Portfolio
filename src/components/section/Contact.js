import React from "react";
import { contact, section5Title, social } from "../../profile";

const Contact = () => {
  return (
    <div className="parallax">
      <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
        <>
          <div className="git-head-div text-center mx-auto">
            <h1 id="Contact" className="git-head">
              {section5Title}
            </h1>
          </div>
        </>
        <div className="container">
          <div className="git-cont row contact-container">
            <div className="col-12 col-sm-6 half ">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name"
                  required
                ></input>
                <input
                  type="mail"
                  id="mailid"
                  name="Email"
                  placeholder="Email Address"
                  required
                ></input>
                <input
                  type="text"
                  id="sub"
                  name="Subject"
                  placeholder="Subject"
                  required
                ></input>
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
                <button style={{ cursor: "pointer" }} type="submit">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-12 col-sm-6 half contact-section">
              <p className="lead">{contact.pitch}</p>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block socials">
                  {social.linkedin && (
                    <a
                      className="social-link"
                      title="Visit Linkedin profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.linkedin}
                    >
                      <p className="social-p">
                        <i className="fab fa-linkedin"></i>
                        {social.linkedin}
                      </p>
                    </a>
                  )}
                  {social.facebook && (
                    <a
                      title="Visit Facebok profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.facebook}
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  )}
                  {social.twitter && (
                    <a
                      title="Visit Twitter profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.twitter}
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {social.instagram && (
                    <a
                      title="Visit Instagram profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.instagram}
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                  {social.github && (
                    <a
                      className="social-link"
                      title="Visit Github profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.github}
                    >
                      <p className="social-p">
                        <i className="fab fa-github"></i>
                        {social.github}
                      </p>
                    </a>
                  )}
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
