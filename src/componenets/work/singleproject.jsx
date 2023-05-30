import React, { Component } from "react";

export class SingleProject extends Component {
  render() {
    // let codeImg = require("../../public/imgs/projects/" + "code.jpg");
    let extension = ".webp";
    let img = this.props.img;
    // this.props.type === "code"
    //   ? require("../../imgs/projects/code.webp")
    //   : require("../../imgs/projects/" + this.props.img + extension);
    return (
      <li
        className="single-project"
        style={{
          "--index": this.props.index,
        }}
      >
        <span
          className="right-part part"
          style={{
            // background:
            //   (this.props.type === "code"
            //     ? "url(./imgs/projects/code.jpg)"
            //     : "url(./imgs/projects/" + this.props.img + ")") +
            //   " no-repeat center center/cover",
            background: `url(${img}) no-repeat center center/cover`,
          }}
        >
          {this.props.name}
        </span>
        <span
          className="lift-part part"
          style={{
            background: `url(${img}) no-repeat center center/cover`,
          }}
        >
          {this.props.name}
        </span>
        <a
          href={
            this.props.link.startsWith("http")
              ? this.props.link
              : "./projects/" + this.props.link
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.props.type === "code" ? "Open Code" : "Open It"}
        </a>
      </li>
    );
  }
}

export default SingleProject;
