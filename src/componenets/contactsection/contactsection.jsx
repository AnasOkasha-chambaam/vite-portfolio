import React, { Component } from "react";

export class ContactSection extends Component {
  render() {
    return (
      <section
        className={
          "sections" +
          (this.props.activeSection && this.props.activeSection === "contact"
            ? " active"
            : "")
        }
        data-section-for="contact"
      >
        <p className="headline">JUST A PING AWAY</p>
        <p className="title">Contact</p>
        <div className="contact-links">
          <a
            href="mailto:anasokashachama@gmail.com?subject=from_portfolio"
            className="btn"
          >
            Send E-mail
          </a>
          <p className="or">Or</p>
          <ul className="social-medias">
            <li className="social-link">
              <a
                href="https://www.facebook.com/anas.okasha.18/"
                className="here pro-anim"
                id="facebook_profile"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-facebook-square fa-10x"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li className="social-link">
              <a
                href="https://github.com/AnasOkasha-chambaam"
                className="here pro-anim"
                id="git_profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i
                  className="fab fa-github-square fa-10x"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li className="social-link">
              <a
                href="https://www.linkedin.com/in/anas-okasha-8644ab1b9/"
                className="here pro-anim"
                id="linkedin_profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-brands fa-linkedin fa-10x"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default ContactSection;
