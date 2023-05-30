import React, { Component } from "react";
import Logo from "../logo/logo";

export class Header extends Component {
  render() {
    return (
      <header
        className="header-container"
        style={{
          width: document.querySelector(".App")
            ? document.querySelector(".App").clientWidth
            : "100vw",
        }}
      >
        {/* Logo */}
        <div className="header-content">
          <span
            className="logo-container"
            onClick={() => {
              document
                .querySelector(".App")
                .scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Logo />
            Anasite
          </span>
          {/* Categories */}
          <ul className="categorie-btns">
            <li
              className={
                "btn" +
                (this.props.activeSection && this.props.activeSection === "home"
                  ? " active"
                  : "")
              }
              data-link-for="home"
              onClick={() => {
                this.props.scrollTo("home");
              }}
            >
              Home
            </li>
            <li
              className={
                "btn" +
                (this.props.activeSection &&
                this.props.activeSection === "about"
                  ? " active"
                  : "")
              }
              data-link-for="about"
              onClick={() => {
                this.props.scrollTo("about");
              }}
            >
              About
            </li>
            <li
              className={
                "btn" +
                (this.props.activeSection &&
                this.props.activeSection === "skills"
                  ? " active"
                  : "")
              }
              data-link-for="skills"
              onClick={() => {
                this.props.scrollTo("skills");
              }}
            >
              Skills
            </li>
            <li
              className={
                "btn" +
                (this.props.activeSection &&
                this.props.activeSection === "educations"
                  ? " active"
                  : "")
              }
              data-link-for="educations"
              onClick={() => {
                this.props.scrollTo("educations");
              }}
            >
              Educations
            </li>
            <li
              className={
                "btn" +
                (this.props.activeSection && this.props.activeSection === "work"
                  ? " active"
                  : "")
              }
              data-link-for="work"
              onClick={() => {
                this.props.scrollTo("work");
              }}
            >
              Work
            </li>
            <li>
              <span
                className="green-bar"
                style={{
                  left:
                    this.props.activeSection &&
                    document.querySelector(
                      ".active[data-link-for=" + this.props.activeSection + "]"
                    )
                      ? document.querySelector(
                          ".active[data-link-for=" +
                            this.props.activeSection +
                            "]"
                        ).offsetLeft +
                        document.querySelector(
                          ".active[data-link-for=" +
                            this.props.activeSection +
                            "]"
                        ).offsetWidth /
                          2
                      : "33px",
                  opacity:
                    this.props.activeSection &&
                    this.props.activeSection !== "contact"
                      ? 1
                      : 0,
                }}
              ></span>
            </li>
          </ul>
          <button
            className={
              "big-btn" +
              (this.props.activeSection &&
              this.props.activeSection === "contact"
                ? " active"
                : "")
            }
            data-link-for="contact"
            onClick={() => {
              this.props.scrollTo("contact");
            }}
          >
            Contact
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
