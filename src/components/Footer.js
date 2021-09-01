import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">made with <i className="fa fa-heart heart"/> by</span><a href="https://www.serdarbudak.com.tr">Serdar Budak</a>
          </div>
        </footer>
      </div>
    );
  }
}
