import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="text-white text-center">
          <img
            alt="serdar budak"
            src="https://www.serdarbudak.com.tr/_next/static/images/logoW-9420a2d091ff277f3f95224812d88adf.png"
            width="80"
            className="mb-4"
          />

          <h1 className="display-4">Background Removal Tool</h1>
          <p className="lead mb-0">Fast, simple and great performance.</p>
        </header>
      </div>
    );
  }
}
