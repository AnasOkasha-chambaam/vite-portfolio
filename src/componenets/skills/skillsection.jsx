import React, { Component } from "react";
import Skill from "./skill";

export class SkillSection extends Component {
  render() {
    return (
      <section
        className={
          "sections" +
          (this.props.activeSection && this.props.activeSection === "skills"
            ? " active"
            : "")
        }
        data-section-for="skills"
      >
        <div className="text">
          <p className="title">
            I am a MERN Developer and I excel at what I do.
          </p>
          <p className="quote">
            The quick brown fox jumps over the lazy dog. It is the goto line for
            learning touch tpying. I use this line quite often. And It is very
            helpful. Someone came up with this brillient line and help probably
            a million people
          </p>
          <p className="quote">
            I know a little bit about PHP and more about SQL databases, and I
            have built several projects with it, but I love coding in React and
            Node js more.
          </p>
        </div>
        <div className="skill-svgs">
          <Skill progression={0.74} skillName="MongoDB" />
          <Skill progression={0.86} skillName="React" />
          <Skill progression={0.78} skillName="Express" />
          <Skill progression={0.7} skillName="Node.JS" />
          <Skill progression={0.67} skillName="Socket IO" />
          <Skill progression={0.9} skillName="SASS" />
          <Skill progression={0.6} skillName="PHP" />
          <Skill progression={0.6} skillName="SQL" />
        </div>
      </section>
    );
  }
}

export default SkillSection;
