import React, { Component } from "react";
import SingleProject from "./singleproject";
import codeImg from "../../imgs/projects/code.webp";
import olympian_proj from "../../imgs/projects/olympian_proj.webp";
import car_care from "../../imgs/projects/car_care.webp";
import meal_finder from "../../imgs/projects/meal_finder.webp";
import tracalorie_final from "../../imgs/projects/tracalorie_final.webp";
import currency_convertor from "../../imgs/projects/currency_convertor.webp";
import ChemCalc from "../../imgs/projects/ChemCalc.webp";
import booklist from "../../imgs/projects/booklist.webp";
import hangman from "../../imgs/projects/hangman.webp";
import expense_tracker from "../../imgs/projects/expense_tracker.webp";
import infinity_scrolling from "../../imgs/projects/infinity_scrolling.webp";
import fictional_company from "../../imgs/projects/fictional_company.webp";
import chat_app from "../../imgs/projects/chat_app.webp";

export class WorkSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: "backend",
      languages: {
        all: [],
        react: [
          {
            name: "Online Shopping",
            // link: "https://github.com/AnasOkasha-chambaam/ssccaannddiiwweebb",
            link: "https://online-shopping-project.anasite.me/",
            key: Math.random() * 1000 + "-online_shopping",
            type: "code",
            img: codeImg,
          },
          {
            name: "Github Finder",
            link: "https://github.com/AnasOkasha-chambaam/gitfinder/tree/master",
            key: Math.random() * 1000 + "-github_finder",
            type: "code",
            img: codeImg,
          },
        ],
        backend: [
          {
            name: "Chat App",
            link: "https://a-test-app302.herokuapp.com/",
            key: Math.random() * 1000 + "-chat_app",
            img: chat_app,
            type: "live",
          },
          {
            name: "Bootcamp Database",
            link: "https://github.com/AnasOkasha-chambaam/first-backend-proj",
            key: Math.random() * 1000 + "-bootcamp_database",
            type: "code",
            img: codeImg,
          },
        ],
        // mern: [],
        vanilla_js: [
          {
            name: "Olympian Project",
            link: "https://olympian-website.projects.anasite.me/home.html",
            key: Math.random() * 1000 + "-olympian_proj",
            img: olympian_proj,
            type: "live",
          },
          {
            name: "First Project Ever",
            link: "https://projects.anasite.me/the-first-project-ever/car-index.html",
            key: Math.random() * 1000 + "-car_care",
            img: car_care,
            type: "live",
          },
          {
            name: "Meal Finder",
            link: "https://meal-finder.projects.anasite.me/",
            key: Math.random() * 1000 + "-meal_finder",
            img: meal_finder,
            type: "live",
          },
          {
            name: "Track Calories",
            link: "https://tracalorie-final.projects.anasite.me/",
            key: Math.random() * 1000 + "-tracalorie_final",
            img: tracalorie_final,
            type: "live",
          },
          {
            name: "Currency Convertor",
            link: "https://currency-converter.projects.anasite.me/",
            key: Math.random() * 1000 + "-currency_convertor",
            img: currency_convertor,
            type: "live",
          },
          {
            name: "Chemical Recipes",
            link: "https://recipe-calculator.projects.anasite.me/",
            key: Math.random() * 1000 + "-ChemCalc",
            img: ChemCalc,
            type: "live",
          },
          {
            name: "Book List",
            link: "https://booklist.projects.anasite.me/",
            key: Math.random() * 1000 + "-booklist",
            img: booklist,
            type: "live",
          },
          {
            name: "Hangman",
            link: "https://hangman.projects.anasite.me/",
            key: Math.random() * 1000 + "-hangman",
            img: hangman,
            type: "live",
          },
          {
            name: "Expense Tracker",
            link: "https://expense-tracker.projects.anasite.me/",
            key: Math.random() * 1000 + "-expense_tracker",
            img: expense_tracker,
            type: "live",
          },
          {
            name: "Infinity Scrolling",
            link: "https://infinity-scrolling.projects.anasite.me/",
            key: Math.random() * 1000 + "-infinity_scrolling",
            img: infinity_scrolling,
            type: "live",
          },
          {
            name: "Fictional Company",
            link: "https://fictional-company.projects.anasite.me/",
            key: Math.random() * 1000 + "-fictional_company",
            img: fictional_company,
            type: "live",
          },
        ],
      },
    };
  }
  render() {
    return (
      <section
        className={
          "sections" +
          (this.props.activeSection && this.props.activeSection === "work"
            ? " active"
            : "")
        }
        data-section-for="work"
        id="projects"
      >
        <div className="programming_languages">
          <div className="content">
            <ul className="list-of-languages">
              {[...Object.keys(this.state.languages)].map((language, index) => {
                return (
                  <li
                    className={
                      "language" +
                      (this.state.currentLanguage === language ? " active" : "")
                    }
                    id={language.toLowerCase()}
                    key={index + "_" + language.toLowerCase()}
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        currentLanguage: language,
                      });
                    }}
                  >
                    {language.toUpperCase()}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="project-showcase">
          <div className="content">
            <ul className="projects-list">
              {this.state.currentLanguage === "all"
                ? Object.keys(this.state.languages).map((language) => {
                    return this.state.languages[language].map(
                      ({ name, link, key, type, img }, index) => {
                        return (
                          <SingleProject
                            name={name}
                            link={link}
                            key={key}
                            type={type}
                            img={img}
                            index={index}
                          />
                        );
                      }
                    );
                  })
                : this.state.languages[this.state.currentLanguage].map(
                    ({ name, link, key, type, img }, index) => {
                      return (
                        <SingleProject
                          name={name}
                          link={link}
                          key={key}
                          type={type}
                          img={img}
                          index={index}
                        />
                      );
                    }
                  )}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default WorkSection;
