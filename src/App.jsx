import React, { Component } from "react";
// import logo from "./logo.svg";
import Header from "./componenets/header/header";
import HomeSection from "./componenets/home/homesection";
import "./App.css";
import AboutSection from "./componenets/aboutsection/aboutsection";
import SkillSection from "./componenets/skills/skillsection";
import EducationsSection from "./componenets/educationsection/educationssection";
import WorkSection from "./componenets/work/worksection";
import ContactSection from "./componenets/contactsection/contactsection";
import Footer from "./componenets/footer/footer";
import showCaseImg from "./componenets/home/img/showcaseimg.jpg";
// import "./imgs";

export class App extends Component {
  constructor(props) {
    super(props);
    console.log(showCaseImg);

    this.state = { activeSection: undefined };
    this.getElementDimensions = this.getElementDimensions.bind(this);
    this.determineTheNearstElm = this.determineTheNearstElm.bind(this);
  }
  // related to component
  componentDidMount() {
    let activeSection = [...document.querySelectorAll(".sections")][0].dataset[
      "sectionFor"
    ];
    this.setState({ ...this.state, activeSection });
  }
  // my functions
  scrollTo(targetDatasetValue) {
    [...document.querySelectorAll(".sections")].forEach((section) => {
      if (section.dataset["sectionFor"] === targetDatasetValue) {
        document.querySelector(".App").scrollTo({
          top: section.offsetTop - (window.innerWidth > 930 ? 93 : 213),
          left: 0,
          behavior: "smooth",
        });
      }
    });
  }
  getElementDimensions(element, xAxis, yAxis) {
    return [
      element.getBoundingClientRect().left +
        element.getBoundingClientRect().width / 2 -
        xAxis,
      yAxis -
        element.getBoundingClientRect().bottom +
        element.getBoundingClientRect().height / 2,
    ];
  }
  determineTheNearstElm(className, type) {
    // Define the window axis
    // let yAxis = window.innerHeight / 2,
    //   xAxis = window.innerWidth / 2;
    // Determine the nearst element
    // let elementDimenions = this.getElementDimensions(one, xAxis, yAxis),
    //   disatanceFromCenter = Math.sqrt(
    //     Math.pow(elementDimenions[0], 2) + Math.pow(elementDimenions[1], 2)
    //   )
    let nearstElm,
      maxDistance = Number.NEGATIVE_INFINITY,
      nearstElmIndex;
    if (type && type === 2) {
      [...document.querySelectorAll(className)].forEach((one, index) => {
        // Define the window axis
        let yAxis = window.innerHeight / 2,
          xAxis = window.innerWidth / 2;
        // Determine the nearst element
        let elementDimenions = this.getElementDimensions(one, xAxis, yAxis),
          disatanceFromCenter = Math.sqrt(0 + Math.pow(elementDimenions[1], 2));
        if (
          disatanceFromCenter / yAxis < 1 &&
          disatanceFromCenter / yAxis > 0
        ) {
          one.classList.add("active");
        } else {
          one.classList.remove("active");
        }
        // let howManyOfAnItemOnScreen =
        //   (document.querySelector(".App").scrollTop - one.offsetTop + 93) /
        //   one.clientHeight;
      });
      return;
    }
    [...document.querySelectorAll(className)].forEach((one, index) => {
      let howManyOfAnItemOnScreen =
        (document.querySelector(".App").scrollTop -
          one.offsetTop +
          (window.innerWidth > 930 ? 93 : 213)) /
        one.clientHeight;

      // console.log(
      //   index,
      //   howManyOfAnItemOnScreen < 0.8 &&
      //     howManyOfAnItemOnScreen > -0.8 &&
      //     howManyOfAnItemOnScreen > maxDistance
      // );
      if (
        howManyOfAnItemOnScreen < (window.innerWidth > 810 ? 0.95 : 0.8) &&
        howManyOfAnItemOnScreen > -0.8 &&
        howManyOfAnItemOnScreen > maxDistance
      ) {
        maxDistance = howManyOfAnItemOnScreen;
        nearstElm = one.dataset["sectionFor"]; // this should be "one.id"
        nearstElmIndex = index;
      }
    });
    // console.log(nearstElmIndex, nearstElm);
    return nearstElm && nearstElmIndex >= 0
      ? nearstElm
      : this.state.activeSection;
  }
  render() {
    return (
      <div
        className="App"
        onScroll={() => {
          let activeSection = this.determineTheNearstElm(".sections", 0);
          this.determineTheNearstElm(".stage", 2);
          this.setState({ ...this.state, activeSection });

          // you can get the nearst element index, or the nearst element itself, from here
        }}
        style={{ height: "100vh", maxHeight: "100vh", overflowY: "scroll" }}
      >
        <link rel="preload" href={showCaseImg} as="image" />
        <Header
          scrollTo={this.scrollTo}
          activeSection={this.state.activeSection}
        />
        <HomeSection
          scrollTo={this.scrollTo}
          activeSection={this.state.activeSection}
        />
        <AboutSection
          scrollTo={this.scrollTo}
          activeSection={this.state.activeSection}
        />
        <SkillSection
          scrollTo={this.scrollTo}
          activeSection={this.state.activeSection}
        />
        <EducationsSection
          scrollTo={this.scrollTo}
          activeSection={this.state.activeSection}
        />
        <WorkSection
          scrollTo={this.scrollTo}
          activeSection={this.state.activeSection}
        />
        <ContactSection
          scrollTo={this.scrollTo}
          activeSection={this.state.activeSection}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
