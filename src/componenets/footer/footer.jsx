import React, { Component } from "react";
import Logo from "../logo/logo";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="text">
          Built By <Logo /> Anasite &copy; 2022 All Rights Reserved.
        </p>
      </footer>
    );
  }
}

export default Footer;
