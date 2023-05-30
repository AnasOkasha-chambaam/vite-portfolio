import React, { Component } from "react";
export class Stage extends Component {
  render() {
    // let extension = ".webp";
    // let img = require("../../imgs/" + this.props.img + extension);
    return (
      <div className="stage" style={{ "--index": this.props.index }}>
        <div
          className="stage-img"
          style={{
            // background: `url(./imgs/${this.props.img}) no-repeat center center/cover`,
            background: `url(${this.props.img}) no-repeat center center/cover`,
          }}
        >
          <p className="title">{this.props.title}</p>
        </div>
        <div className="content">
          <p className="title">{this.props.title}</p>
          <p className="year">({this.props.year})</p>
          <p className="place">{this.props.place}</p>
          <p className="discription">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Stage;
