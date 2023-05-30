import React, { Component } from "react";
import showCaseImg from "./img/showcaseimg.jpg";

export class HomeSection extends Component {
  render() {
    return (
      <section
        className={
          "sections" +
          (this.props.activeSection && this.props.activeSection === "home"
            ? " active"
            : "")
        }
        data-section-for="home"
      >
        <div className="text">
          <h1>
            Once upon a time, I had a dream of being a programmer, but my high
            school degree allows me only to be a chemist, so I became a chemist
            and a programmer.
          </h1>
          <p>MERN Stack Developer, Chemist</p>
          <span>
            <button
              className="big-btn"
              onClick={() => {
                this.props.scrollTo("about");
              }}
            >
              About Me
            </button>
            <button
              className="big-btn inverse"
              onClick={() => {
                this.props.scrollTo("contact");
              }}
            >
              Contact
            </button>
          </span>
        </div>
        <div className="img">
          <img src={showCaseImg} alt="A person with his labtop" />
        </div>
      </section>
    );
  }
}

export default HomeSection;
