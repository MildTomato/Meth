import React from "react";
import { Link } from "react-router-dom";

export class Footer extends React.Component {
  render() {
    
    return (
      <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="columns small-6">Footer</div>
              <div className="columns small-6">
              Links
              </div>
            </div>
          </div>
      </footer>
    );
  }
}
