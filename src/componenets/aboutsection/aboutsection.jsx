import React, { Component } from "react";
import aboutImg from "./img/about-img.jpg";

export class AboutSection extends Component {
  render() {
    return (
      <section
        className={
          "sections" +
          (this.props.activeSection && this.props.activeSection === "about"
            ? " active"
            : "")
        }
        data-section-for="about"
      >
        <div className="img">
          <img
            src={aboutImg}
            width="330px"
            height="495px"
            alt="VS code opened in PC and Laptop"
          />
        </div>
        <div className="text">
          <p className="headline">ABOUT ME</p>
          <p className="title">MERN Stack Developer</p>
          <p className="discription">
            MongoDB, Express, React, and Node JS good enough coding skills to
            build full stack apps in almost clean code and strong functionality.
          </p>
          <p className="discription">
            I also have a good knowledge of PHP and SQL databases which I used
            to build several projects.
          </p>
        </div>
      </section>
    );
  }
}

export default AboutSection;
