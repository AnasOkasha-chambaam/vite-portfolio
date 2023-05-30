import React, { Component } from "react";

export class Skill extends Component {
  render() {
    return (
      <svg
        className="svg-skill"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        // skill progression
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
        viewBox="0 0 500 500"
      >
        <g id="UrTavla">
          <circle
            className="path-circle"
            style={{
              fill: "url(#toning)",
            }}
            cx="250"
            cy="250"
            r="215"
          ></circle>
          <circle
            style={{
              fill: "url(#toning)",
              "--progress-percentage":
                this.props.progression * 1350.339111328125,
            }}
            cx="250"
            cy="250"
            r="215"
          ></circle>

          <text x="50%" y="52%" textAnchor="middle" dy=".3em">
            {this.props.skillName}
          </text>
        </g>
      </svg>
    );
  }
}

export default Skill;
