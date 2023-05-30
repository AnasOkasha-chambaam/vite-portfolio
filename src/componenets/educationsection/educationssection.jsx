import React, { Component } from "react";
import Stage from "./educationstage";
import chemistry from "../../imgs/chemistry.webp";
import html from "../../imgs/html.webp";
import sass from "../../imgs/sass.webp";
import javascript from "../../imgs/javascript.webp";
import react from "../../imgs/react.webp";
import express from "../../imgs/express.webp";
import mongodb from "../../imgs/mongodb.webp";
import php from "../../imgs/php.webp";
import biochemistry from "../../imgs/biochemistry.webp";

export class EducationsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education_stages: [
        {
          title: "Special Chemistry",
          year: 2020,
          place: "Faculty of Science - Al Azhar University",
          description:
            "That helps me deal with scientific information ,understand them, and look at the world from science point of view.",
          img: chemistry,
        },
        {
          title: "HTML",
          year: 2018,
          place: "Traversy Media - Udemy",
          description:
            "Learning HTML was my enterance to front-end web development.",
          img: html,
        },
        {
          title: `SASS`,
          year: 2018,
          place: "Youtube",
          description:
            "(I prefer it more than CSS) I learned SASS in order to style HTML elements, make good animation and build responsive websites. It helps me create things sweet like BONBON.",
          img: sass,
        },
        {
          title: `JavaScript`,
          year: 2019,
          place: "Books, Youtube, and Udemy Courses",
          description:
            "The first programing language I've ever learned. It enables me to build thing that sometimes impress even me. I LOVE IT",
          img: javascript,
        },
        {
          title: `REACT`,
          year: 2020,
          place: "Youtube & Udemy Courses",
          description:
            "REACT is an open-source JavaScript library which enables me build user interfaces specifically for single page applications.",
          img: react,
        },
        {
          title: `EXPRESS (Node JS)`,
          year: 2021,
          place: "Youtube & Udemy Courses",
          description:
            "These were my first backend languages, and I realy love and prefer them over PHP.",
          img: express,
        },
        {
          title: `MongoDB`,
          year: 2021,
          place: "Youtube & Udemy Courses",
          description:
            "MongoDB is an open source NoSQL database management program. Data is stored in JS object style.",
          img: mongodb,
        },
        {
          title: `PHP & SQL`,
          year: 2020,
          place: "Youtube & Udemy Courses",
          description:
            "I was asked to learn them to do a couple of projects. I even used them to build a basic social media platform.",
          img: php,
        },
        {
          title: `Bio-Chemistry`,
          year: "2022",
          place: "El-Mansoura University",
          description:
            "It is the study of chemical processes within and relating to living organisms, and I kinda interested in it.",
          img: biochemistry,
        },
      ],
    };
  }
  render() {
    return (
      <section
        className={
          "sections" +
          (this.props.activeSection && this.props.activeSection === "educations"
            ? " active"
            : "")
        }
        data-section-for="educations"
      >
        <p className="headline">MORE ABOUT ME</p>
        <p className="title">Education</p>
        <div className="education-stages">
          {this.state.education_stages.map(
            ({ title, year, place, description, img }, index) => {
              return (
                <Stage
                  key={"_" + this.index + "_" + title.split(" ").join("0")}
                  index={index}
                  title={title}
                  year={year}
                  place={place}
                  description={description}
                  img={img}
                />
              );
            }
          )}
        </div>
      </section>
    );
  }
}

export default EducationsSection;
